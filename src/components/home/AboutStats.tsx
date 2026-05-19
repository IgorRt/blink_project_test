import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Construction, MapPin, Waves } from 'lucide-react';
import { AnimatedValueText } from '../common/AnimatedNumber';
import { CONSULTATION_MAILTO } from '../../lib/contacts';
import presentationPdf from '../../assets/pdf/Хабаровск сити 28.03.2026.pdf';

const stats = [
  { label: 'Общая площадь строительства', value: '1.6', unit: 'млн м²', icon: Construction },
  { label: 'Общая полезная площадь', value: '11', unit: 'млн м²', icon: Building2 },
  { label: 'До центра города', value: '10', unit: 'мин', icon: MapPin },
  { label: 'Речной набережной', value: '5+', unit: 'км', icon: Waves },
];

export function AboutStats() {
  return (
    <section id="about" data-theme="light" className="relative py-16 md:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 lg:items-center">
          {/* Left Side: Text */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-10 md:mb-12"
            >
              <div className="inline-flex items-center gap-2.5 mb-5">
                <span className="block w-8 h-px bg-gold" />
                <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-deep">
                  О проекте
                </span>
              </div>
              <h2 className="text-[clamp(1.625rem,5.5vw,3rem)] font-black text-foreground tracking-tight uppercase mb-5 md:mb-6 leading-[1.05] text-balance break-words">
                Драйвер деловой активности города
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Хабаровск-Сити — крупнейший проект комплексного освоения территории в Дальневосточном регионе.
                Мы создаём новое городское пространство, объединяющее бизнес-центры мирового уровня,
                современное жильё и развитую социальную инфраструктуру.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={CONSULTATION_MAILTO}
                className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-foreground text-background font-semibold text-sm sm:text-base uppercase tracking-widest lg:hover:bg-charcoal active:scale-[0.98] transition-colors"
              >
                Получить консультацию
              </a>
              <a
                href={presentationPdf}
                download="Хабаровск сити 28.03.2026.pdf"
                className="px-6 py-3.5 sm:px-8 sm:py-4 rounded-full border border-foreground/15 text-foreground font-semibold text-sm sm:text-base uppercase tracking-widest lg:hover:border-gold lg:hover:text-gold-deep transition-colors"
              >
                Презентация
              </a>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4 min-w-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: Math.min(i * 0.05, 0.15) }}
                className="relative p-5 sm:p-7 rounded-2xl bg-secondary/60 border border-border lg:hover:border-gold/40 transition-colors group overflow-hidden"
              >
                {/* corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none opacity-60 lg:group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
                  <div className="absolute top-0 right-0 h-full w-px bg-gold/50" />
                </div>

                <div className="mb-4 sm:mb-6 text-gold">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8" strokeWidth={1.25} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-foreground tracking-tighter mb-1 leading-none">
                  <AnimatedValueText value={stat.value} />
                  <span className="text-gold ml-1.5 text-base sm:text-lg md:text-xl align-baseline">{stat.unit}</span>
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
