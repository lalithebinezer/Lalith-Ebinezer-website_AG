import { useState, useRef, useEffect, useCallback } from 'react';
import './CardStack.css';

const PROJECTS = [
  {
    title: 'DIFC Living & Innovation Hub East',
    category: 'CDE Rollout & Governance',
    description: 'Served as Lead CDE Implementation Specialist on-site in Dubai for the landmark DIFC Living & Innovation Hub East project, managing full lifecycle CDE configuration, RBAC permissions, review approval gates, user manual authoring, and on-site multi-disciplinary task team onboarding.',
    technologies: ['Autodesk Forma / ACC', 'CUBE CDE', 'ISO 19650', 'RBAC'],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    bg: '#0f172a',
    accent: '#38bdf8',
  },
  {
    title: 'Titan Tanishq Flagship Retail Store',
    category: 'Retail BIM & Visualization',
    description: 'Selected existing flagship store and prepared comprehensive BIM model with 100+ reusable parametric Revit families for entire retail store rollout; created real-time architectural visualization in Twinmotion.',
    technologies: ['Revit', 'Twinmotion', 'Parametric BIM', 'Visual Simulation'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    bg: '#292524',
    accent: '#f59e0b',
  },
  {
    title: 'C-130 Service Center Facility',
    category: '4D Construction Simulation',
    description: 'Created comprehensive 4D construction sequence simulation and schedule animation, integrating project scheduling with constructible BIM model geometry to optimize execution phasing and logistics.',
    technologies: ['Bentley SYNCHRO 4D', 'Navisworks', 'Revit', '4D Phasing'],
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
    bg: '#1e1b4b',
    accent: '#818cf8',
  },
  {
    title: 'Automation Experience Center',
    category: 'BIM & Automation Solutions',
    description: 'Spearheaded multi-disciplinary model coordination, specialized industrial automation components, and interactive architectural showcase visualization for Amara Raja / Silver Lining.',
    technologies: ['Revit', 'Autodesk Forma / ACC', 'Twinmotion', 'Industrial Automation'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    bg: '#18181b',
    accent: '#fb923c',
  },
  {
    title: 'ACC Data Connector for Power BI',
    category: 'Data & Business Intelligence',
    description: 'Architected automated data extraction pipelines using Autodesk Platform Services (APS/Forge) APIs and ACC Data Connector, streaming transmittal registers, review statuses, and model clash metrics into live Microsoft Power BI executive dashboards.',
    technologies: ['APS (Forge) APIs', 'ACC Data Connector', 'Power BI', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    bg: '#1e293b',
    accent: '#38bdf8',
  },
  {
    title: 'Revit Design Automation Suite',
    category: 'Cloud Automation',
    description: 'Engineered automated model audit routines using the APS Design Automation API for Revit, automating parameter compliance checks, family cleanup, and sheet publishing, cutting manual verification effort by 40%.',
    technologies: ['APS Design Automation', 'C# / .NET', 'Revit API', 'Cloud Workflows'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    bg: '#27272a',
    accent: '#34d399',
  },
  {
    title: '4D Construction Phasing Simulator',
    category: 'Web Simulation',
    description: 'Developed browser-based 4D visualization tool integrating project schedules with 3D models via the APS Viewer, enabling site and engineering teams to simulate construction sequences without thick-client software.',
    technologies: ['React', 'TypeScript', 'APS Viewer', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    bg: '#18181b',
    accent: '#a78bfa',
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const gridItemsRef = useRef([]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSlideDir(null);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const navigate = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDir(dir);
    setTimeout(() => {
      setCurrentIndex(prev =>
        dir === 'right' ? (prev + 1) % PROJECTS.length : (prev - 1 + PROJECTS.length) % PROJECTS.length
      );
      setSlideDir(null);
      setIsAnimating(false);
    }, 380);
  }, [isAnimating]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') navigate('right');
      if (e.key === 'ArrowLeft') navigate('left');
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isModalOpen, navigate]);

  const project = PROJECTS[currentIndex];

  const cardStyle = {
    transition: 'transform 0.38s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.38s ease',
    transform: slideDir === 'right' ? 'translateX(-48px)' : slideDir === 'left' ? 'translateX(48px)' : 'translateX(0)',
    opacity: slideDir ? 0 : 1,
  };

  return (
    <section id="portfolio-projects" className="section">
      {/* Section Header */}
      <div className="container">
        <div className="exp-section-header">
          <p className="section-label">Projects</p>
          <h2 className="display-font font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
            Key Project Implementations
          </h2>
          <p className="text-secondary" style={{ maxWidth: '36rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            Regional track record across signature developments, CDE platform mobilizations, 4D simulation facilities, and enterprise automation.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      <div className="container">
        <div className="poc-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="poc-card"
              ref={el => gridItemsRef.current[i] = el}
              onClick={() => openModal(i)}
            >
              {/* Image */}
              <img src={p.image} alt={p.title} className="poc-card-img" />

              {/* Gradient overlay always visible at bottom */}
              <div className="poc-card-overlay" />

              {/* Category pill */}
              <span className="poc-card-category">{p.category}</span>

              {/* Title at bottom */}
              <div className="poc-card-footer">
                <span className="poc-card-title">{p.title}</span>
                <span className="poc-card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal"
          style={{
            visibility: 'visible',
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(14px)',
            animation: 'modalFadeIn 0.3s ease forwards',
          }}
          onClick={handleBackdropClick}
        >
          {/* Close */}
          <div className="close-modal" onClick={closeModal}>×</div>

          {/* Prev Arrow */}
          <div
            className="arrow arrow--prev"
            onClick={() => navigate('left')}
            style={{ cursor: isAnimating ? 'default' : 'pointer', userSelect: 'none' }}
          >
            ‹
          </div>

          {/* Next Arrow */}
          <div
            className="arrow arrow--next"
            onClick={() => navigate('right')}
            style={{ cursor: isAnimating ? 'default' : 'pointer', userSelect: 'none' }}
          >
            ›
          </div>

          {/* Card */}
          <div className="card-wrapper" style={{ position: 'relative' }}>
            <div
              className="card"
              style={{
                ...cardStyle,
                position: 'relative',
                visibility: 'visible',
                transform: cardStyle.transform,
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)`,
              }}
            >
              <div className="front" style={{ background: project.bg, width: '100%', height: '100%' }}>
                {/* Project Image */}
                <div style={{ position: 'relative', height: '50%' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px 20px 0 0' }}
                  />
                  {/* Image gradient */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `linear-gradient(to bottom, transparent 40%, ${project.bg} 100%)`,
                    borderRadius: '20px 20px 0 0',
                  }} />
                  {/* Accent bar */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '2px',
                    background: `linear-gradient(to right, ${project.accent}, transparent)`,
                  }} />
                </div>

                {/* Counter pill */}
                <div style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
                  color: 'rgba(255,255,255,0.65)',
                  padding: '0.2rem 0.65rem', borderRadius: '999px',
                  fontSize: '0.65rem', fontWeight: '700',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {currentIndex + 1} / {PROJECTS.length}
                </div>

                {/* Category badge */}
                <div style={{
                  position: 'absolute', top: '1rem', left: '1rem',
                  background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
                  color: project.accent,
                  padding: '0.25rem 0.75rem', borderRadius: '999px',
                  fontSize: '0.62rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em',
                  border: `1px solid ${project.accent}44`,
                }}>
                  {project.category}
                </div>

                {/* Content area */}
                <div style={{ padding: '1.25rem 1.5rem 1.25rem', height: '50%', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: 'white', fontFamily: 'var(--font-display)', lineHeight: '1.2' }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: '0.82rem', color: 'rgba(255,255,255,0.72)', lineHeight: '1.6',
                    overflow: 'hidden', display: '-webkit-box',
                    WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', flex: 1,
                  }}>
                    {project.description}
                  </p>

                  {/* Divider */}
                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0.25rem 0' }} />

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.technologies.map((tech, j) => (
                      <span key={j} style={{
                        background: `${project.accent}18`,
                        color: project.accent,
                        padding: '0.18rem 0.55rem',
                        borderRadius: '999px',
                        fontSize: '0.62rem',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        border: `1px solid ${project.accent}40`,
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="container flex justify-center" style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        <div className="credits text-sm text-sand-500">{PROJECTS.length} key project implementations &amp; builds</div>
      </div>
    </section>
  );
};

export default Projects;
