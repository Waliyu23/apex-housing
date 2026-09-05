'use client';

import { asset } from '@/lib/asset';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { gallery } from '@/lib/site';
import Reveal from './Reveal';

function Lightbox({
  index,
  onClose,
  onStep,
}: {
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  const image = gallery[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose, onStep]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={image.label}>
      <button type="button" className="lightbox__backdrop" aria-label="Close gallery" onClick={onClose} />
      <button type="button" className="lightbox__close" aria-label="Close gallery" onClick={onClose}>
        ×
      </button>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous image"
        onClick={() => onStep(-1)}
      >
        ‹
      </button>
      <figure className="lightbox__figure">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={image.src} src={asset(image.src)} alt={image.alt} />
        <figcaption>
          {image.label} — {index + 1} / {gallery.length}
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next image"
        onClick={() => onStep(1)}
      >
        ›
      </button>
    </div>,
    document.body,
  );
}

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + gallery.length) % gallery.length)),
    [],
  );

  const tiles = showAll ? gallery : gallery.slice(0, 6);

  return (
    <section className="section gallery" id="gallery">
      <div className="shell">
        <Reveal className="gallery__head">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="gallery__title">Explore Apex Housing</h2>
          </div>
          <p className="lede gallery__lede">
            From the street to the front door to the rooms you’ll actually live in — take a look
            around the property.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {tiles.map((image, i) => (
            <Reveal
              key={image.src}
              variant="scale"
              delay={(i % 3) * 80}
              className={`tile ${image.span === 'wide' ? 'tile--wide' : ''} ${
                image.span === 'tall' ? 'tile--tall' : ''
              }`}
            >
              <button type="button" aria-label={`View ${image.label}`} onClick={() => setIndex(i)}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(image.src)} alt={image.alt} loading="lazy" decoding="async" />
                <span className="tile__label">{image.label}</span>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="gallery__more">
          <button type="button" className="btn btn--ghost" onClick={() => setShowAll((v) => !v)}>
            {showAll ? 'Show Fewer Photos' : 'View Full Gallery'}
          </button>
        </div>
      </div>

      {index !== null && <Lightbox index={index} onClose={() => setIndex(null)} onStep={step} />}
    </section>
  );
}
