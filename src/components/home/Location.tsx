import React from 'react';
import { motion } from 'framer-motion';
import mapImage from '../../assets/images/map-image.png';

const locations = [
  { label: 'р. Амур', value: '0 мин' },
  { label: 'Речной вокзал', value: '5 мин' },
  { label: 'Железнодорожный вокзал', value: '15 мин' },
  { label: 'Аэропорт', value: '25 мин' },
];

export function Location() {
  return (
    <section id="location" className="relative py-24 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:items-center">
          {/* Left Side: Map Illustration */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            >
              <img
                src={mapImage}
                alt="Расположение Хабаровск-Сити"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right Side: Text & Location Points */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                Расположение
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 leading-tight">
                НА БЕРЕГУ АМУРА- <br />
                10 МИНУТ ДО ЦЕНТРА
              </h2>
              <p className="text-xl text-white/70 max-w-xl leading-relaxed mb-12">
                Уникальное расположение на берегу великого Амура в непосредственной близости от исторического 
                центра города. Развитая транспортная инфраструктура обеспечивает быструю доступность ключевых объектов.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <div className="text-3xl font-black text-white">{loc.value}</div>
                  <div className="text-sm font-bold text-white/50 uppercase tracking-widest">{loc.label}</div>
                  <div className="w-8 h-1 bg-white/20 rounded-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
