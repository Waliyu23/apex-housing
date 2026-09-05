import { asset } from '@/lib/asset';
import { heroFacts, site } from '@/lib/site';
import CountUp from './CountUp';
import ParallaxImage from './ParallaxImage';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__media">
        <ParallaxImage
          src={asset('/images/hero.JPG')}
          alt="Four-story Apex Housing apartment building on Woodward Avenue at dusk with warmly lit windows"
          strength={0.045}
          priority
        />
        <div className="hero__scrim" />
      </div>

      <div className="shell hero__inner">
        <p className="eyebrow eyebrow--invert hero__eyebrow">{site.tagline}</p>
        <h1 className="hero__title">
          Your New Home
          <br />
          Awaits at <em>{site.shortName}</em>
        </h1>
        <p className="hero__desc">
          Discover comfortable 3-bedroom, 2-bathroom apartment units in a modern four-story building
          located on Woodward Avenue in Detroit, Michigan.
        </p>

        <div className="hero__actions">
          <a href="#floor-plans" className="btn btn--primary">
            View Floor Plans
          </a>
          <a href="#quote" className="btn btn--onImage">
            Request a Quote
          </a>
        </div>

        <div className="hero__facts">
          {heroFacts.map((fact) => (
            <div className="hero__fact" key={fact.label}>
              <CountUp className="hero__factNum" value={fact.value} />
              <span className="hero__factLabel">{fact.label}</span>
            </div>
          ))}
          <div className="hero__fact hero__fact--address">
            <span className="hero__factLabel hero__factLabel--strong">{site.street}</span>
            <span className="hero__factLabel">{site.cityLine}</span>
          </div>
        </div>
      </div>

      <a href="#highlights" className="hero__scroll" aria-label="Scroll to property highlights">
        <span />
      </a>
    </section>
  );
}
