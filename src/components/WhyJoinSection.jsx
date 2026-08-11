import SectionHeading from './SectionHeading';

function WhyJoinSection({ whyJoinCards }) {
  return (
    <section className="why-join" id="why-join">
      <div className="section-inner">
        <SectionHeading eyebrow="THE CASE FOR JOINING" title="Why Join IDEA Lab" center />

        <div className="why-grid">
          {whyJoinCards.map((card) => (
            <div key={card.title} className="why-card" data-reveal>
              <i className={`fa-solid ${card.icon}`} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJoinSection;
