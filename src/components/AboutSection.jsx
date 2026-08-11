import SectionHeading from './SectionHeading';

function AboutSection({ aboutCards }) {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="about__grid">
          <div className="about__media" data-reveal>
            <div className="about__media-frame">
              <img src="https://picsum.photos/seed/labinterior/900/1100" alt="Inside the AICTE IDEA Lab workshop floor" loading="lazy" />
            </div>
            <div className="about__media-card glass">
              <i className="fa-solid fa-award" />
              <div>
                <strong>AICTE Recognized</strong>
                <span>Idea, Design & Entrepreneurship Application Lab</span>
              </div>
            </div>
          </div>

          <div className="about__copy">
            <SectionHeading eyebrow="ABOUT THE LAB" title="What is the AICTE IDEA Lab?" lead="The IDEA Lab is a hands-on innovation facility established under the AICTE framework at Poornima Group. It gives students direct access to fabrication tools, electronics benches and rapid-prototyping equipment — turning classroom concepts into working prototypes." />

            <div className="about__cards">
              {aboutCards.map((card) => (
                <div key={card.title} className="about-card glass" data-reveal>
                  <div className="about-card__icon"><i className={`fa-solid ${card.icon}`} /></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
