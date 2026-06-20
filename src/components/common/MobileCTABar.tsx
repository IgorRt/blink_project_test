import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { CONSULTATION_MAILTO } from '../../lib/contacts';

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-3 inset-x-3 z-[70] lg:hidden"
        >
          <div className="flex items-center gap-2 bg-charcoal/95 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl">
            <a
              href="tel:+74212450103"
              aria-label="Позвонить"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white active:scale-95 transition-transform shrink-0"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={CONSULTATION_MAILTO}
              className="flex-1 py-3 px-4 rounded-full bg-gold text-charcoal font-semibold text-sm active:scale-[0.98] transition-transform"
            >
              Оставить заявку
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
