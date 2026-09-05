import type { IconName } from '@/lib/site';

type Props = { size?: number; className?: string };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export function Logo({ size = 34 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Apex Housing Limited"
      style={{ flex: 'none' }}
    >
      <rect
        x="1.25"
        y="1.25"
        width="37.5"
        height="37.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.35"
      />
      <path d="M20 8.5 33 31.5H26.9L20 19.4 13.1 31.5H7L20 8.5Z" fill="currentColor" />
      <path d="M15.9 26.6h8.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  bed: (
    <>
      <path d="M3 18v-7h18v7M3 18h18M3 11V7m0 11v2m18-2v2" />
      <path d="M7 11V9.5A1.5 1.5 0 0 1 8.5 8h7A1.5 1.5 0 0 1 17 9.5V11" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" />
      <path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1.2 0 2 .7 2.3 1.7M6 19v2m12-2v2" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10.5 21v-3h3v3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  kitchen: (
    <>
      <path d="M4 3h16v18H4z" />
      <path d="M4 12h16M8 7h1M8 16h1" />
    </>
  ),
  sofa: (
    <>
      <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" />
      <path d="M3 12.5A1.5 1.5 0 0 1 4.5 11h15a1.5 1.5 0 0 1 1.5 1.5V18H3v-5.5ZM6 18v2m12-2v2" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  car: (
    <>
      <path d="M3 14l1.7-5A2 2 0 0 1 6.6 7.6h10.8a2 2 0 0 1 1.9 1.4L21 14v4H3v-4Z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </>
  ),
  washer: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="14" r="4" />
      <path d="M8 6.5h.01M11 6.5h.01" />
    </>
  ),
  elevator: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M12 3v18M8 9l0-2.5M8 6.5 6.8 8M8 6.5 9.2 8M16 15v2.5M16 17.5 14.8 16M16 17.5l1.2-1.5" />
    </>
  ),
};

export function Icon({ name, size = 24 }: { name: IconName } & Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      {paths[name]}
    </svg>
  );
}

export function CheckIcon({ size = 15 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={1.8}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function ArrowIcon({ size = 16 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke} strokeWidth={1.6}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
    </svg>
  );
}

export function MailIcon({ size = 20 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18 }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.05 2C6.9 2 2.72 6.17 2.72 11.32c0 1.77.49 3.5 1.42 5l-1.5 4.48 4.63-1.47a9.3 9.3 0 0 0 4.78 1.3h.01c5.14 0 9.32-4.17 9.32-9.31C21.38 6.17 17.2 2 12.05 2Zm5.45 13.2c-.23.65-1.34 1.24-1.85 1.29-.5.05-.98.23-3.37-.7-2.9-1.14-4.7-4.16-4.84-4.35-.14-.2-1.13-1.5-1.13-2.87s.72-2.04 1-2.32c.27-.28.6-.35.8-.35l.57.01c.19 0 .43-.07.67.51.23.56.8 1.95.87 2.09.07.14.11.3.02.48-.09.19-.14.3-.28.47l-.42.48c-.14.14-.28.3-.12.58.15.28.68 1.18 1.47 1.9 1.01.94 1.68 1.19 1.92 1.33.23.14.37.12.51-.05.14-.16.6-.7.76-.94.16-.23.32-.19.54-.11.23.09 1.44.68 1.68.8.24.13.4.19.46.3.06.1.06.6-.16 1.25Z" />
    </svg>
  );
}
