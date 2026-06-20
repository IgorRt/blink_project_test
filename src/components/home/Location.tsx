import React from 'react';
import { motion } from 'framer-motion';
import { YandexMap } from './YandexMap';
import { AnimatedValueText } from '../common/AnimatedNumber';

const locations = [
  { label: 'р. Амур', value: '1', unit: 'мин' },
  { label: 'Речной вокзал', value: '5', unit: 'мин' },
  { label: 'Железнодорожный вокзал', value: '15', unit: 'мин' },
  { label: 'Аэропорт', value: '25', unit: 'мин' },
];

export function Location() {
  return (
    <section id="location" data-theme="dark" className="relative py-16 md:py-28 bg-charcoal overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-stretch">
          {/* Left Side: Yandex Map — stretches to match the right column on desktop */}
          <div className="flex-1 w-full min-w-0 flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[480px] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-gold/20 bg-charcoal"
            >
              <YandexMap />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl md:rounded-[2rem]" />
            </motion.div>
          </div>

          {/* Right Side: Text & Location Points */}
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-8 h-px bg-gold" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold">
                  Расположение
                </span>
              </div>
              <h2 className="text-[clamp(1.625rem,5.5vw,3rem)] font-black text-white tracking-tight uppercase mb-4 md:mb-5 leading-[1.05] text-balance break-words">
                На берегу Амура — 10 минут до центра
              </h2>
              <p className="text-base md:text-lg text-white max-w-xl leading-relaxed mb-6 md:mb-8">
                Уникальное расположение на берегу великого Амура в непосредственной близости
                от исторического центра города. Развитая транспортная инфраструктура обеспечивает
                быструю доступность ключевых объектов.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-8">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(i * 0.05, 0.15) }}
                  className="flex flex-col gap-2 pl-4 border-l border-gold/30"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-none">
                    <AnimatedValueText value={loc.value} />
                    <span className="text-white ml-1 text-base sm:text-lg align-baseline">{loc.unit}</span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white uppercase tracking-[0.2em] leading-tight">
                    {loc.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
