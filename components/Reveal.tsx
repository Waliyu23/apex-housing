'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Variant = 'up' | 'left' | 'right' | 'scale' | 'blur';

const variantClass: Record<Variant, string> = {
  up: '',
  left: 'reveal--left',
  right: 'reveal--right',
  scale: 'reveal--scale',
  blur: 'reveal--blur',
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-triggered entrance animation.
 * Elements already inside the viewport on mount skip the hidden state,
 * so above-the-fold content never flashes.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'up',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  /** Stagger in milliseconds. */
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}) {
  const Tag = as as React.ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'idle' | 'hidden' | 'in'>('idle');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setState('in');
      return;
    }

    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      setState('in');
      return;
    }

    setState('hidden');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState('in');
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    'reveal',
    variantClass[variant],
    state === 'hidden' ? 'reveal--hidden' : '',
    state === 'in' ? 'is-in' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
