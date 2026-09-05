import { highlights } from '@/lib/site';
import { Icon } from './Icons';
import Reveal from './Reveal';

export default function Highlights() {
  return (
    <section className="highlights" id="highlights" aria-label="Property highlights">
      <div className="shell">
        <div className="highlights__grid">
          {highlights.map((item, i) => (
            <Reveal key={item.title} className="card" delay={i * 90}>
              <span className="card__icon">
                <Icon name={item.icon} size={26} />
              </span>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__copy">{item.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
