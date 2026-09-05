'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './Reveal';

/** Image that drifts slightly against the scroll direction. */
export default function ParallaxImage({
  src,
  alt,
  strength = 0.045,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  /** Pixels of drift per pixel scrolled. */
  strength?: number;
  priority?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > window.innerHeight + 200) return;
      const offset = (rect.top - window.innerHeight / 2) * -strength;
      el.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0) scale(1.06)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
