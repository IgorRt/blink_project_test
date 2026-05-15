import React, { useEffect, useMemo, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/use-media-query';

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  decimalSeparator?: string;
  duration?: number;
  className?: string;
};

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  decimalSeparator = '.',
  duration = 1200,
  className,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [current, setCurrent] = useState(prefersReducedMotion ? value : 0);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setHasEntered(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const markIfVisible = () => {
      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= viewportHeight + 120 && rect.bottom >= -120) {
        setHasEntered(true);
      }
    };

    markIfVisible();

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setHasEntered(true);
        },
        { rootMargin: '120px 0px', threshold: 0 },
      )
      : null;

    observer?.observe(element);
    window.addEventListener('scroll', markIfVisible, { passive: true });
    window.addEventListener('resize', markIfVisible);

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', markIfVisible);
      window.removeEventListener('resize', markIfVisible);
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!hasEntered) return;
    if (prefersReducedMotion) {
      setCurrent(value);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setCurrent(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, hasEntered, prefersReducedMotion, value]);

  const formatted = current.toFixed(decimals).replace('.', decimalSeparator);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

type AnimatedValueTextProps = {
  value: string;
  duration?: number;
};

export function AnimatedValueText({ value, duration }: AnimatedValueTextProps) {
  const parts = useMemo(() => value.split(/(\d+(?:[.,]\d+)?\+?)/g), [value]);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^(\d+(?:[.,]\d+)?)(\+?)$/);
        if (!match) return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;

        const rawNumber = match[1];
        const hasComma = rawNumber.includes(',');
        const decimals = rawNumber.includes('.') || hasComma
          ? rawNumber.split(/[.,]/)[1]?.length ?? 0
          : 0;

        return (
          <AnimatedNumber
            key={`${part}-${index}`}
            value={Number(rawNumber.replace(',', '.'))}
            decimals={decimals}
            decimalSeparator={hasComma ? ',' : '.'}
            suffix={match[2]}
            duration={duration}
          />
        );
      })}
    </>
  );
}
