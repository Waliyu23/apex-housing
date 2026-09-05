import { asset } from '@/lib/asset';
import { aboutPoints } from '@/lib/site';
import CountUp from './CountUp';
import ParallaxImage from './ParallaxImage';
import Reveal from './Reveal';
import { ArrowIcon, CheckIcon } from './Icons';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about__grid">
        <Reveal className="about__media" variant="left">
          <ParallaxImage
            src={asset('/images/about.JPG')}
            alt="Daytime view of the modern four-story Apex Housing building with brick and dark metal facade"
            strength={0.035}
          />
          <div className="about__badge">
            <CountUp className="about__badgeNum" value={4} pad={2} />
            <span className="about__badgeLabel">
              Stories of
              <br />
              modern living
            </span>
          </div>
        </Reveal>

        <div className="about__body">
          <Reveal>
            <p className="eyebrow">About Apex Housing Limited</p>
            <h2 className="about__title">
              Quality Living.
              <br />
              Unbeatable Location.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="lede about__lede">
              Apex Housing Limited manages a modern four-story apartment building on Woodward Avenue
              in the heart of Detroit. Our 3-bedroom, 2-bathroom units are built around everyday
              comfort — generous room proportions, clean contemporary finishes, and a location that
              puts downtown within easy reach.
            </p>
            <p className="about__text">
              We keep things straightforward: well-maintained apartments, responsive management, and
              a residential experience that feels settled from the day you move in.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <ul className="about__list">
              {aboutPoints.map((point) => (
                <li key={point}>
                  <span className="about__tick">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <a href="#amenities" className="btn btn--dark about__btn">
              Learn More About Us <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
