import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <header className="hero section" id="home" ref={ref}>
      <div className="container">
        <div className={`hero-container ${isVisible ? 'slide-up' : ''}`}>
          <div className="hero-content">
            <p className="hero-label">Digital Twin Consultant</p>
            <h1 className="hero-title">
              Lalith <br />
              <span className="muted">Ebinezer</span>
              <span className="accent">.</span>
            </h1>
            <p className="hero-description">
              Specialized in driving digital transformation across the Saudi construction sector in partnership with Autodesk and Gulf Business Solutions (GBS). My expertise focuses on <strong>Autodesk Platform Services</strong> and establishing robust <strong>CDE</strong> platforms.
            </p>
            <div className="hero-actions">
              {/* CTA Buttons — side by side */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:lalithebinezer26@gmail.com" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-icons-outlined" style={{ fontSize: '18px' }}>mail</span>
                  Say Hello
                </a>
                <a
                  href="https://www.linkedin.com/in/lalith-ebinezer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span className="material-icons-outlined" style={{ fontSize: '18px' }}>open_in_new</span>
                  Connect on LinkedIn
                </a>
              </div>

              {/* Location badge */}
              <div className="flex items-center gap-2 text-sm font-medium text-secondary" style={{ marginTop: '0.5rem' }}>
                <span className="material-icons-outlined text-primary" style={{ fontSize: '18px' }}>place</span>
                Riyadh, Saudi Arabia
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img
                src="./hero.jpg"
                alt="Professional Portrait of Lalith Ebinezer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
