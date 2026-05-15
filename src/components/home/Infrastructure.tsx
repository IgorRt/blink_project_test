import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Hotel, Activity, Building2, Anchor, Trees } from 'lucide-react';
import { AnimatedValueText } from '../common/AnimatedNumber';

const infrastructureItems = [
  {
    title: 'Смотровые площадки',
    value: '700 тыс. м²',
    icon: Trees,
    description: 'Панорамные обзорные зоны на берегу Амура с видом на исторический центр.',
  },
  {
    title: 'Деловой комплекс',
    value: '280 тыс. м²',
    icon: Landmark,
    description: 'Современные офисы класса А, коворкинги и пространства для переговоров.',
  },
  {
    title: 'Конгресс-центры',
    value: '10.2 га',
    icon: Building2,
    description: 'Залы для международных форумов, конференций и выставок.',
  },
  {
    title: 'Гостиничный комплекс',
    value: '20 тыс. м²',
    icon: Hotel,
    description: 'Отели уровня 4★ и 5★ для деловых поездок и гостей города.',
  },
  {
    title: 'Парусная школа',
    value: 'Морское дело',
    icon: Anchor,
    description: 'Обучение парусному спорту и водным дисциплинам на акватории Амура.',
  },
  {
    title: 'Спорт и рекреация',
    value: 'Центр видов спорта',
    icon: Activity,
    description: 'Фитнес-центры, бассейны, корты и зоны для активного отдыха.',
  },
  {
    title: 'Образование',
    value: '2 школы и 5 садов',
    icon: GraduationCap,
    description: 'Современные учреждения для детей резидентов кластера.',
  },
  {
    title: 'Жилой квартал',
    value: 'Бизнес-класс',
    icon: Building2,
    description: 'Жильё с продуманной планировкой и панорамным остеклением.',
  },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" data-theme="light" className="relative py-16 md:py-28 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="block w-8 h-px bg-gold" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-gold-deep">
                Инфраструктура
              </span>
              <span className="block w-8 h-px bg-gold" />
            </div>
            <h2 className="text-[clamp(1.625rem,5.5vw,3.5rem)] font-black text-foreground tracking-tight uppercase mb-5 md:mb-6 leading-[1.05] text-balance break-words hyphens-auto">
              Многофункциональное пространство
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Комплексная инфраструктура «Хабаровск-Сити» создана для максимального комфорта
              и эффективности. Всё необходимое для бизнеса и жизни в шаговой доступности.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {infrastructureItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(i * 0.03, 0.18) }}
              className="group relative p-6 md:p-7 rounded-2xl bg-background border border-border lg:hover:border-gold/40 transition-[border-color] overflow-hidden"
            >
              {/* corner accent */}
              <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none opacity-60 lg:group-hover:opacity-100 transition-opacity">
                <div className="absolute top-0 right-0 w-full h-px bg-gold/50" />
                <div className="absolute top-0 right-0 h-full w-px bg-gold/50" />
              </div>

              <div className="mb-5 text-gold">
                <item.icon className="w-7 h-7" strokeWidth={1.25} />
              </div>
              <h3 className="text-lg md:text-xl font-black text-foreground tracking-tighter mb-1.5 leading-tight break-words">
                {item.title}
              </h3>
              <p className="text-[10px] md:text-xs font-semibold text-gold-deep uppercase tracking-[0.2em] mb-3">
                <AnimatedValueText value={item.value} />
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
