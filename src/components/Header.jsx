function Header({ navItems, activeSection, isScrolled, menuOpen, setMenuOpen, handleAnchorClick, onNavigateToRegister }) {
  return (
    <header className={`navbar ${isScrolled ? 'is-scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__logo" aria-label="AICTE IDEA Lab Club — Home" onClick={(event) => handleAnchorClick(event, '#home')}>
          <span className="navbar__logo-mark">
            <img src="/image.png" alt="AICTE IDEA Lab Logo" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
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
