import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navigation = () => {
  const [isDark, toggleDark] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          Lalith <span className="accent">Ebinezer.</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap items-center justify-end gap-8">
          <a href="#home" className="nav-link" onClick={(e) => scrollToSection(e, 'home')}>
            Home
          </a>
          <a href="#experience" className="nav-link" onClick={(e) => scrollToSection(e, 'experience')}>
            Experience
          </a>
          <a href="#pocs" className="nav-link" onClick={(e) => scrollToSection(e, 'pocs')}>
            Expertise
          </a>
          <a href="#works" className="nav-link" onClick={(e) => scrollToSection(e, 'works')}>
            Projects
          </a>
          <button 
            className="theme-toggle" 
            onClick={toggleDark} 
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            style={{ color: 'inherit' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center justify-center p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          style={{ color: 'inherit' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay">
            <a href="#home" className="mobile-nav-link" onClick={(e) => scrollToSection(e, 'home')}>
              Home
            </a>
            <a href="#experience" className="mobile-nav-link" onClick={(e) => scrollToSection(e, 'experience')}>
              Experience
            </a>
            <a href="#pocs" className="mobile-nav-link" onClick={(e) => scrollToSection(e, 'pocs')}>
              Expertise
            </a>
            <a href="#works" className="mobile-nav-link" onClick={(e) => scrollToSection(e, 'works')}>
              Projects
            </a>
            
            <div className="flex items-center justify-between py-4 border-b border-[var(--border-color)]">
              <span className="font-display text-xl font-semibold">Appearance</span>
              <button 
                className="theme-toggle" 
                onClick={toggleDark} 
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                style={{ transform: 'scale(1.2)' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                  {isDark ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
            </div>

            <div className="mt-8">
              <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary justify-center w-full text-lg py-4 shadow-lg">
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
