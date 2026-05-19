import React, { useLayoutEffect, useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/layout/Preloader';
import { Hero } from './components/home/Hero';
import { AboutStats } from './components/home/AboutStats';
import { Location } from './components/home/Location';
import { Infrastructure } from './components/home/Infrastructure';
import { Architecture } from './components/home/Architecture';
import { Partners } from './components/home/Partners';
import { Footer } from './components/layout/Footer';
import { LeadFormProvider } from './components/common/LeadFormContext';
import { LeadFormModal } from './components/common/LeadFormModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    const timeout = window.setTimeout(() => window.scrollTo(0, 0), 80);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, []);

  return (
    <LeadFormProvider>
      <div className="relative min-h-screen bg-background">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

        <Navbar />

        <main>
          <Hero />
          <AboutStats />
          <Location />
          <Architecture />
          <Infrastructure />
          <Partners />
        </main>

        <Footer />
        <LeadFormModal />
      </div>
    </LeadFormProvider>
  );
}

export default App;
