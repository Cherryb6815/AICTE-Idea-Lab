function Footer({ handleAnchorClick, onNavigateToRegister }) {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__brand">
          <span className="navbar__logo-mark">
            <img src="/image.png" alt="AICTE IDEA Lab Logo" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
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
