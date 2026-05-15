import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/use-media-query';
import heroBg from '../../assets/images/hero-bg.webp';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const titleScale = useTransform(scrollYProgress, [0, 0.58], [1, 13]);
  const cutoutOverlayOpacity = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const badgeOpacity = useTransform(scrollYProgress, [0.015, 0.08], [1, 0]);
  const badgeY = useTransform(scrollYProgress, [0.015, 0.08], [0, -18]);
  const supportingContentOpacity = useTransform(scrollYProgress, [0.08, 0.34], [1, 0]);
  const supportingContentY = useTransform(scrollYProgress, [0.08, 0.34], [0, 28]);

  return (
    <section
      id="hero"
      data-theme="light"
      ref={containerRef}
      className="relative h-[180svh] bg-background"
    >
      <div className="sticky top-0 min-h-[100svh] flex items-center justify-center pt-24 sm:pt-28 overflow-hidden">
        <div
          aria-hidden="true"
          style={{ backgroundImage: `url(${heroBg})` }}
          className="absolute inset-0 bg-cover bg-center"
        />

        {!prefersReducedMotion && (
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 z-10 h-full w-full"
            style={{ opacity: cutoutOverlayOpacity }}
          >
            <defs>
              <mask id="hero-title-cutout" maskUnits="userSpaceOnUse">
                <rect width="1000" height="1000" fill="white" />

                <motion.g
                  className="hidden sm:block"
                  style={{
                    scale: titleScale,
                    transformBox: 'view-box',
                    transformOrigin: '500px 545px',
                  }}
                >
                  <text
                    x="500"
                    y="500"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    fontFamily="Manrope, system-ui, sans-serif"
                    fontSize="90"
                    fontWeight="800"
                    letterSpacing="0"
                  >
                    Хабаровск-Сити
                  </text>
                  <text
                    x="500"
                    y="585"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    fontFamily="Cormorant, serif"
                    fontSize="48"
                    fontStyle="italic"
                    fontWeight="300"
                    letterSpacing="0"
                  >
                    город будущего
                  </text>
                </motion.g>

                <motion.g
                  className="block sm:hidden"
                  style={{
                    scale: titleScale,
                    transformBox: 'view-box',
                    transformOrigin: '500px 570px',
                  }}
                >
                  <text
                    x="500"
                    y="470"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    fontFamily="Manrope, system-ui, sans-serif"
                    fontSize="82"
                    fontWeight="800"
                    letterSpacing="0"
                  >
                    Хабаровск
                  </text>
                  <text
                    x="500"
                    y="550"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    fontFamily="Manrope, system-ui, sans-serif"
                    fontSize="82"
                    fontWeight="300"
                    letterSpacing="0"
                  >
                    -Сити
                  </text>
                  <text
                    x="500"
                    y="635"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                    fontFamily="Cormorant, serif"
                    fontSize="50"
                    fontStyle="italic"
                    fontWeight="300"
                    letterSpacing="0"
                  >
                    город будущего
                  </text>
                </motion.g>
              </mask>
            </defs>

            <rect
              width="1000"
              height="1000"
              fill="hsl(var(--background))"
              mask="url(#hero-title-cutout)"
            />
          </motion.svg>
        )}

        <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 w-full py-16 sm:py-20 text-center flex flex-col items-center">
          <h1 className="sr-only">Хабаровск-Сити, город будущего</h1>

          <motion.div
            style={{
              opacity: prefersReducedMotion ? 1 : badgeOpacity,
              y: prefersReducedMotion ? 0 : badgeY,
            }}
            className="-mt-48 sm:-mt-44 inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-foreground/[0.04] border border-foreground/15 text-foreground/75 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-8 sm:mb-10"
          >
            <span className="block w-2 h-2 rounded-full bg-foreground" />
            Новая доминанта столицы
          </motion.div>

          <div
            aria-hidden="true"
            className="h-[clamp(7rem,19vw,11rem)] w-full mb-4 sm:mb-6"
          />
        </div>

        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : supportingContentOpacity,
            y: prefersReducedMotion ? 0 : supportingContentY,
          }}
          className="absolute inset-x-0 bottom-8 sm:bottom-10 z-20 flex w-full justify-center px-5 sm:px-6 text-center"
        >
          <p className="mx-auto max-w-4xl text-center text-base sm:text-xl md:text-2xl lg:text-[1.7rem] text-foreground/75 font-normal leading-snug text-balance">
            Новая деловая доминанта столицы Хабаровского края.
            Инновационное пространство для бизнеса, жизни и творчества.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
