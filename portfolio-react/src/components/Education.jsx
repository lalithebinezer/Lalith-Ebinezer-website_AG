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
                <h3 className="font-bold text-xl mb-1">PGP in Digital Construction: Mastering BIM</h3>
                <p className="text-secondary font-medium mb-1">NICMAR, Institution for Construction & Management Education</p>
                <span className="badge badge-primary">PURSUING</span>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 className="font-bold text-xl mb-1">Bachelor of Technology - BTech, Civil Engineering</h3>
                <p className="text-secondary font-medium mb-1">Sree Vidyanikethan Education Trust (SVET), Tirupati</p>
                <p className="text-xs font-bold text-tertiary uppercase">June 2009 - May 2013</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
