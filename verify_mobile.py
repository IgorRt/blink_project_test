import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # Mobile viewport
        context = await browser.new_context(
            viewport={'width': 375, 'height': 667},
            device_scale_factor=2,
            is_mobile=True,
            record_video_dir="videos/"
        )
        page = await context.new_page()

        # Go to the local dev server
        await page.goto('http://localhost:3000')

        # Wait for load
        await page.wait_for_timeout(2000)

        # Take a screenshot of the hero section
        await page.screenshot(path='verification-mobile-hero.png')

        # Click the burger menu
        await page.click('button.text-white') # Burger menu icon
        await page.wait_for_timeout(1000)

        # Take a screenshot of the opened menu
        await page.screenshot(path='verification-mobile-menu.png')

        await context.close()
        await browser.close()

asyncio.run(main())
