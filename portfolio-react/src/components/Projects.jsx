import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CardStack.css';

// No SVG symbols needed - using actual images

const FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'dev', label: 'Development' },
  { id: 'bim', label: 'BIM' },
  { id: 'vis', label: 'Visualization' }
];

const PROJECTS = [
  {
    title: 'ACC Data Connector for Power BI',
    category: 'Data Visualization',
    description: 'Built a robust data pipeline extracting BIM 360/ACC issues, RFIs, and submittals directly into Microsoft Power BI to overcome the limitations of static reporting.',
    technologies: ['Node.js', 'APS (Forge) API', 'Power BI API', 'Azure Functions'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-4',
    bg: '#1e293b',
    riserBg: '#0f172a',
    logoFill: '#3b82f6',
    logoId: '#logo-1'
  },
  {
    title: '4D Construction Phasing Simulator',
    category: 'Web Development',
    description: 'Developed a web-based 4D visualization tool that integrates Primavera P6 schedules with 3D models using the APS Viewer to address complex logistics and scheduling conflicts.',
    technologies: ['React', 'TypeScript', 'Three.js', 'APS Viewer'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-1',
    bg: '#18181b',
    riserBg: '#09090b',
    logoFill: '#0ea5e9',
    logoId: '#logo-1'
  },
  {
    title: 'Revit Design Automation Suite',
    category: 'Cloud Automation',
    description: 'Engineered a cloud-native service to handle repetitive Revit tasks—such as family standardization, model health checks, and PDF generation—without the need for local hardware.',
    technologies: ['C#', '.NET', 'Design Automation API', 'AWS Lambda'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-4',
    bg: '#27272a',
    riserBg: '#18181b',
    logoFill: '#f59e0b',
    logoId: '#logo-1'
  },
  {
    title: 'Automation Experience Center',
    category: '3D Simulation',
    description: 'Created an immersive automated warehouse simulation for Amara Raja / Silver Lining using Twinmotion to visually validate complex automation workflows.',
    technologies: ['Twinmotion', '3D Visualization', 'Warehouse Automation'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-1',
    bg: '#3f3f46',
    riserBg: '#27272a',
    logoFill: '#10b981',
    logoId: '#logo-1'
  },
  {
    title: 'C-130 Service Center 4D',
    category: 'Construction Simulation',
    description: 'Supported the C-130 Service Center project by developing a detailed 4D timeline simulation using Revit and Twinmotion to tackle complex sequencing challenges.',
    technologies: ['Revit', 'Twinmotion', '4D Phasing'],
    image: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-4',
    bg: '#1e1b4b',
    riserBg: '#11001c',
    logoFill: '#6366f1',
    logoId: '#logo-1'
  },
  {
    title: 'Digital Twin MetaHuman',
    category: 'Virtual Reality',
    description: 'Created a hyper-realistic MetaHuman avatar in Unreal Engine using 3D scan data to explore the frontiers of digital identity in virtual environments.',
    technologies: ['Unreal Engine', 'MetaHuman', '3D Scanning'],
    image: 'https://images.unsplash.com/photo-1617802690992-1ce567c9780e?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-1',
    bg: '#2e1065',
    riserBg: '#1e1b4b',
    logoFill: '#a855f7',
    logoId: '#logo-1'
  },
  {
    title: 'BIM Implementation at Titan',
    category: 'Consultancy',
    description: 'Supported the strategic implementation of Building Information Modeling (BIM) workflows at Titan\'s Bangalore facility to modernize their design and construction processes.',
    technologies: ['BIM Strategy', 'Revit', 'Implementation'],
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ghoulId: '#ghoul-4',
    bg: '#44403c',
    riserBg: '#292524',
    logoFill: '#f43f5e',
    logoId: '#logo-1'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  
  // Refs
  const gridItemsRef = useRef([]);
  const modalRef = useRef(null);
  const cardWrappersRef = useRef([]); // Two cards for swapping
  const closeRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setVisibleProjects(PROJECTS);
    } else {
      // Simple filter logic mapping generic categories
      setVisibleProjects(PROJECTS); 
    }
  }, [activeFilter]);

  useEffect(() => {
    if (visibleProjects.length === 0) return;

    // Variables
    const cards = cardWrappersRef.current.filter(Boolean); // .card elements
    const ghouls = visibleProjects;
    const gridItems = gridItemsRef.current.filter(Boolean);
    const modal = modalRef.current;
    
    if (!cards.length || !modal) return;

    // We rely on 2 reusable cards: index 0 (active), index 1 (incoming)
    // Init state
    gsap.set(cards, { autoAlpha: 0 });

    let activeCardIdx = 0; // The DOM index in 'cards' (0 or 1)
    let incomingCardIdx = 1; 
    let currentDataIdx = 0; // The index in 'ghouls' array

    // Mouse tilt logic vars
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    let pos = { x: wW / 2, y: wH / 2 };
    let mouse = { x: pos.x, y: pos.y }; // target
    let speed = 0.1;

    const moveMouse = (e) => {
       mouse.x = e.clientX;
       mouse.y = e.clientY;
    };

    const tiltSetter = () => {
        // Smooth lerp
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        
        // Calculate rotations based on mouse dist from center
        // Normalize 0..1 then map to -range..range
        const range = 20;
        const tiltY = (gsap.utils.normalize(0, wW, pos.x) - 0.5) * range; 
        const tiltX = (gsap.utils.normalize(0, wH, pos.y) - 0.5) * -range; 

        // Apply to ACTIVE card only
        if (cards[activeCardIdx]) {
           gsap.set(cards[activeCardIdx], {
               rotateX: tiltX,
               rotateY: tiltY
           });
        }
    };

    const startTilt = () => {
        window.addEventListener('mousemove', moveMouse);
        gsap.ticker.add(tiltSetter);
    };

    const stopTilt = () => {
        window.removeEventListener('mousemove', moveMouse);
        gsap.ticker.remove(tiltSetter);
    };

    const openModal = (index) => {
        currentDataIdx = index;
        const data = ghouls[index];
        const card = cards[activeCardIdx];
        
        // Update React state for modal content
        setSelectedProject(data);
        setCurrentProjectIndex(index);

        // Show modal bg with smoother fade
        gsap.set(modal, { autoAlpha: 1, visibility: 'visible' });
        gsap.fromTo(modal, 
            { backgroundColor: "rgba(0,0,0,0)" }, 
            { backgroundColor: "rgba(0,0,0,0.8)", duration: 0.6, ease: "power2.out" }
        );

        // Animate Card In with GPU acceleration
        gsap.set(card, { 
            autoAlpha: 1, 
            rotationY: 180, 
            x: 0, 
            y: 0, 
            zIndex: 10,
            force3D: true // GPU acceleration
        }); 
        
        gsap.timeline({ onComplete: startTilt })
            .fromTo(card,
                { y: "100vh", rotateX: -90 },
                { 
                    y: 0, 
                    rotateX: 0, 
                    duration: 0.9, 
                    ease: "power3.out",
                    force3D: true
                }
            )
            .to(card, { 
                rotationY: 0, 
                duration: 0.7, 
                ease: "power2.inOut",
                force3D: true
            }, "-=0.4");
    };

    const close = () => {
        stopTilt();
        const card = cards[activeCardIdx];
        
        gsap.timeline()
            .to(card, { 
                y: "100vh", 
                rotateX: 50, 
                duration: 0.5, 
                ease: "power3.in",
                force3D: true
            })
            .to(modal, { 
                autoAlpha: 0, 
                duration: 0.4, 
                ease: "power2.out"
            }, "-=0.3");
    };

    const next = () => {
        stopTilt();
        let nextDataIdx = currentDataIdx + 1;
        if (nextDataIdx >= ghouls.length) nextDataIdx = 0;
        
        const nextData = ghouls[nextDataIdx];
        const currentCard = cards[activeCardIdx];
        const nextCard = cards[incomingCardIdx];
        
        // Update React state
        setSelectedProject(nextData);
        setCurrentProjectIndex(nextDataIdx);
        
        // Animation: Current flies Left, Next flies in from Right
        gsap.set(nextCard, { 
            autoAlpha: 1, 
            x: "100vw", 
            y: 0, 
            zIndex: 10, 
            rotationY: 0,
            force3D: true
        });
        gsap.set(currentCard, { zIndex: 1 });

        gsap.timeline({ onComplete: startTilt })
            .to(currentCard, { 
                x: "-100vw", 
                rotationY: -45, 
                duration: 0.7, 
                ease: "power3.inOut",
                force3D: true
            })
            .to(nextCard, { 
                x: 0, 
                rotationY: 0, 
                duration: 0.7, 
                ease: "expo.out",
                force3D: true
            }, "<");
            
        // Swap indices
        activeCardIdx = incomingCardIdx;
        incomingCardIdx = activeCardIdx === 0 ? 1 : 0;
        currentDataIdx = nextDataIdx;
    };

    const prev = () => {
        stopTilt();
        let prevDataIdx = currentDataIdx - 1;
        if (prevDataIdx < 0) prevDataIdx = ghouls.length - 1;
        
        const prevData = ghouls[prevDataIdx];
        const currentCard = cards[activeCardIdx];
        const prevCard = cards[incomingCardIdx];
        
        // Update React state
        setSelectedProject(prevData);
        setCurrentProjectIndex(prevDataIdx);
        
        // Animation: Current flies Right, Prev flies in from Left
        gsap.set(prevCard, { 
            autoAlpha: 1, 
            x: "-100vw", 
            y: 0, 
            zIndex: 10, 
            rotationY: 0,
            force3D: true
        });
        gsap.set(currentCard, { zIndex: 1 });

        gsap.timeline({ onComplete: startTilt })
            .to(currentCard, { 
                x: "100vw", 
                rotationY: 45, 
                duration: 0.7, 
                ease: "power3.inOut",
                force3D: true
            })
            .to(prevCard, { 
                x: 0, 
                rotationY: 0, 
                duration: 0.7, 
                ease: "expo.out",
                force3D: true
            }, "<");

        activeCardIdx = incomingCardIdx;
        incomingCardIdx = activeCardIdx === 0 ? 1 : 0;
        currentDataIdx = prevDataIdx;
    };


    // Bindings
    gridItems.forEach((item, i) => {
        item.onclick = () => openModal(i);
    });
    
    if (closeRef.current) closeRef.current.onclick = close;
    if (nextRef.current) nextRef.current.onclick = next;
    if (prevRef.current) prevRef.current.onclick = prev;

    return () => {
        stopTilt();
        gridItems.forEach(item => item.onclick = null);
        if (closeRef.current) closeRef.current.onclick = null;
        if (nextRef.current) nextRef.current.onclick = null;
        if (prevRef.current) prevRef.current.onclick = null;
    };

  }, [visibleProjects]);

  return (
    <section id="portfolio-projects" className="section">
      <div className="container mb-8">
         <h3 className="text-4xl font-bold text-sand-900 dark:text-white">Selected Works</h3>
         <p className="text-sand-500">Click a card to view</p>
      </div>

      {/* Grid */}
      <div className="container">
          <div className="ghoul-grid">
             {visibleProjects.map((p, i) => (
                 <div 
                    key={i} 
                    className="ghoul-grid-ghoul" 
                    ref={el => gridItemsRef.current[i] = el}
                    style={{ 
                        background: p.bg || '#1e293b',
                        position: 'relative'
                    }}
                 >
                     <img 
                        src={p.image} 
                        alt={p.title}
                        className="ghoul-path"
                        style={{ 
                            width: '100%', 
                            height: '100%', 
                            objectFit: 'cover',
                            opacity: 0.9
                        }}
                     />
                     <div style={{
                         position: 'absolute',
                         bottom: 0,
                         left: 0,
                         right: 0,
                         padding: '0.75rem',
                         background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                         color: 'white',
                         fontSize: '0.75rem',
                         fontWeight: '600',
                         pointerEvents: 'none'
                     }}>
                         {p.title}
                     </div>
                 </div>
             ))}
          </div>
      </div>

      {/* Modal */}
      <div className="modal" ref={modalRef}>
          <div className="close-modal" ref={closeRef}>&times;</div>
          <div className="arrow arrow--next" ref={nextRef}>&gt;</div>
          <div className="arrow arrow--prev" ref={prevRef}>&lt;</div>

          <div className="card-wrapper">
              {/* 2 Reusable Cards */}
              {[0, 1].map(n => (
                  <div className="card" key={n} ref={el => cardWrappersRef.current[n] = el}>
                      <div className="front" style={{ background: selectedProject?.bg || '#1e293b' }}>
                          <img 
                              src={selectedProject?.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80'} 
                              alt={selectedProject?.title || 'Project'}
                              className="project-image"
                              style={{
                                  width: '100%',
                                  height: '50%',
                                  objectFit: 'cover',
                                  borderRadius: '20px 20px 0 0'
                              }}
                          />
                          
                          <div className="card-content" style={{
                              padding: '1.5rem',
                              height: '50%',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.5rem',
                              overflow: 'hidden'
                          }}>
                              <span className="project-category" style={{
                                  fontSize: '0.7rem',
                                  fontWeight: '700',
                                  color: 'var(--primary)',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.1em'
                              }}>{selectedProject?.category || 'Category'}</span>
                              <h3 className="project-title" style={{
                                  fontSize: '1.35rem',
                                  fontWeight: '700',
                                  color: 'white',
                                  fontFamily: 'var(--font-display)',
                                  lineHeight: '1.2',
                                  marginBottom: '0.25rem'
                              }}>{selectedProject?.title || 'Project Title'}</h3>
                              <p className="description" style={{
                                  fontSize: '0.8rem',
                                  color: 'rgba(255, 255, 255, 0.85)',
                                  lineHeight: '1.4',
                                  overflow: 'hidden',
                                  display: '-webkit-box',
                                  WebkitLineClamp: '5',
                                  WebkitBoxOrient: 'vertical',
                                  flex: 1
                              }}>{selectedProject?.description || 'Project description will appear here.'}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      
      <div className="container mt-24 mb-12 flex justify-center">
         <div className="credits text-sm text-sand-500">Project Showcase</div>
      </div>
    </section>
  );
};

export default Projects;
