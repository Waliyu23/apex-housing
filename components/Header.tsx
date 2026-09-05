'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';
import { Logo } from './Icons';

function Wordmark() {
  return (
    <span className="wordmark">
      <Logo />
      <span className="wordmark__text">
        <span className="wordmark__name">APEX</span>
        <span className="wordmark__sub">Housing Limited</span>
      </span>
    </span>
  );
}

export { Wordmark };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById('scroll-sentinel');
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="shell header__inner">
        <a href="#home" className="header__brand" aria-label={`${site.name} — home`}>
          <Wordmark />
        </a>

        <nav className="header__nav" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#quote" className="btn btn--primary header__cta">
            Request a Quote
          </a>
          <button
            type="button"
            className="header__burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`burger ${open ? 'burger--open' : ''}`}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div className={`drawer ${open ? 'drawer--open' : ''}`} hidden={!open}>
        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#quote" className="btn btn--primary btn--wide" onClick={() => setOpen(false)}>
            Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
