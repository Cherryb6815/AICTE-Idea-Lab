function RegisterPage({ onBack }) {
  const embedUrl = 'https://formfacade.com/embed/1FAIpQLSdy9bJNnb-LIXS83qInraWG0s8UXYo4uQl0R2hb0YG9ZKGQLw/';

  return (
    <section className="register-page">
      <div className="section-inner register-page__inner">
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
            Replace the placeholder embed URL below with your live FormFacade form when ready.
          </p>

          <div className="register-page__embed">
            <iframe
              src={embedUrl}
              title="Project registration form"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
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
