import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }} ref={ref}>
      <div className="container">
        <div className={`flex flex-col gap-12 ${isVisible ? 'slide-up' : ''}`} style={{ flexDirection: 'column', gap: 'var(--space-12)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }} className="md:flex-row">
            <div style={{ flex: '0 0 25%' }}>
              <div className="flex items-center gap-4 mb-4">
                <span className="material-icons-outlined text-primary">school</span>
                <h2 className="display-font text-3xl font-bold">Education</h2>
              </div>
              <p className="text-sm text-secondary" style={{ lineHeight: '1.625' }}>
                Academic foundation in Civil Engineering and advanced specialized training in Digital Construction.
              </p>
            </div>
            <div style={{ flex: '0 0 75%', display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
              <div className="timeline-item">
                <div className="timeline-dot active"></div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl">Post Graduate Program in Digital Construction</h3>
                  <span className="badge badge-primary">Present / In Progress</span>
                </div>
                <p className="text-secondary font-medium mb-3">NICMAR University</p>
                <ul className="text-sm text-secondary space-y-2" style={{ listStyleType: 'disc', paddingLeft: '1.25rem', lineHeight: '1.6' }}>
                  <li><strong>Core Focus &amp; Governance:</strong> BIM/VDC management, Common Data Environment (CDE) architecture, 4D/5D scheduling, and ISO 19650 information management workflows (OIR, PIR, AIR, EIR, BEP development, TIDP/MIDP, LOIN).</li>
                  <li><strong>Applied Methodologies &amp; Capstone:</strong> Developed end-to-end ISO 19650-1/2 BEP and CDE exchange framework; federated architectural/structural coordination models (LOD 300/350); executed spatial analysis and vector layer infrastructure planning in QGIS.</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl">Bachelor of Technology (B.Tech), Civil Engineering</h3>
                  <p className="text-xs font-bold text-tertiary uppercase">2009 – 2013</p>
                </div>
                <p className="text-secondary font-medium mb-2">Sree Vidyanikethan Educational Trust (SVET), Tirupati</p>
                <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>
                  Solid structural engineering fundamentals, surveying, project planning, and computer-aided engineering design.
                </p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                  <h3 className="font-bold text-xl">Lead BIM Industry Mentor</h3>
                  <p className="text-xs font-bold text-tertiary uppercase">Aug 2024 – Dec 2025</p>
                </div>
                <p className="text-secondary font-medium mb-1">Novatr</p>
                <p className="text-sm text-secondary" style={{ lineHeight: '1.6' }}>
                  Mentoring practicing architecture and engineering professionals in enterprise BIM workflows, CDE management, and computational design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
