/**
 * Single source of truth for site content.
 * Edit values here and every component picks them up.
 */

export const site = {
  name: 'Apex Housing Limited',
  shortName: 'Apex',
  tagline: 'Modern Living. Prime Location.',
  description:
    'Comfortable 3-bedroom, 2-bathroom apartment units in a modern four-story building on Woodward Avenue, Detroit, MI 48226. Request a quote today.',
  url: 'https://apexhousinglimited.com',
  phone: '+1 (402) 260-5962',
  phoneHref: 'tel:+14022605962',
  whatsapp: '14022605962',
  email: 'ApexhousingLimited884@gmail.com',
  street: 'Woodward Avenue',
  cityLine: 'Detroit, MI 48226',
  mapQuery: 'Woodward+Avenue%2C+Detroit%2C+MI+48226',
  mapEmbed:
    'https://www.google.com/maps?q=42.3350,-83.0490+(Apex+Housing+Limited)&z=16&output=embed',
  social: [
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
} as const;

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
] as const;

export const heroFacts = [
  { value: 3, label: 'Bedrooms' },
  { value: 2, label: 'Bathrooms' },
  { value: 4, label: 'Story Apartment' },
] as const;

export type IconName =
  | 'bed'
  | 'bath'
  | 'building'
  | 'pin'
  | 'kitchen'
  | 'sofa'
  | 'lock'
  | 'car'
  | 'washer'
  | 'elevator';

export const highlights: { icon: IconName; title: string; copy: string }[] = [
  { icon: 'bed', title: '3 Bedrooms', copy: 'Spacious & Comfortable' },
  { icon: 'bath', title: '2 Bathrooms', copy: 'Modern & Functional' },
  { icon: 'building', title: '4 Stories', copy: 'Contemporary Apartment Living' },
  { icon: 'pin', title: 'Prime Location', copy: 'Woodward Avenue, Detroit' },
];

export const aboutPoints = [
  'Comfortable living spaces',
  'Modern apartment design',
  'Convenient Detroit location',
  'Spacious 3-bedroom units',
  'Professional property management',
];

export const features: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: 'bed',
    title: 'Spacious Bedrooms',
    copy: 'Three well-proportioned bedrooms with room for full furniture layouts and natural light.',
  },
  {
    icon: 'bath',
    title: 'Modern Bathrooms',
    copy: 'Two contemporary bathrooms with clean tiling and functional, well-kept fixtures.',
  },
  {
    icon: 'kitchen',
    title: 'Fully Equipped Kitchen',
    copy: 'A complete kitchen with generous counter space and cabinetry for everyday cooking.',
  },
  {
    icon: 'sofa',
    title: 'Living & Dining Area',
    copy: 'An open living and dining space designed for both quiet evenings and hosting.',
  },
  {
    icon: 'lock',
    title: 'Secure Entry',
    copy: 'Controlled building entry so residents and guests come and go with confidence.',
  },
  {
    icon: 'car',
    title: 'Parking',
    copy: 'On-site parking available for residents — no daily hunt for a street space.',
  },
  {
    icon: 'washer',
    title: 'Laundry Facilities',
    copy: 'Convenient on-site laundry facilities within the building for all residents.',
  },
  {
    icon: 'elevator',
    title: 'Elevator Access',
    copy: "Elevator service to every one of the building's four floors.",
  },
];

export const unitSpecs = [
  { term: 'Bedrooms', detail: '3 — including a primary bedroom' },
  { term: 'Bathrooms', detail: '2 — full bathrooms' },
  { term: 'Kitchen', detail: 'Fully equipped, adjacent to dining' },
  { term: 'Living room', detail: 'Open to the dining area' },
  { term: 'Dining area', detail: 'Shared open plan with living room' },
  { term: 'Building', detail: 'Four stories, elevator access' },
];

export type GalleryImage = {
  src: string;
  label: string;
  alt: string;
  /** Extra tile modifier used in the six-tile preview grid. */
  span?: 'wide' | 'tall';
};

/** First six entries are shown in the preview grid; all are used in the lightbox. */
export const gallery: GalleryImage[] = [
  {
    src: '/images/Building Exterior.JPG',
    label: 'Building Exterior',
    alt: 'Building exterior at dusk',
    span: 'wide',
  },
  {
    src: '/images/Main Entrance.JPG',
    label: 'Main Entrance',
    alt: 'Main entrance lobby with mailboxes and elevator',
  },
  {
    src: '/images/Living Room.JPG',
    label: 'Living Room',
    alt: 'Living room with large windows',
  },
  {
    src: '/images/Dining Area.JPG',
    label: 'Dining Area',
    alt: 'Dining area in the apartment',
  },
  { src: '/images/Bedroom.JPG', label: 'Bedroom', alt: 'Bedroom with natural light' },
  { src: '/images/Bathroom.JPG', label: 'Bathroom', alt: 'Bathroom with walk-in shower' },
  {
    src: '/images/about.JPG',
    label: 'Apartment Interior',
    alt: 'Bright apartment interior',
  },
  {
    src: '/images/hero.JPG',
    label: 'Property View',
    alt: 'Apex Housing property view',
  },
];

export const nearby = [
  {
    title: 'Downtown Detroit',
    copy: 'The building sits on Woodward Avenue inside the 48226 downtown core — offices, civic spaces and Campus Martius are a short walk away.',
  },
  {
    title: 'Restaurants & Cafés',
    copy: 'Woodward and the surrounding blocks are lined with coffee shops, casual spots and sit-down restaurants.',
  },
  {
    title: 'Shopping',
    copy: 'Downtown retail along Woodward plus everyday essentials and grocery options nearby.',
  },
  {
    title: 'Entertainment',
    copy: "Close to Detroit's theatre and sports district, including Comerica Park, Ford Field and Little Caesars Arena.",
  },
  {
    title: 'Transportation',
    copy: 'QLINE streetcar stops run along Woodward, with the People Mover, DDOT bus routes and quick access to I-75 and I-375.',
  },
];

export const floorOptions = [
  'Any Floor',
  '1st Floor',
  '2nd Floor',
  '3rd Floor',
  '4th Floor',
] as const;

export const interestOptions = ['Renting', 'Buying', 'General Inquiry'] as const;
