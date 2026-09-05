import { site } from '@/lib/site';
import Reveal from './Reveal';
import { MailIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export default function Cta() {
  return (
    <section className="cta" id="contact">
      <div className="shell cta__inner">
        <Reveal>
          <p className="eyebrow eyebrow--invert">Contact</p>
          <h2 className="cta__title">Ready to Find Your New Home?</h2>
          <p className="cta__lede">Schedule a tour or speak with our team today.</p>
        </Reveal>

        <Reveal className="cta__details" delay={90}>
          <a className="cta__detail" href={site.phoneHref}>
            <PhoneIcon />
            <span>
              <em>Call</em>
              {site.phone}
            </span>
          </a>
          <a className="cta__detail" href={`mailto:${site.email}`}>
            <MailIcon />
            <span>
              <em>Email</em>
              {site.email}
            </span>
          </a>
        </Reveal>

        <Reveal className="cta__actions" delay={150}>
          <a href={site.phoneHref} className="btn btn--primary">
            Call Us
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outlineInvert"
          >
            <WhatsAppIcon /> WhatsApp Us
          </a>
          <a href="#quote" className="btn btn--outlineInvert">
            Request a Quote
          </a>
        </Reveal>
      </div>
    </section>
  );
}
