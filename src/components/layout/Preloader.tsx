import React, { useEffect, useRef, useState } from 'react';

interface PreloaderProps {
  onComplete?: () => void;
  minDuration?: number;
}

export function Preloader({ onComplete, minDuration = 2200 }: PreloaderProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [percent, setPercent] = useState(0);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const startedAt = performance.now();
    // Match CSS animation: 400ms delay, 2000ms duration
    const delay = 400;
    const duration = 2000;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      const raw = (elapsed - delay) / duration;
      const eased = Math.max(0, Math.min(1, raw));
      setPercent(Math.round(eased * 100));
      if (eased < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    const finish = () => {
      const elapsed = performance.now() - startedAt;
      const wait = Math.max(0, minDuration - elapsed);

      window.setTimeout(() => {
        setIsExiting(true);
        window.setTimeout(() => {
          setIsHidden(true);
          document.body.style.overflow = previousOverflow;
          onComplete?.();
        }, 600);
      }, wait);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish, { once: true });
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('load', finish);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [minDuration, onComplete]);

  if (isHidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#0b0f14] ${
        isExiting ? 'preloader-exit' : ''
      }`}
    >
      <div className="flex flex-col items-center px-6 w-full max-w-md">
        <h1 className="font-preloader preloader-title text-white text-[clamp(0.95rem,3.6vw,1.6rem)] uppercase whitespace-nowrap tracking-[0.28em] pl-[0.28em] font-light">
          Хабаровск-Сити
        </h1>

        {/* Loading progress */}
        <div className="mt-7 w-full flex flex-col items-center gap-3">
          <div className="relative w-full max-w-[280px] h-px bg-white/10 preloader-progress-track overflow-hidden">
            <div className="absolute inset-0 origin-left bg-gold preloader-progress-fill" />
          </div>

          <div className="preloader-counter flex items-center justify-between w-full max-w-[280px] text-[10px] tracking-[0.3em] uppercase font-light text-white/40">
            <span>Загрузка</span>
            <span className="tabular-nums text-gold/80">{percent.toString().padStart(2, '0')}%</span>
          </div>
        </div>

        <p className="font-preloader preloader-subtitle mt-6 text-white/45 text-[10px] tracking-[0.4em] uppercase font-normal pl-[0.4em]">
          Город будущего
        </p>
      </div>
    </div>
  );
}
