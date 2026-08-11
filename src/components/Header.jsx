function Header({ navItems, activeSection, isScrolled, menuOpen, setMenuOpen, handleAnchorClick, onNavigateToRegister }) {
  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="AICTE IDEA Lab Club — Home" onClick={(event) => handleAnchorClick(event, '#home')}>
          <span className="navbar__logo-mark">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 2L30.5 9.5V24.5L17 32L3.5 24.5V9.5L17 2Z" stroke="url(#logoGrad)" strokeWidth="1.6" />
              <path d="M17 9L23.5 12.7V20.3L17 24L10.5 20.3V12.7L17 9Z" fill="url(#logoGrad)" fillOpacity="0.18" stroke="url(#logoGrad)" strokeWidth="1.4" />
              <circle cx="17" cy="17" r="2.6" fill="url(#logoGrad)" />
              <defs>
                <linearGradient id="logoGrad" x1="3.5" y1="2" x2="30.5" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E6C767" />
                  <stop offset="1" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="navbar__logo-text">
            <strong>IDEA&nbsp;Lab</strong>
            <small>Poornima Group · AICTE</small>
          </span>
        </a>

        <nav className="navbar__nav" id="navMenu">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`nav-link ${activeSection === item.id ? 'active-link' : ''}`} onClick={(event) => handleAnchorClick(event, `#${item.id}`)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button type="button" className="btn btn--gold btn--sm navbar__cta" onClick={onNavigateToRegister}>
            Register Project
          </button>
          <button className={`navbar__burger ${menuOpen ? 'is-active' : ''}`} id="burgerBtn" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} id="mobileMenu">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="mobile-menu__link" onClick={(event) => handleAnchorClick(event, `#${item.id}`)}>
            {item.label}
          </a>
        ))}
        <button type="button" className="btn btn--gold mobile-menu__cta" onClick={onNavigateToRegister}>Register Project</button>
      </div>
    </header>
  );
}

export default Header;
