import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const benefits = [
  { title: 'Прямая связь', text: 'С командой проекта' },
  { title: 'Гибкие условия', text: 'Индивидуальный подход' },
  { title: 'Прозрачность', text: 'На всех этапах' },
  { title: 'Поддержка', text: 'От региона' },
];

export function Partners() {
  return (
    <section id="partners" data-theme="dark" className="relative py-16 md:py-28 bg-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.07] blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              Партнёрам
            </span>
            <span className="block w-8 h-px bg-gold" />
          </div>
          <h2 className="text-[clamp(1.75rem,5.5vw,3rem)] font-bold tracking-tight mb-5 md:mb-6 leading-[1.05] text-balance">
            Время вывести бизнес на новый уровень
          </h2>
          <p className="text-base md:text-lg text-white/65 leading-relaxed max-w-2xl mx-auto">
            Хабаровск-Сити приглашает партнёров и инвесторов к сотрудничеству.
            Уникальные возможности для развития бизнеса в самой современной деловой локации региона.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 mt-12 md:mt-16 max-w-3xl mx-auto"
        >
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col gap-2 pl-3 border-l border-gold/30">
              <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-white">
                <Check className="w-4 h-4 text-gold flex-shrink-0" strokeWidth={2.5} />
                {b.title}
              </div>
              <div className="text-xs md:text-sm text-white/50 pl-6">{b.text}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-12 md:mt-16"
        >
          <a
            href="tel:+74212450103"
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gold text-charcoal font-semibold text-sm sm:text-base text-center lg:hover:bg-gold-soft active:scale-[0.98] transition-colors"
          >
            Позвонить нам
          </a>
          <a
            href="mailto:27stroyka@mail.ru"
            className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-transparent border border-white/25 text-white font-semibold text-sm sm:text-base text-center lg:hover:bg-white/5 lg:hover:border-white/40 transition-colors"
          >
            Написать на почту
          </a>
        </motion.div>
      </div>
    </section>
  );
}
