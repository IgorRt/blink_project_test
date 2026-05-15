import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'О проекте', href: '#about' },
  { name: 'Расположение', href: '#location' },
  { name: 'Архитектура', href: '#architecture' },
  { name: 'Инфраструктура', href: '#infrastructure' },
  { name: 'Партнёрам', href: '#partners' },
  { name: 'Контакты', href: '#contacts' },
];

type Theme = 'dark' | 'light';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  // Scroll-spy: pick the section currently sitting under the navbar and copy its data-theme.
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-theme]');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        // The "current" section is the topmost one intersecting the strip below the navbar.
        const active = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        const t = active.target.getAttribute('data-theme');
        if (t === 'dark' || t === 'light') setTheme(t);
      },
      {
        // Active strip: 60px from the top (under navbar) down to top 15% of viewport.
        rootMargin: '-60px 0px -85% 0px',
        threshold: 0,
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  const blendStyle: React.CSSProperties = {
    color: theme === 'dark' ? '#ffffff' : '#0f1217',
    transition: 'color 200ms ease',
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-5',
          // Glass: blur + saturate without own background so blend-mode can read through.
          'backdrop-blur-xl backdrop-saturate-150',
          'border-b border-white/[0.08]'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Logo */}
          <a
            href="#"
            style={blendStyle}
            className="text-lg sm:text-xl lg:text-[1.35rem] font-black tracking-[-0.03em] uppercase shrink-0"
          >
            Хабаровск<span className="font-light opacity-70">-Сити</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-14 whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={blendStyle}
                className={cn(
                  'relative text-[11px] xl:text-xs font-semibold uppercase tracking-[0.18em] opacity-90 hover:opacity-100 transition-opacity',
                  'after:content-[""] after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-current after:transition-[width] hover:after:w-full'
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right cluster — mobile burger only */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Открыть меню"
              style={blendStyle}
              className="p-2 -mr-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay (solid, no blend) */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-charcoal transition-[opacity,transform] duration-300 lg:hidden',
          mobileMenuOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-full pointer-events-none'
        )}
      >
        <div className="flex flex-col h-full p-6 sm:p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-10">
            <div className="text-lg sm:text-xl font-black tracking-[-0.03em] uppercase text-white">
              Хабаровск<span className="font-light opacity-70">-Сити</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Закрыть меню"
              className="p-2 text-white hover:text-gold transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <div className="w-12 h-px bg-gold mb-8" />

          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline gap-4 py-3 border-b border-white/10 text-xl sm:text-2xl font-black tracking-tight uppercase text-white hover:text-gold transition-colors"
              >
                <span className="text-[10px] font-medium tracking-widest text-gold/70 tabular-nums">
                  0{i + 1}
                </span>
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8">
            <a href="tel:+74212450103" className="flex items-center gap-3 text-sm font-semibold text-white/80 mb-5">
              <Phone className="w-4 h-4 text-gold" fill="currentColor" strokeWidth={1.5} />
              <span>+7 (4212) 45-01-03</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-white text-foreground py-4 rounded-full font-semibold text-sm uppercase tracking-[0.18em] active:scale-[0.98] transition-transform"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
