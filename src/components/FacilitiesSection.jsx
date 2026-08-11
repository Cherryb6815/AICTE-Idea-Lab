function FacilitiesSection({ facilities, scrollCarousel }) {
  return (
    <section className="facilities" id="facilities">
      <div className="section-inner section-inner--wide">
        <p className="eyebrow center" data-reveal>INSIDE THE LAB</p>
        <h2 className="section-title center" data-reveal>Facilities & Equipment</h2>
        <p className="section-lead center" data-reveal>Drag, scroll, or use the arrows — a live look at the machines powering student projects.</p>
      </div>

      <div className="carousel">
        <button className="carousel__arrow carousel__arrow--left" aria-label="Previous machine" onClick={() => scrollCarousel(-1)}>
          <i className="fa-solid fa-chevron-left" />
        </button>

        <div className="carousel__viewport" tabIndex={0} role="region" aria-label="Facilities carousel, use arrow keys to navigate">
          <div className="carousel__track">
            {facilities.map((machine) => (
              <article key={machine.title} className="machine-card">
                <div className="machine-card__media">
                  <img src={machine.image} alt={machine.title} loading="lazy" />
                  <div className="machine-card__tag">{machine.tag}</div>
                </div>
                <div className="machine-card__body">
                  <h3>{machine.title}</h3>
                  <p>{machine.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button className="carousel__arrow carousel__arrow--right" aria-label="Next machine" onClick={() => scrollCarousel(1)}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>

      <div className="carousel__hint">
        <i className="fa-solid fa-arrows-left-right" /> Drag or scroll to browse · Hover to pause
      </div>
    </section>
  );
}

export default FacilitiesSection;
