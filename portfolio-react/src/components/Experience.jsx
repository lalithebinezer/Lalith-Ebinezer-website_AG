import { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const totalHeight = timelineRef.current.offsetHeight;
      const scrolled = window.innerHeight * 0.75 - rect.top;
      const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
      setLineHeight(progress * 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="section scroll-mt-28">
      <div className="container">

        {/* Section Header */}
        <div className="exp-section-header">
          <p className="section-label">Career</p>
          <h2 className="display-font font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
            Experience
          </h2>
          <p className="text-secondary" style={{ maxWidth: '36rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            10+ years across BIM consulting, digital transformation, business development, and AEC technology.
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline" ref={timelineRef}>

          {/* Animated fill line */}
          <div className="exp-line-bg" />
          <div className="exp-line-fill" style={{ height: `${lineHeight}%` }} />

          {EXPERIENCE.map((company, cIdx) => (
            <div className="exp-company-block" key={cIdx}>

              {/* Dot on the line */}
              <div className="exp-dot" />

              {/* Company header */}
              <div className="exp-company-header">
                <span className="exp-company-name">{company.company}</span>
                <span className="exp-location-badge">
                  <span className="material-icons-outlined" style={{ fontSize: '13px', marginRight: '3px' }}>place</span>
                  {company.location}
                </span>
              </div>

              {/* Roles */}
              {company.roles.map((role, rIdx) => (
                <div className="exp-role" key={rIdx}>
                  <div className="exp-role-meta">
                    <span className="exp-period-badge">{role.period}</span>
                    <span className="exp-role-title">{role.title}</span>
                  </div>
                  <ul className="exp-bullets">
                    {role.description.map((item, iIdx) => (
                      <li key={iIdx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          {/* End dot */}
          <div className="exp-dot exp-dot-end" />
        </div>

      </div>
    </section>
  );
};

export default Experience;
