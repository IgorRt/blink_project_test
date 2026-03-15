import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const heroBg = "https://v3b.fal.media/files/b/0a91d10c/N4RXxtCtEzCubo-pZIHeL_d1MiNmsI.png";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt="Хабаровск-Сити"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80 z-10" />
      </motion.div>

      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-6 w-full py-20 text-center flex flex-col items-center"
        style={{ y: titleY, opacity }}
      >
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8 animate-fade-in">
          Новая доминанта столицы
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase mb-6 leading-[0.9] text-balance"
          style={{ y: textY }}
        >
          Хабаровск<span className="opacity-70 font-light">-Сити</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light text-white/80">Город будущего</span>
        </motion.h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-white/80 mb-12 font-medium">
          Новая деловая доминанта столицы Хабаровского края. 
          Инновационное пространство для бизнеса, жизни и творчества.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="px-8 py-4 rounded-2xl bg-white text-primary font-bold text-lg hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
            Получить консультацию
          </button>
          <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto">
            О проекте
          </button>
        </div>
      </motion.div>

      {/* Floating Badge (Original Site Feature) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-12 rounded-full bg-white/30 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-2 after:h-2 after:bg-white after:rounded-full" />
      </div>
    </section>
  );
}
