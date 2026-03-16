from playwright.sync_api import Page, expect, sync_playwright

def verify_feature(page: Page):
  page.goto("http://localhost:3000")
  page.wait_for_timeout(2000)

  # Scroll down to test the burger menu close on scroll
  # First open the menu (Burger menu is hidden on desktop by default in CSS)
  # For Desktop, it won't be visible. We'll skip the click here.

  # Scroll down
  page.evaluate("window.scrollTo(0, 500)")
  page.wait_for_timeout(1000)

  # Scroll back up to Navbar
  page.evaluate("window.scrollTo(0, 0)")
  page.wait_for_timeout(1000)

  # Check Navbar updated phone number
  navbar = page.locator('nav')
  expect(navbar).to_contain_text('+7 (4212) 50-80-28')

  # Scroll down to Infrastructure
  page.evaluate("document.getElementById('infrastructure').scrollIntoView()")
  page.wait_for_timeout(1000)
  page.screenshot(path="/home/jules/verification/verification-infrastructure.png")

  # Scroll down to Footer
  page.evaluate("document.getElementById('contacts').scrollIntoView()")
  page.wait_for_timeout(1000)
  footer = page.locator('footer')
  expect(footer).to_contain_text('+7 (4212) 50-80-28')
  expect(footer).to_contain_text('psi@khv.gov.ru')
  expect(footer).to_contain_text('Амурский б-р, 43')
  expect(footer).to_contain_text('РАЗРАБОТКА: ПРОЕКТНО-СТРОИТЕЛЬНЫЙ ИНСТИТУТ')

  page.screenshot(path="/home/jules/verification/verification-footer.png")
  page.wait_for_timeout(1000)

if __name__ == "__main__":
  with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Desktop verification
    context = browser.new_context(record_video_dir="/home/jules/verification/video")
    page = context.new_page()
    try:
      verify_feature(page)
    finally:
      context.close()

    # Mobile verification for Infrastructure scale and Burger menu scroll close
    context_mobile = browser.new_context(
        viewport={'width': 375, 'height': 667},
        device_scale_factor=2,
        is_mobile=True,
        record_video_dir="/home/jules/verification/video_mobile"
    )
    page_mobile = context_mobile.new_page()
    try:
      page_mobile.goto("http://localhost:3000")
      page_mobile.wait_for_timeout(2000)

      # Test mobile menu close on scroll
      page_mobile.click('button.text-white') # Open burger menu
      page_mobile.wait_for_timeout(1000)
      expect(page_mobile.locator('.fixed.inset-0.z-\\[60\\]')).to_be_visible()
      page_mobile.screenshot(path="/home/jules/verification/verification-mobile-menu-open.png")

      # Scroll down and check menu is closed
      page_mobile.evaluate("window.scrollTo(0, 500)")
      page_mobile.wait_for_timeout(1000)

      # Since it fades out via opacity/translate instead of display:none, we can check the class
      expect(page_mobile.locator('.fixed.inset-0.z-\\[60\\]')).to_have_class(
          'fixed inset-0 z-[60] bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden opacity-0 translate-x-full'
      )
      page_mobile.screenshot(path="/home/jules/verification/verification-mobile-menu-closed.png")

      page_mobile.evaluate("document.getElementById('infrastructure').scrollIntoView()")
      page_mobile.wait_for_timeout(1000)
      page_mobile.screenshot(path="/home/jules/verification/verification-infrastructure-mobile.png")
    finally:
      context_mobile.close()

    browser.close()
