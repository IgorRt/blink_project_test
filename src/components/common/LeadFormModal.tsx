import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { useLeadForm, type LeadFormIntent } from './LeadFormContext';
import { CONTACT_EMAIL } from '../../lib/contacts';

const intentTitles: Record<LeadFormIntent, { eyebrow: string; title: string; subtitle: string }> = {
  consultation: {
    eyebrow: 'Заявка',
    title: 'Оставьте заявку',
    subtitle: 'Наш менеджер свяжется с вами в течение рабочего дня и ответит на любые вопросы по проекту.',
  },
  presentation: {
    eyebrow: 'Презентация',
    title: 'Получить презентацию',
    subtitle: 'Отправим подробную презентацию проекта на вашу почту и предложим время для встречи.',
  },
  partner: {
    eyebrow: 'Партнёрам',
    title: 'Стать партнёром',
    subtitle: 'Расскажите, какой формат сотрудничества вас интересует — и мы подготовим индивидуальное предложение.',
  },
  resident: {
    eyebrow: 'Резидентам',
    title: 'Запрос для резидента',
    subtitle: 'Подберём подходящий формат — жильё, офис или коммерческое помещение в Хабаровск-Сити.',
  },
};

export function LeadFormModal() {
  const { isOpen, intent, close } = useLeadForm();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setPhone('');
      setConsent(true);
      setSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !consent) {
      toast.error('Заполните имя, телефон и подтвердите согласие');
      return;
    }
    const subject = encodeURIComponent(`${copy.title} - Хабаровск-Сити`);
    const body = encodeURIComponent(
      `Имя: ${name.trim()}\nТелефон: ${phone.trim()}\nТема: ${copy.title}`,
    );
    setSubmitting(true);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 300));
    setSubmitting(false);
    toast.success('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
    close();
  };

  const copy = intentTitles[intent];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Закрыть"
            onClick={close}
            className="absolute inset-0 bg-charcoal/70 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-lg bg-background text-foreground sm:rounded-2xl rounded-t-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Закрыть"
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-foreground/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="px-6 sm:px-8 pt-8 sm:pt-10 pb-6 overflow-y-auto">
              <div className="flex items-center gap-2 mb-4">
                <span className="block w-6 h-px bg-gold" />
                <span className="eyebrow">{copy.eyebrow}</span>
              </div>
              <h3 id="lead-form-title" className="font-display text-3xl sm:text-4xl leading-tight mb-3 tracking-tight">
                {copy.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                {copy.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground">Имя</span>
                  <input
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Как к вам обращаться?"
                    className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:bg-background transition-colors"
                    required
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted-foreground">Телефон</span>
                  <input
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-secondary/60 border border-border rounded-xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:bg-background transition-colors"
                    required
                  />
                </label>

                <label className="flex items-start gap-3 select-none cursor-pointer">
                  <span
                    className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded border transition-colors shrink-0 ${
                      consent ? 'bg-accent border-accent' : 'bg-transparent border-border'
                    }`}
                  >
                    {consent && <Check className="w-3.5 h-3.5 text-background" strokeWidth={3} />}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Согласен на обработку персональных данных и получение информации о проекте.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 w-full px-6 py-4 rounded-full bg-foreground text-background font-semibold text-sm tracking-wide hover:bg-charcoal active:scale-[0.98] disabled:opacity-60 transition-[transform,background-color]"
                >
                  {submitting ? 'Отправляем…' : 'Отправить заявку'}
                </button>

                <p className="text-[11px] text-muted-foreground/80 text-center">
                  Или позвоните напрямую:{' '}
                  <a href="tel:+74212450103" className="text-foreground font-medium hover:text-accent transition-colors">
                    +7 (4212) 45-01-03
                  </a>
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
