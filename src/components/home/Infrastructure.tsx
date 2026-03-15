import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Hotel, Activity, Building2, Anchor, Trees, Plus } from 'lucide-react';

const infrastructureItems = [
  { title: 'Смотровые площадки', value: '700тыс. м²', icon: Trees, color: 'text-emerald-500' },
  { title: 'Деловой комплекс', value: '280тыс. м²', icon: Landmark, color: 'text-indigo-500' },
  { title: 'Конгресс-центры', value: '10.2 га', icon: Building2, color: 'text-blue-500' },
  { title: 'Гостиничный комплекс', value: '20тыс. м²', icon: Hotel, color: 'text-amber-500' },
  { title: 'Парусная школа', value: 'Морское дело', icon: Anchor, color: 'text-cyan-500' },
  { title: 'Спорт и рекреация', value: 'Центр видов спорта', icon: Activity, color: 'text-rose-500' },
  { title: 'Образование', value: '2 школы и 5 садов', icon: GraduationCap, color: 'text-purple-500' },
  { title: 'Жилой квартал', value: 'Бизнес-класс', icon: Building2, color: 'text-slate-500' },
];

export function Infrastructure() {
  return (
    <section id="infrastructure" className="relative py-24 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20">
              Инфраструктура
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6 leading-tight">
              Масштабное многофункциональное <br />
              пространство
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Комплексная инфраструктура "Хабаровск-Сити" создана для обеспечения максимального 
              комфорта и эффективности. Все необходимое для бизнеса и жизни в шаговой доступности.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {infrastructureItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-10 rounded-3xl bg-white border border-border/50 hover:border-primary/20 transition-all hover:scale-[1.02] hover:shadow-xl relative overflow-hidden h-[320px] flex flex-col justify-start"
            >
              <div className="relative z-10">
                <div className={`mb-8 p-4 rounded-2xl bg-secondary w-fit transition-transform group-hover:scale-110 ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-primary tracking-tighter mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest opacity-70 group-hover:opacity-0 transition-opacity duration-300">
                  {item.value}
                </p>
              </div>

              {/* Hover Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-primary font-medium text-sm border-t border-primary/10 pt-4">
                  Пример текста. Подробное описание объекта инфраструктуры, его особенностей и преимуществ для резидентов.
                </p>
              </div>
              
              {/* Animated Accent */}
              <div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                <Plus className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
