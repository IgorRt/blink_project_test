import { useEffect, useState } from 'react';

export function useMediaQuery(query: string, defaultValue = false): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return defaultValue;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);

    setMatches(mql.matches);
    if ('addEventListener' in mql) {
      mql.addEventListener('change', handler);
      return () => mql.removeEventListener('change', handler);
    }

    const legacyMql = mql as MediaQueryList & {
      addListener: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener: (listener: (event: MediaQueryListEvent) => void) => void;
    };

    legacyMql.addListener(handler);
    return () => legacyMql.removeListener(handler);
  }, [query]);

  return matches;
}

export const useIsDesktop = () => useMediaQuery('(min-width: 1024px) and (hover: hover)');
export const usePrefersReducedMotion = () => useMediaQuery('(prefers-reduced-motion: reduce)');
