import SectionHeading from './SectionHeading';

function FeaturesSection({ featureCards }) {
  return (
    <section className="features" id="features">
      <div className="section-inner">
        <SectionHeading eyebrow="WHAT WE OFFER" title="Key Features" lead="Everything a student innovator needs, under a single roof." center />

        <div className="feature-grid">
          {featureCards.map((card) => (
            <div key={card.title} className="feature-card" data-reveal>
              <div className="feature-card__icon"><i className={`fa-solid ${card.icon}`} /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
