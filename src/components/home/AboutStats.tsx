import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Construction, MapPin, Waves } from 'lucide-react';

const stats = [
  { label: 'Общая площадь строительства', value: '1.6млн м²', icon: Construction },
  { label: 'Общая полезная площадь', value: '11млн м²', icon: Building2 },
  { label: 'До центра города', value: '10 мин', icon: MapPin },
  { label: 'Речной набережной', value: '5+ км', icon: Waves },
];

export function AboutStats() {
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          {/* Left Side: Text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4">
                О проекте
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter uppercase mb-6 leading-tight font-serif">
                ХАБАРОВСК-СИТИ – <br />
                ДРАЙВЕР ДЕЛОВОЙ <br />
                АКТИВНОСТИ ГОРОДА
              </h2>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                ХАБАРОВСК-СИТИ – крупнейший проект комплексного освоения территории в Дальневосточном регионе. 
                Мы создаем новое городское пространство, объединяющее бизнес-центры мирового уровня, 
                современное жилье и развитую социальную инфраструктуру.
              </p>
            </motion.div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
                Получить консультацию
              </button>
              <button className="px-8 py-4 rounded-2xl border-2 border-primary/10 text-primary font-bold text-lg hover:bg-secondary transition-all w-full sm:w-auto">
                Скачать презентацию
              </button>
            </div>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-secondary border border-border/50 hover:border-primary/20 transition-all hover:scale-[1.02] group"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:shadow-md transition-all">
                  <stat.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <div className="text-3xl font-black text-primary tracking-tighter mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
