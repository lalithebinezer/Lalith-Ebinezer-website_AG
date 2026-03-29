import { useState, useRef, useEffect, useCallback } from 'react';
import './CardStack.css';

const PROJECTS = [
  {
    title: 'ACC Data Connector for Power BI',
    category: 'Data Visualization',
    description: 'Built a robust data pipeline extracting BIM 360/ACC issues, RFIs, and submittals directly into Microsoft Power BI to overcome the limitations of static reporting.',
    technologies: ['Node.js', 'APS (Forge) API', 'Power BI API', 'Azure Functions'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    bg: '#1e293b',
    accent: '#38bdf8',
  },
  {
    title: '4D Construction Phasing Simulator',
    category: 'Web Development',
    description: 'Developed a web-based 4D visualization tool that integrates Primavera P6 schedules with 3D models using the APS Viewer to address complex logistics and scheduling conflicts.',
    technologies: ['React', 'TypeScript', 'Three.js', 'APS Viewer'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    bg: '#18181b',
    accent: '#a78bfa',
  },
  {
    title: 'Revit Design Automation Suite',
    category: 'Cloud Automation',
    description: 'Engineered a cloud-native service to handle repetitive Revit tasks—family standardization, model health checks, and PDF generation—without the need for local hardware.',
    technologies: ['C#', '.NET', 'Design Automation API', 'AWS Lambda'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    bg: '#27272a',
    accent: '#34d399',
  },
  {
    title: 'Automation Experience Center',
    category: '3D Simulation',
    description: 'Created an immersive automated warehouse simulation for Amara Raja / Silver Lining using Twinmotion to visually validate complex automation workflows.',
    technologies: ['Twinmotion', '3D Visualization', 'Warehouse Automation'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    bg: '#3f3f46',
    accent: '#fb923c',
  },
  {
    title: 'C-130 Service Center 4D',
    category: 'Construction Simulation',
    description: 'Supported the C-130 Service Center project by developing a detailed 4D timeline simulation using Revit and Twinmotion to tackle complex sequencing challenges.',
    technologies: ['Revit', 'Twinmotion', '4D Phasing'],
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
    bg: '#1e1b4b',
    accent: '#818cf8',
  },
  {
    title: 'Digital Twin MetaHuman',
    category: 'Virtual Reality',
    description: 'Created a hyper-realistic MetaHuman avatar in Unreal Engine using 3D scan data to explore the frontiers of digital identity in virtual environments.',
    technologies: ['Unreal Engine', 'MetaHuman', '3D Scanning'],
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&w=1200&q=80',
    bg: '#2e1065',
    accent: '#e879f9',
  },
  {
    title: 'BIM Implementation at Titan',
    category: 'Consultancy',
    description: "Supported the strategic implementation of BIM workflows at Titan's Bangalore facility to modernize their design and construction processes.",
    technologies: ['BIM Strategy', 'Revit', 'Implementation'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    bg: '#44403c',
    accent: '#c9a961',
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
          <p className="section-label">POCs</p>
          <h2 className="display-font font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
            Selected Works
          </h2>
          <p className="text-secondary" style={{ maxWidth: '36rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            A curated set of proof-of-concept builds spanning data, automation, visualization, and cloud infrastructure.
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
        <div className="credits text-sm text-sand-500">{PROJECTS.length} proof-of-concept builds</div>
      </div>
    </section>
  );
};

export default Projects;
