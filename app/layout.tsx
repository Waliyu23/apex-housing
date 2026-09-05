import { asset } from '@/lib/asset';
import type { Metadata, Viewport } from 'next';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Detroit Apartments on Woodward Avenue`,
    template: `%s | ${site.shortName} Housing Detroit`,
  },
  description: site.description,
  applicationName: site.name,
  category: 'real estate',
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  keywords: [
    site.name,
    'Detroit apartments',
    '3 bedroom apartment Detroit',
    'Woodward Avenue apartments',
    'Detroit MI 48226 rentals',
  ],
  icons: {
    icon: [
      { url: asset('/favicon.svg'), type: 'image/svg+xml' },
      { url: asset('/favicon.ico'), sizes: '256x256', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    title: `${site.name} | Detroit Apartments on Woodward Avenue`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    images: [
      {
        url: '/images/hero.JPG',
        width: 1200,
        height: 800,
        alt: `${site.name} hero image`,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} | Detroit Apartments on Woodward Avenue`,
    description: site.description,
    images: ['/images/hero.JPG'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14110e',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ApartmentComplex',
      '@id': `${site.url}#property`,
      name: site.name,
      url: site.url,
      image: `${site.url}/images/hero.JPG`,
      description: site.description,
      telephone: site.phone,
      email: site.email,
      numberOfBedrooms: 3,
      numberOfBathroomsTotal: 2,
      numberOfFloors: 4,
      address: {
        '@type': 'PostalAddress',
        streetAddress: site.street,
        addressLocality: 'Detroit',
        addressRegion: 'MI',
        postalCode: '48226',
        addressCountry: 'US',
      },
      areaServed: {
        '@type': 'City',
        name: 'Detroit',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.url}#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { '@id': `${site.url}#property` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href={asset('/fonts/fonts.css')} />
        <link rel="preload" href={asset('/images/hero.JPG')} as="image" fetchPriority="high" />
        <link rel="preload" href={asset('/fonts/satoshi-400.woff2')} as="font" type="font/woff2" crossOrigin="anonymous" />
        <link
          rel="preload"
          href={asset('/fonts/cabinet-grotesk-800.woff2')}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
