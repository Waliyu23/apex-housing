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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="location__mapFallback"
              src={asset('/images/Building Exterior.JPG')}
              alt="Map area around Woodward Avenue in downtown Detroit"
              aria-hidden="true"
            />
            <iframe
              title={`Map of ${site.street}, ${site.cityLine}`}
              className="location__map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.mapEmbed}
            />
            <a
              className="location__mapLink"
              href={`https://www.google.com/maps/search/?api=1&query=${site.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
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
