import { site } from '@/lib/site';
import QuoteForm from './QuoteForm';
import Reveal from './Reveal';

export default function Quote() {
  return (
    <section className="section quote" id="quote">
      <div className="shell quote__grid">
        <Reveal className="quote__intro">
          <p className="eyebrow">Inquiry Form</p>
          <h2 className="quote__title">Request a Quote</h2>
          <p className="lede">
            Interested in a 3-bedroom, 2-bathroom apartment at {site.name}? Tell us what you’re
            looking for and we’ll get back to you.
          </p>
          <ul className="quote__points">
            <li>
              <strong>Straight to WhatsApp.</strong> Your details are formatted into a message and
              sent to our team instantly.
            </li>
            <li>
              <strong>Fast replies.</strong> We confirm pricing, availability and floor options for
              you.
            </li>
            <li>
              <strong>No obligation.</strong> Ask questions, book a tour, decide later.
            </li>
          </ul>
          <div className="quote__direct">
            <span>Prefer to talk now?</span>
            <a href={site.phoneHref}>{site.phone}</a>
          </div>
        </Reveal>

        <Reveal className="quote__cardWrap" delay={90}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
