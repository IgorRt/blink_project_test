import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { name: 'О проекте', href: '#about' },
  { name: 'Расположение', href: '#location' },
  { name: 'Архитектура', href: '#architecture' },
  { name: 'Инфраструктура', href: '#infrastructure' },
  { name: 'Партнерам', href: '#partners' },
  { name: 'Контакты', href: '#contacts' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setIsScrolled(scrolled);
      }

      // Only close if it's currently open to avoid unnecessary re-renders
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled, mobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className={cn(
            'text-2xl font-bold tracking-tighter uppercase',
            isScrolled ? 'text-primary' : 'text-white'
          )}>
            Хабаровск<span className="font-light opacity-70">-Сити</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:opacity-70',
                isScrolled ? 'text-primary' : 'text-white'
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+74212508028"
            className={cn(
              'hidden sm:flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-70',
              isScrolled ? 'text-primary' : 'text-white'
            )}
          >
            <Phone className="w-4 h-4" />
            <span>+7 (4212) 50-80-28</span>
          </a>
          
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={cn(
              'lg:hidden p-2 transition-colors',
              isScrolled ? 'text-primary' : 'text-white'
            )}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <button className={cn(
            'hidden lg:block px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95',
            isScrolled 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-white text-primary'
          )}>
            Консультация
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        'fixed inset-0 z-[60] bg-zinc-900/98 backdrop-blur-xl transition-all duration-500 lg:hidden',
        mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
      )}>
        <div className="flex flex-col h-full p-8">
          <div className="flex items-center justify-between mb-12">
            <div className="text-2xl font-bold tracking-tighter uppercase text-white">
              Хабаровск<span className="font-light opacity-70">-Сити</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white">
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:opacity-70"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-white/20">
            <a href="tel:+74212508028" className="flex items-center gap-3 text-lg font-semibold text-white mb-6">
              <Phone className="w-5 h-5" />
              <span>+7 (4212) 50-80-28</span>
            </a>
            <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold text-lg">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
