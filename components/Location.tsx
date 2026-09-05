import { asset } from '@/lib/asset';
import { nearby, site } from '@/lib/site';
import Reveal from './Reveal';
import { Icon } from './Icons';

export default function Location() {
  return (
    <section className="section location" id="location">
      <div className="shell">
        <Reveal className="location__head">
          <p className="eyebrow">Location</p>
          <h2 className="location__title">Live in Detroit’s Prime Location</h2>
          <p className="location__address">
            <Icon name="pin" size={20} />
            <span>
              <strong>{site.street}</strong>
              <br />
              {site.cityLine}
            </span>
          </p>
        </Reveal>

        <div className="location__grid">
          <Reveal className="location__mapWrap" variant="left">
            <div className="location__mapImageWrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="location__mapFallback"
                src={asset('/images/hero.JPG')}
                alt="Apex Housing building exterior on Woodward Avenue in Detroit"
              />
              <div className="location__mapOverlay" aria-hidden="true" />
              <div className="location__mapBadge">
                <span className="location__mapBadgeLabel">Apex Housing</span>
                <span className="location__mapBadgeMeta">Detroit, MI</span>
              </div>
            </div>
            <iframe
              title={`Map of ${site.street}, ${site.cityLine}`}
              className="location__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.mapEmbed}
            />
            <a
              className="location__mapLink"
              href={`https://www.google.com/maps/dir/?api=1&destination=${site.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Get directions to ${site.street}, ${site.cityLine}`}
            >
              <span>Get Directions</span>
            </a>
          </Reveal>

          <div className="location__list">
            {nearby.map((item, i) => (
              <Reveal key={item.title} className="nearby" delay={i * 70}>
                <h3 className="nearby__title">{item.title}</h3>
                <p className="nearby__copy">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Reveal className="location__strip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset('/images/Building Exterior.JPG')}
          alt="Evening street scene along Woodward Avenue in downtown Detroit"
          loading="lazy"
        />
      </Reveal>
    </section>
  );
}
