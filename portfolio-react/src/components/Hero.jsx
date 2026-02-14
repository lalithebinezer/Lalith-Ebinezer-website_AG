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
              <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="material-icons-outlined text-primary">place</span>
                Riyadh, Saudi Arabia
              </div>
              <a href="#works" className="flex items-center text-sm font-bold" style={{ borderBottom: '2px solid var(--primary)', paddingBottom: '0.25rem' }}>
                View Selected Works
                <span className="material-icons-outlined" style={{ marginLeft: '0.5rem' }}>arrow_forward</span>
              </a>
              <a href="#" className="flex items-center text-sm font-medium text-secondary" style={{ transition: 'color 300ms' }}>
                Connect
                <span className="material-icons-outlined" style={{ marginLeft: '0.25rem', fontSize: '18px' }}>open_in_new</span>
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQFbYD8brqk5RQ/profile-displayphoto-crop_800_800/B4EZvapQ3XGgAM-/0/1768899809412?e=1772668800&v=beta&t=TeW_MGxAzGPeGzkBry3LHDvVQYIkWwEM1yYjFD9PqkI"
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
