import About from '@/components/About';
import Cta from '@/components/Cta';
import Features from '@/components/Features';
import FloorPlans from '@/components/FloorPlans';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Location from '@/components/Location';
import Quote from '@/components/Quote';
import ScrollProgress from '@/components/ScrollProgress';

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      {/* Watched by the header to switch to its scrolled (light) state. */}
      <div id="scroll-sentinel" aria-hidden="true" />

      <main>
        <Hero />
        <Highlights />
        <About />
        <Features />
        <FloorPlans />
        <Gallery />
        <Location />
        <Quote />
        <Cta />
      </main>

      <Footer />
    </>
  );
}
