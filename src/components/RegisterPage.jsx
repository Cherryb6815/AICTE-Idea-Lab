function RegisterPage({ onBack }) {
  // Using Tally.so embed URL with parameters for alignment, hidden title, and transparency
  const embedUrl = 'https://tally.so/embed/PdQzG1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';
  return (
    <section className="register-page" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background blobs for premium glassmorphism glow */}
      <div className="blob blob--one" style={{ top: '10%', right: '-10%', opacity: 0.25, pointerEvents: 'none' }} />
      <div className="blob blob--two" style={{ bottom: '10%', left: '-10%', opacity: 0.2, pointerEvents: 'none' }} />
      <canvas id="registerParticleCanvas" className="hero__particles" style={{ opacity: 0.4, pointerEvents: 'none' }} />

      <div className="section-inner register-page__inner" style={{ position: 'relative', zIndex: 2 }}>
        <a
          href="/"
          className="btn btn--outline register-page__back"
          onClick={(event) => {
            event.preventDefault();
            onBack?.();
          }}
        >
          <i className="fa-solid fa-arrow-left" /> Back to Home
        </a>

        <div className="register-page__card glass">
          <p className="eyebrow">PROJECT REGISTRATION</p>
          <h1>Register your innovation project</h1>
          <p className="register-page__lead">
            Share your idea, team details, and project goals with the AICTE IDEA Lab team.
            Replace the placeholder embed URL below with your live Tally form when ready.
          </p>

          <div className="register-page__embed">
            <iframe
              src={embedUrl}
              title="Project registration form"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ width: '100%', height: '720px', border: 'none' }}
            />
          </div>

          <p className="register-page__note">
            Need help? Contact the lab team at <a href="mailto:idealab@poornima.edu.in">idealab@poornima.edu.in</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;

