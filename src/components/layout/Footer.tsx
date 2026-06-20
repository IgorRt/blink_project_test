import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'О проекте', href: '#about' },
  { name: 'Расположение', href: '#location' },
  { name: 'Архитектура', href: '#architecture' },
  { name: 'Инфраструктура', href: '#infrastructure' },
  { name: 'Партнёрам', href: '#partners' },
];

export function Footer() {
  return (
    <footer id="contacts" data-theme="dark" className="relative pt-16 md:pt-24 pb-10 bg-charcoal text-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-1 min-w-0">
            <div className="text-xl sm:text-2xl font-black tracking-tighter uppercase">
              Хабаровск<span className="font-light opacity-70">-Сити</span>
            </div>
            <div className="w-12 h-px bg-gold" />
            <p className="text-sm text-white/45 leading-relaxed max-w-xs">
              Любая информация, представленная на сайте, носит ознакомительный характер
              и не является публичной офертой.
            </p>
          </div>

          <div className="flex flex-col gap-5 min-w-0">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Разделы
            </div>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm sm:text-base text-white/85 hover:text-gold transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-2 min-w-0">
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Контакты
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="flex flex-col gap-3 min-w-0">
                <a href="tel:+74212450103" className="flex items-center gap-3 text-white hover:text-gold transition-colors group">
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-gold/40 transition-colors shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold">+7 (4212) 45-01-03</span>
                </a>
                <a
                  href="mailto:27stroyka@mail.ru"
                  className="flex items-center gap-3 text-white hover:text-gold transition-colors group min-w-0"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 group-hover:border-gold/40 transition-colors shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold truncate">27stroyka@mail.ru</span>
                </a>
              </div>
              <div className="flex items-start gap-3 text-white group min-w-0">
                <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 mt-1 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-semibold mb-1">г. Хабаровск</div>
                  <div className="text-xs sm:text-sm text-white/45">ул. Калинина, 107, оф. 219</div>
                  <div className="text-xs sm:text-sm text-white/45 mt-2 italic">Ежедневно с 9:00 до 18:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.2em] font-medium">
          <div>© 2026 Хабаровск-Сити</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a href="#" className="hover:text-gold transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-gold transition-colors sm:text-end">Отдел цифрового развития строительной отрасли</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
