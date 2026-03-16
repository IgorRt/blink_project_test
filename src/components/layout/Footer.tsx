import React from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube, Facebook, Send } from 'lucide-react';

const quickLinks = [
  { name: 'О проекте', href: '#about' },
  { name: 'Расположение', href: '#location' },
  { name: 'Архитектура', href: '#architecture' },
  { name: 'Инфраструктура', href: '#infrastructure' },
  { name: 'Партнерам', href: '#partners' },
];

export function Footer() {
  return (
    <footer id="contacts" className="relative py-24 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Partners Section (Embedded in Footer) */}
        <div id="partners" className="mb-24 pb-24 border-b border-white/10">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            <div className="flex-1">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                Партнерам
              </span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-tight">
                Пришло время <br />
                вывести бизнес <br />
                на новый уровень
              </h2>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed">
                Хабаровск-Сити приглашает партнеров и инвесторов к сотрудничеству. 
                Мы предлагаем уникальные возможности для развития вашего бизнеса 
                в самой современной деловой локации региона.
              </p>
            </div>
            
            <div className="flex-1">
              <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                <form className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Телефон"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all"
                  />
                  <textarea
                    placeholder="Сообщение"
                    rows={4}
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-all resize-none"
                  />
                  <div className="flex items-center gap-3 py-2 px-2">
                    <input type="checkbox" id="terms" className="rounded-md border-white/10 bg-white/5" />
                    <label htmlFor="terms" className="text-xs text-white/50">Принимаю условия обработки персональных данных</label>
                  </div>
                  <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                    Получить консультацию
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="flex flex-col gap-8">
            <div className="text-3xl font-black tracking-tighter uppercase">
              Хабаровск<span className="font-light opacity-70">-Сити</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Любая информация, представленная на этом сайте, носит исключительно ознакомительный характер 
              и не является публичной офертой.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white/70">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="text-lg font-bold uppercase tracking-widest text-white/50">Разделы</div>
            <div className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-white hover:text-white/70 transition-colors font-medium">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="text-lg font-bold uppercase tracking-widest text-white/50">Контакты</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <a href="tel:+74951545054" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold">+7 (495) 154-50-54</span>
                </a>
                <a href="mailto:info@khv-city.ru" className="flex items-center gap-3 text-white hover:text-white/70 transition-colors group">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-bold">info@khv-city.ru</span>
                </a>
              </div>
              <div className="flex items-start gap-3 text-white group">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold mb-1">г. Хабаровск</div>
                  <div className="text-sm text-white/50">ул. Ленина, д. 1, БЦ "Парус"</div>
                  <div className="text-sm text-white/50 mt-2 italic">Ежедневно с 9.00 до 19.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest font-bold">
          <div>© 2026 Хабаровск-Сити. Все права защищены.</div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/60 transition-colors">Разработка: Blink</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
