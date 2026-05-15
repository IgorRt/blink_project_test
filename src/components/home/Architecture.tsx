import React from 'react';
import { motion } from 'framer-motion';
import architectureHero from '../../assets/images/architecture-hero.webp';

const principles = [
  { title: 'Панорамное остекление', text: 'Максимум естественного света и видов на реку.' },
  { title: 'Лаконичные формы', text: 'Сдержанная геометрия, выверенные пропорции.' },
  { title: 'Эстетика и комфорт', text: 'Премиальные материалы и продуманные сценарии.' },
  { title: 'Инновационные решения', text: 'Энергоэффективность и умные системы.' },
];

export function Architecture() {
  return (
    <section id="architecture" data-theme="light" className="relative py-16 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 lg:items-center">
          <div className="flex-1 w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl group"
            >
              <img
                src={architectureHero}
                alt="Архитектура"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 lg:group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent pointer-events-none" />

              {/* gold corner frame */}
              <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-gold/70 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-gold/70 pointer-events-none" />
            </motion.div>
          </div>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-8 h-px bg-gold" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-deep">
                  Архитектура
                </span>
              </div>
              <h2 className="text-[clamp(1.625rem,5.5vw,3rem)] font-black text-foreground tracking-tight uppercase mb-5 md:mb-6 leading-[1.05] text-balance break-words">
                Архитектура, определяющая будущее
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 md:mb-10">
                Панорамное остекление, лаконичные архитектурные решения, эстетика и функциональность.
                Хабаровск-Сити станет новой визитной карточкой города, воплощая лучшие мировые стандарты бизнес-среды.
              </p>

              <div className="space-y-4 md:space-y-5">
                {principles.map((item) => (
                  <div key={item.title} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                    {/* Marker is an inline ::before element so it inherits the title's font-size
                        and sits on the x-height middle of the first line. */}
                    <div
                      className={[
                        'text-base md:text-lg font-bold text-foreground leading-tight',
                        'before:content-[""] before:inline-block before:align-middle',
                        'before:w-6 before:h-px before:bg-gold before:mr-3',
                        'before:relative before:-translate-y-px',
                      ].join(' ')}
                    >
                      {item.title}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 leading-relaxed pl-9">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
