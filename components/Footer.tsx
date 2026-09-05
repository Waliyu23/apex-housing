import { nav, site } from '@/lib/site';
import { Wordmark } from './Header';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Wordmark />
          <p>
            Modern 3-bedroom, 2-bathroom apartments in a four-story building on Woodward Avenue in
            downtown Detroit.
          </p>
        </div>

        <nav className="footer__col" aria-label="Quick links">
          <h3>Quick Links</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              {site.street}, {site.cityLine}
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3>Follow Us</h3>
          <ul>
            {site.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell footer__bottom">
        <p>
          © {new Date().getFullYear()} {site.name}. All Rights Reserved.
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  );
}
