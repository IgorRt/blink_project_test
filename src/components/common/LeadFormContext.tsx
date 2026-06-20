import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type LeadFormIntent = 'consultation' | 'presentation' | 'partner' | 'resident';

type LeadFormContextValue = {
  isOpen: boolean;
  intent: LeadFormIntent;
  open: (intent?: LeadFormIntent) => void;
  close: () => void;
};

const LeadFormContext = createContext<LeadFormContextValue | null>(null);

export function LeadFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<LeadFormIntent>('consultation');

  const open = useCallback((next: LeadFormIntent = 'consultation') => {
    setIntent(next);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo(() => ({ isOpen, intent, open, close }), [isOpen, intent, open, close]);

  return <LeadFormContext.Provider value={value}>{children}</LeadFormContext.Provider>;
}

export function useLeadForm() {
  const ctx = useContext(LeadFormContext);
  if (!ctx) throw new Error('useLeadForm must be used inside LeadFormProvider');
  return ctx;
}
