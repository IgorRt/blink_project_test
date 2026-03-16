import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { AboutStats } from './components/home/AboutStats';
import { Location } from './components/home/Location';
import { Infrastructure } from './components/home/Infrastructure';
import { Footer } from './components/layout/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import architectureHero from './assets/images/architecture-hero.png';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-background">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <AboutStats />
        <Location />
        <Infrastructure />
        
        {/* Architecture Section (Stylized Placeholder) */}
        <section id="architecture" className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse gap-20 lg:items-center">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
                >
                  <img
                    src={architectureHero}
                    alt="Архитектура"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
              
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/10">
                    Архитектура
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase mb-6 leading-tight">
                    Архитектура, <br />
                    определяющая <br />
                    будущее города
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Панорамное остекление, лаконичные архитектурные решения, эстетика и функциональность. 
                    Хабаровск-Сити станет новой визитной карточкой города, воплощая в себе лучшие мировые стандарты бизнес-среды.
                  </p>
                  <div className="space-y-4">
                    {['Панорамное остекление', 'Лаконичные формы', 'Эстетика и комфорт', 'Инновационные решения'].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-lg font-bold text-primary">
                        <div className="w-6 h-1 bg-primary rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;