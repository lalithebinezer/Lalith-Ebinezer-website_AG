import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navigation = () => {
  const [isDark, toggleDark] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">

        {/* ── Logo (left) ── */}
        <div className="nav-logo">
          Lalith <span className="accent">Ebinezer.</span>
        </div>

        {/* ── Desktop: Menu + Actions (right) ── */}
        <div className="nav-right">
          <a href="#home"              className="nav-link" onClick={e => scrollToSection(e, 'home')}>Home</a>
          <a href="#experience"        className="nav-link" onClick={e => scrollToSection(e, 'experience')}>Experience</a>
          <a href="#pocs"              className="nav-link" onClick={e => scrollToSection(e, 'pocs')}>Expertise</a>
          <a href="#portfolio-projects" className="nav-link" onClick={e => scrollToSection(e, 'portfolio-projects')}>Projects</a>

          {/* Divider */}
          <span className="nav-divider" />

          <button
            className="theme-toggle"
            onClick={toggleDark}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{ color: 'inherit' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          <div style={{ overflow: 'visible', padding: '4px' }}>
            <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary">
              Hire Me
            </a>
          </div>
        </div>

        {/* ── Mobile: hamburger button ── */}
        <button
          className="nav-hamburger"
          onClick={() => setIsMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '26px', color: 'inherit' }}>
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

      </div>

      {/* ── Mobile dropdown menu ── */}
      {isMenuOpen && (
        <div className="nav-mobile-menu">
          <a href="#home"               className="nav-mobile-link" onClick={e => scrollToSection(e, 'home')}>Home</a>
          <a href="#experience"         className="nav-mobile-link" onClick={e => scrollToSection(e, 'experience')}>Experience</a>
          <a href="#pocs"               className="nav-mobile-link" onClick={e => scrollToSection(e, 'pocs')}>Expertise</a>
          <a href="#portfolio-projects" className="nav-mobile-link" onClick={e => scrollToSection(e, 'portfolio-projects')}>Projects</a>

          <div className="nav-mobile-actions">
            <button
              className="theme-toggle"
              onClick={toggleDark}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ color: 'inherit' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary" style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
