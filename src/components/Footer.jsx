function Footer({ handleAnchorClick, onNavigateToRegister }) {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-mark">
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2L30.5 9.5V24.5L17 32L3.5 24.5V9.5L17 2Z" stroke="url(#logoGrad2)" strokeWidth="1.6" />
              <circle cx="17" cy="17" r="2.6" fill="url(#logoGrad2)" />
              <defs>
                <linearGradient id="logoGrad2" x1="3.5" y1="2" x2="30.5" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E6C767" />
                  <stop offset="1" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p>AICTE IDEA Lab Club<br /><span>Poornima Group of Institutions</span></p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <a href="#about" onClick={(event) => handleAnchorClick(event, '#about')}>About</a>
          <a href="#facilities" onClick={(event) => handleAnchorClick(event, '#facilities')}>Facilities</a>
          <a href="#gallery" onClick={(event) => handleAnchorClick(event, '#gallery')}>Gallery</a>
          <a href="#contact" onClick={(event) => handleAnchorClick(event, '#contact')}>Contact</a>
        </div>

        <div className="footer__links">
          <h4>Programs</h4>
          <a href="#features" onClick={(event) => handleAnchorClick(event, '#features')}>Workshops</a>
          <a href="#workflow" onClick={(event) => handleAnchorClick(event, '#workflow')}>Innovation Workflow</a>
          <a href="#why-join" onClick={(event) => handleAnchorClick(event, '#why-join')}>Why Join</a>
          <a
            href="/register"
            onClick={(event) => {
              event.preventDefault();
              onNavigateToRegister?.();
            }}
          >
            Register a Project
          </a>
        </div>

        <div className="footer__credit">
          <h4>Developed for</h4>
          <p>AICTE IDEA Lab Club<br />Poornima Group</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© <span id="year"></span> AICTE IDEA Lab Club, Poornima Group of Institutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
