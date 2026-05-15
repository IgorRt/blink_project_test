import React, { useEffect, useRef, useState } from 'react';

// Khabarovsk-City coordinates (waterfront, near Kalinina St.)
const CENTER: [number, number] = [48.461016, 135.082217];
const ZOOM = 14;
const API_URL = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
const SCRIPT_ID = 'yandex-maps-api';

type YMaps = {
  ready: (cb: () => void) => void;
  Map: new (
    element: HTMLElement,
    state: { center: [number, number]; zoom: number; controls: string[] },
    options?: Record<string, unknown>,
  ) => { destroy: () => void; geoObjects: { add: (obj: unknown) => void } };
  Placemark: new (
    coords: [number, number],
    properties?: Record<string, unknown>,
    options?: Record<string, unknown>,
  ) => unknown;
};

declare global {
  interface Window {
    ymaps?: YMaps;
  }
}

function loadYmaps(): Promise<YMaps> {
  if (window.ymaps) return Promise.resolve(window.ymaps);

  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener('load', () => resolve(window.ymaps as YMaps), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = API_URL;
    script.async = true;
    script.onload = () => resolve(window.ymaps as YMaps);
    script.onerror = () => reject(new Error('Failed to load Yandex Maps API'));
    document.head.appendChild(script);
  });
}

export function YandexMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let map: { destroy: () => void } | null = null;
    let cancelled = false;

    loadYmaps()
      .then((ymaps) => {
        if (cancelled || !mapRef.current) return;
        ymaps.ready(() => {
          if (cancelled || !mapRef.current) return;
          try {
            map = new ymaps.Map(
              mapRef.current,
              {
                center: CENTER,
                zoom: ZOOM,
                controls: [], // hide traffic, ruler, zoom, search etc
              },
              {
                // hides the "Open in Yandex Maps" overlay in the corner
                suppressMapOpenBlock: true,
                yandexMapDisablePoiInteractivity: true,
              },
            );

            const placemark = new ymaps.Placemark(
              CENTER,
              { hintContent: 'Хабаровск-Сити', balloonContent: 'Хабаровск-Сити' },
              { preset: 'islands#blueDotIcon' },
            );
            // @ts-expect-error geoObjects.add accepts Placemark instance
            map.geoObjects.add(placemark);
          } catch {
            setFailed(true);
          }
        });
      })
      .catch(() => setFailed(true));

    return () => {
      cancelled = true;
      try {
        map?.destroy();
      } catch {
        /* noop */
      }
    };
  }, []);

  if (failed) {
    // Fallback to default iframe widget if API fails to load
    return (
      <iframe
        title="Расположение Хабаровск-Сити"
        src={`https://yandex.ru/map-widget/v1/?ll=${CENTER[1]}%2C${CENTER[0]}&z=${ZOOM}&pt=${CENTER[1]},${CENTER[0]},pm2rdm`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
        style={{ border: 0 }}
      />
    );
  }

  return <div ref={mapRef} className="w-full h-full" />;
}
