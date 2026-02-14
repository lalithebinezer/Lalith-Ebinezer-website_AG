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
        <div className="hidden md:flex flex-1 items-center justify-end gap-8">
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

        {/* Mobile Navigation (Horizontal Scroll) */}
        <div className="md:hidden w-full overflow-x-auto pb-2 -mx-6 px-6 no-scrollbar mt-4 flex items-center gap-6">
          <a href="#home" className="nav-link whitespace-nowrap text-sm" onClick={(e) => scrollToSection(e, 'home')}>
            Home
          </a>
          <a href="#experience" className="nav-link whitespace-nowrap text-sm" onClick={(e) => scrollToSection(e, 'experience')}>
            Experience
          </a>
          <a href="#pocs" className="nav-link whitespace-nowrap text-sm" onClick={(e) => scrollToSection(e, 'pocs')}>
            Expertise
          </a>
          <a href="#works" className="nav-link whitespace-nowrap text-sm" onClick={(e) => scrollToSection(e, 'works')}>
            Projects
          </a>
          <div className="flex items-center gap-4 ml-auto pl-4 border-l border-[var(--border-color)]">
             <button 
              className="theme-toggle" 
              onClick={toggleDark} 
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              style={{ color: 'inherit' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
             <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary text-xs py-2 px-4 whitespace-nowrap">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
