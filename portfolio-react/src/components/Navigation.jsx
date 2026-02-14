import { useDarkMode } from '../hooks/useDarkMode';

const Navigation = () => {
  const [isDark, toggleDark] = useDarkMode();

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          Lalith <span className="accent">Ebinezer.</span>
        </div>
        <div className="nav-links">
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
          <a href="mailto:hello@lalith.com" className="btn-primary">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
