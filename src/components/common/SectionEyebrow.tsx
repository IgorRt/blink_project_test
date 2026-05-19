import React from 'react';

type Variant = 'light' | 'dark';

type Props = {
  number?: string;
  label: string;
  variant?: Variant;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionEyebrow({ number, label, variant = 'light', align = 'left', className = '' }: Props) {
  const isDark = variant === 'dark';
  return (
    <div
      className={[
        'inline-flex items-center gap-3',
        align === 'center' ? 'justify-center' : '',
        className,
      ].join(' ')}
    >
      {number && (
        <span
          className={[
            'font-mono text-[10px] sm:text-[11px] tabular-nums tracking-[0.2em] font-medium',
            isDark ? 'text-gold' : 'text-gold-deep',
          ].join(' ')}
        >
          {number}
        </span>
      )}
      <span
        className={[
          'block h-px w-8',
          isDark ? 'bg-gold/70' : 'bg-gold-deep/60',
        ].join(' ')}
      />
      <span
        className={[
          'text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase',
          isDark ? 'text-gold' : 'text-gold-deep',
        ].join(' ')}
      >
        {label}
      </span>
    </div>
  );
}
