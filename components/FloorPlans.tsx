import { unitSpecs } from '@/lib/site';
import FloorPlan from './FloorPlan';
import Reveal from './Reveal';
import { ArrowIcon } from './Icons';

export default function FloorPlans() {
  return (
    <section className="section floorplans" id="floor-plans">
      <div className="shell">
        <Reveal className="floorplans__head">
          <p className="eyebrow eyebrow--invert">Floor Plans</p>
          <h2 className="floorplans__title">
            <span className="nowrap">3-Bedroom,</span> <span className="nowrap">2-Bathroom</span>{' '}
            Apartments
          </h2>
          <p className="floorplans__lede">
            A single, well-considered layout: bedrooms zoned away from the open living and dining
            area, with both bathrooms placed for everyday convenience.
          </p>
        </Reveal>

        <div className="floorplans__grid">
          <Reveal className="floorplans__planWrap">
            <FloorPlan />
            <p className="floorplans__caption">
              Indicative layout — room positions and proportions shown for orientation.
            </p>
          </Reveal>

          <Reveal className="floorplans__specs" delay={100}>
            <h3 className="floorplans__specsTitle">What’s inside the unit</h3>
            <dl className="specList">
              {unitSpecs.map((spec) => (
                <div className="specList__row" key={spec.term}>
                  <dt>{spec.term}</dt>
                  <dd>{spec.detail}</dd>
                </div>
              ))}
            </dl>
            <p className="floorplans__note">
              Approximate square footage and unit availability are confirmed on request — ask us and
              we’ll send the exact figures for the floor you prefer.
            </p>
            <a href="#quote" className="btn btn--primary">
              Request Floor Plan <ArrowIcon />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
