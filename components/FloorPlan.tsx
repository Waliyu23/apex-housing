'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from './Reveal';

type Room = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  tone: 'brass' | 'teal' | 'ink';
  emphasis?: boolean;
};

const TONES: Record<Room['tone'], string> = {
  brass: 'rgba(176, 128, 58, 0.10)',
  teal: 'rgba(31, 58, 66, 0.07)',
  ink: 'rgba(20, 17, 14, 0.04)',
};

const ROOMS: Room[] = [
  { x: 40, y: 40, w: 360, h: 260, label: 'Living & Dining', sub: 'Open plan', tone: 'brass', emphasis: true },
  { x: 400, y: 40, w: 180, h: 260, label: 'Kitchen', sub: 'Fully equipped', tone: 'teal' },
  { x: 580, y: 40, w: 140, h: 130, label: 'Bathroom 1', tone: 'teal' },
  { x: 580, y: 170, w: 140, h: 130, label: 'Laundry', sub: '& storage', tone: 'ink' },
  { x: 720, y: 40, w: 160, h: 260, label: 'Bedroom 3', tone: 'brass' },
  { x: 40, y: 300, w: 160, h: 220, label: 'Entry', sub: 'Secure door', tone: 'ink' },
  { x: 200, y: 300, w: 250, h: 220, label: 'Bedroom 2', tone: 'brass', emphasis: true },
  { x: 450, y: 300, w: 290, h: 220, label: 'Primary Bedroom', sub: 'Bedroom 1', tone: 'brass', emphasis: true },
  { x: 740, y: 300, w: 140, h: 220, label: 'Bathroom 2', tone: 'teal' },
];

/** Interior doorway gaps, painted in the page background colour. */
const DOORWAYS = [
  { x: 330, y: 296, w: 56, h: 8 },
  { x: 396, y: 130, w: 8, h: 56 },
  { x: 576, y: 90, w: 8, h: 50 },
  { x: 716, y: 130, w: 8, h: 56 },
  { x: 196, y: 360, w: 8, h: 56 },
  { x: 130, y: 296, w: 56, h: 8 },
  { x: 736, y: 360, w: 8, h: 56 },
];

/** Exterior windows, painted in brass. */
const WINDOWS = [
  { x: 90, y: 26, w: 120, h: 8 },
  { x: 250, y: 26, w: 110, h: 8 },
  { x: 440, y: 26, w: 110, h: 8 },
  { x: 760, y: 26, w: 100, h: 8 },
  { x: 886, y: 90, w: 8, h: 110 },
  { x: 886, y: 360, w: 8, h: 110 },
  { x: 26, y: 100, w: 8, h: 120 },
  { x: 250, y: 526, w: 130, h: 8 },
  { x: 500, y: 526, w: 160, h: 8 },
];

function RoomGroup({ room }: { room: Room }) {
  const cx = room.x + room.w / 2;
  const cy = room.y + room.h / 2;
  const labelSize = room.emphasis ? 19 : 15;
  const subSize = room.emphasis ? 15 : 13;

  return (
    <g>
      <rect x={room.x} y={room.y} width={room.w} height={room.h} fill={TONES[room.tone]} stroke="none" data-fade="true" />
      <rect
        x={room.x}
        y={room.y}
        width={room.w}
        height={room.h}
        fill="none"
        stroke="var(--ink)"
        strokeWidth="4"
        data-draw="true"
      />
      <text
        x={cx}
        y={room.sub ? cy - 8 : cy}
        textAnchor="middle"
        className="plan__label"
        style={{ fontSize: `${labelSize}px` }}
      >
        {room.label}
      </text>
      {room.sub && (
        <text x={cx} y={cy + 13} textAnchor="middle" className="plan__sub" style={{ fontSize: `${subSize}px` }}>
          {room.sub}
        </text>
      )}
    </g>
  );
}

/** Animated SVG floor plan: outlines draw themselves in, labels fade after. */
export default function FloorPlan() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    // Give every stroked shape its own dash length so the draw-in reads evenly.
    svg.querySelectorAll<SVGGeometryElement>('[data-draw]').forEach((shape) => {
      const length = Math.ceil(shape.getTotalLength?.() ?? 1400);
      shape.style.setProperty('--len', String(length));
    });

    if (prefersReducedMotion()) {
      svg.classList.add('is-drawn');
      return;
    }

    svg.classList.add('is-armed');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          svg.classList.remove('is-armed');
          svg.classList.add('is-drawn');
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 920 600"
      className="plan"
      role="img"
      aria-label="Floor plan of a 3-bedroom, 2-bathroom apartment at Apex Housing: open living and dining area, kitchen, three bedrooms, two bathrooms, entry hall and laundry storage"
    >
      <rect x="0" y="0" width="920" height="600" fill="none" />
      <rect x="30" y="30" width="860" height="500" rx="3" fill="none" stroke="var(--ink)" strokeWidth="9" data-draw="true" />

      {ROOMS.map((room) => (
        <RoomGroup key={room.label} room={room} />
      ))}

      {DOORWAYS.map((d, i) => (
        <rect key={`door-${i}`} x={d.x} y={d.y} width={d.w} height={d.h} fill="var(--cream)" data-fade="true" />
      ))}
      {WINDOWS.map((w, i) => (
        <rect key={`win-${i}`} x={w.x} y={w.y} width={w.w} height={w.h} fill="var(--brass)" data-fade="true" />
      ))}

      <g>
        <path d="M120 570 L120 545" stroke="var(--brass-deep)" strokeWidth="3" strokeLinecap="round" data-fade="true" />
        <path
          d="M113 552 L120 542 L127 552"
          fill="none"
          stroke="var(--brass-deep)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          data-fade="true"
        />
        <text x="140" y="568" className="plan__sub" textAnchor="start">
          Apartment entry
        </text>
      </g>
      <g>
        <rect x="700" y="552" width="14" height="14" fill="var(--brass)" data-fade="true" />
        <text x="724" y="564" className="plan__sub" textAnchor="start">
          Window
        </text>
      </g>
    </svg>
  );
}
