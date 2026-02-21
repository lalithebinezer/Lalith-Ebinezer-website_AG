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
  },
  {
    title: '4D Construction Phasing Simulator',
    category: 'Web Development',
    description: 'Developed a web-based 4D visualization tool that integrates Primavera P6 schedules with 3D models using the APS Viewer to address complex logistics and scheduling conflicts.',
    technologies: ['React', 'TypeScript', 'Three.js', 'APS Viewer'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    bg: '#18181b',
  },
  {
    title: 'Revit Design Automation Suite',
    category: 'Cloud Automation',
    description: 'Engineered a cloud-native service to handle repetitive Revit tasks—such as family standardization, model health checks, and PDF generation—without the need for local hardware.',
    technologies: ['C#', '.NET', 'Design Automation API', 'AWS Lambda'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    bg: '#27272a',
  },
  {
    title: 'Automation Experience Center',
    category: '3D Simulation',
    description: 'Created an immersive automated warehouse simulation for Amara Raja / Silver Lining using Twinmotion to visually validate complex automation workflows.',
    technologies: ['Twinmotion', '3D Visualization', 'Warehouse Automation'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    bg: '#3f3f46',
  },
  {
    title: 'C-130 Service Center 4D',
    category: 'Construction Simulation',
    description: 'Supported the C-130 Service Center project by developing a detailed 4D timeline simulation using Revit and Twinmotion to tackle complex sequencing challenges.',
    technologies: ['Revit', 'Twinmotion', '4D Phasing'],
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
    bg: '#1e1b4b',
  },
  {
    title: 'Digital Twin MetaHuman',
    category: 'Virtual Reality',
    description: 'Created a hyper-realistic MetaHuman avatar in Unreal Engine using 3D scan data to explore the frontiers of digital identity in virtual environments.',
    technologies: ['Unreal Engine', 'MetaHuman', '3D Scanning'],
    image: 'https://images.unsplash.com/photo-1617802690992-1ce567c9780e?auto=format&fit=crop&w=1200&q=80',
    bg: '#2e1065',
  },
  {
    title: 'BIM Implementation at Titan',
    category: 'Consultancy',
    description: "Supported the strategic implementation of Building Information Modeling (BIM) workflows at Titan's Bangalore facility to modernize their design and construction processes.",
    technologies: ['BIM Strategy', 'Revit', 'Implementation'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    bg: '#44403c',
  }
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDir, setSlideDir] = useState(null); // 'left' | 'right' | null
  const [isAnimating, setIsAnimating] = useState(false);
  const gridItemsRef = useRef([]);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSlideDir(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const navigate = useCallback((dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideDir(dir);

    setTimeout(() => {
      setCurrentIndex(prev => {
        if (dir === 'right') return (prev + 1) % PROJECTS.length;
        return (prev - 1 + PROJECTS.length) % PROJECTS.length;
      });
      setSlideDir(null);
      setIsAnimating(false);
    }, 420);
  }, [isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') navigate('right');
      if (e.key === 'ArrowLeft') navigate('left');
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isModalOpen, isAnimating, navigate]);

  const project = PROJECTS[currentIndex];

  // Card slide keyframes via inline style trick
  const cardStyle = {
    transition: 'transform 0.42s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.42s ease',
    transform: slideDir === 'right' ? 'translateX(-60px)' : slideDir === 'left' ? 'translateX(60px)' : 'translateX(0)',
    opacity: slideDir ? 0 : 1,
  };

  return (
    <section id="portfolio-projects" className="section">
      <div className="container mb-8">
        <h3 className="text-4xl font-bold text-sand-900 dark:text-white">Selected Works</h3>
        <p className="text-sand-500" style={{ marginTop: '0.5rem' }}>Click a card to explore</p>
      </div>

      {/* Project Grid */}
      <div className="container">
        <div className="ghoul-grid">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="ghoul-grid-ghoul"
              ref={el => gridItemsRef.current[i] = el}
              onClick={() => openModal(i)}
              style={{ background: p.bg || '#1e293b', position: 'relative' }}
            >
              <img
                src={p.image}
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '0.75rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                color: 'white',
                fontSize: '0.72rem',
                fontWeight: '700',
                pointerEvents: 'none',
                lineHeight: '1.3',
              }}>
                {p.title}
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
            backgroundColor: 'rgba(0,0,0,0.82)',
            backdropFilter: 'blur(10px)',
            animation: 'modalFadeIn 0.35s ease forwards',
          }}
          onClick={handleBackdropClick}
        >
          {/* Close */}
          <div className="close-modal" onClick={closeModal}>&times;</div>

          {/* Prev Arrow */}
          <div
            className="arrow arrow--prev"
            onClick={() => navigate('left')}
            style={{ cursor: isAnimating ? 'default' : 'pointer', userSelect: 'none' }}
          >
            &#8249;
          </div>

          {/* Next Arrow */}
          <div
            className="arrow arrow--next"
            onClick={() => navigate('right')}
            style={{ cursor: isAnimating ? 'default' : 'pointer', userSelect: 'none' }}
          >
            &#8250;
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
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
              }}
            >
              <div
                className="front"
                style={{ background: project.bg || '#1e293b', width: '100%', height: '100%' }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '52%',
                    objectFit: 'cover',
                    display: 'block',
                    borderRadius: '22px 22px 0 0',
                  }}
                />

                {/* Category badge overlay on image */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(6px)',
                  color: 'var(--primary)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '999px',
                  fontSize: '0.65rem',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}>
                  {project.category}
                </div>

                {/* Counter badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.5)',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '999px',
                  fontSize: '0.65rem',
                  fontWeight: '700',
                }}>
                  {currentIndex + 1} / {PROJECTS.length}
                </div>

                {/* Content area */}
                <div style={{
                  padding: '1.5rem 1.5rem 1rem',
                  height: '48%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  overflow: 'hidden',
                }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '800',
                    color: 'white',
                    fontFamily: 'var(--font-display)',
                    lineHeight: '1.2',
                    marginBottom: '0.25rem',
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: '1.55',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    flex: 1,
                  }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    {project.technologies.map((tech, j) => (
                      <span key={j} style={{
                        background: 'rgba(255,255,255,0.12)',
                        color: 'rgba(255,255,255,0.85)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                        fontSize: '0.65rem',
                        fontWeight: '700',
                        letterSpacing: '0.04em',
                        border: '1px solid rgba(255,255,255,0.15)',
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
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="container flex justify-center" style={{ marginTop: '5rem', marginBottom: '3rem' }}>
        <div className="credits text-sm text-sand-500">Project Showcase · {PROJECTS.length} works</div>
      </div>
    </section>
  );
};

export default Projects;
