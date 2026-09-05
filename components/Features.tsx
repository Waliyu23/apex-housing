import { features } from '@/lib/site';
import { Icon } from './Icons';
import Reveal from './Reveal';

export default function Features() {
  return (
    <section className="section features" id="amenities">
      <div className="shell">
        <Reveal className="features__head">
          <p className="eyebrow">Apartment Features</p>
          <h2 className="features__title">Designed for Comfortable Living</h2>
          <p className="lede">
            Every unit at Apex Housing is set up with the essentials done properly — these are the
            features confirmed for the property.
          </p>
        </Reveal>

        <div className="features__grid">
          {features.map((feature, i) => (
            <Reveal key={feature.title} className="feature" delay={(i % 4) * 70}>
              <span className="feature__icon">
                <Icon name={feature.icon} />
              </span>
              <div>
                <h3 className="feature__title">{feature.title}</h3>
                <p className="feature__copy">{feature.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
