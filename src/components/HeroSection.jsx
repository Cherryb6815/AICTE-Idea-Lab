function HeroSection({ heroImage, handleAnchorClick, onNavigateToRegister }) {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img src={heroImage} alt="" className="hero__bg-img" loading="eager" />
        <div className="hero__overlay" />
        <div className="hero__grid" />
        <canvas id="particleCanvas" className="hero__particles" />
        <div className="blob blob--one" />
        <div className="blob blob--two" />
      </div>

      <div className="hero__content">
        <p className="eyebrow" data-reveal>AICTE IDEA LAB · POORNIMA GROUP OF INSTITUTIONS</p>
        <h1 className="hero__title" data-reveal>
          Transforming <span className="text-gold">Ideas</span><br /> into Innovation
        </h1>
        <p className="hero__subtitle" data-reveal>
          A dedicated Innovation, Design & Entrepreneurship Application development lab where student researchers prototype, test and build real engineering solutions — backed by industry-grade tools, mentorship and a culture of applied invention.
        </p>
        <div className="hero__actions" data-reveal>
          <a href="#facilities" className="btn btn--outline" onClick={(event) => handleAnchorClick(event, '#facilities')}>Explore Lab</a>
          <button type="button" className="btn btn--gold" onClick={onNavigateToRegister}>
            Register Project <i className="fa-solid fa-arrow-up-right" />
          </button>
        </div>
        <div className="hero__meta" data-reveal>
          <div className="hero__meta-item"><span>12+</span>Advanced Machines</div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item"><span>150+</span>Student Innovators</div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item"><span>AICTE</span>Recognized Facility</div>
        </div>
      </div>

      <button className="scroll-indicator" aria-label="Scroll to About section" onClick={(event) => handleAnchorClick(event, '#about')}>
        <span>Scroll</span>
        <div className="scroll-indicator__line"><div className="scroll-indicator__dot" /></div>
      </button>
    </section>
  );
}

export default HeroSection;
