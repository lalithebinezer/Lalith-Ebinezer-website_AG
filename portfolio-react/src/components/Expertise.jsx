import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Expertise = () => {
  const [ref, isVisible] = useScrollAnimation();

  const pocs = [
    {
      icon: 'settings_suggest',
      title: 'Automated ACC Workflows',
      description: 'Creation of sophisticated automated workflows within Autodesk Construction Cloud environment, leveraging Power Automate to streamline project document control and cross-platform notification systems.',
      tags: ['Power Automate', 'ACC'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtN_GWM6NSLDq-WF23JQTGC1xok7qJYnMwwVSvbplbtejy8Nx7CD71md4l5FHdD7qfMzGdXHt1p_Cz8HG5yrOZDgzwHBCFyy3EnhYCDLxWdK93Osvv2btJo7jLnYiE6XvOZJrnZgbI_OiRBx0em8Y84a4uHjKj4P73Nk9WIJiLik4SQO3dskSaQueNO5VCemHFXnsvCo-9vViCR-5EayyqL5Z7PsFFfqL96PrP02duACh8p6qdY5n8GJXm8yPRn9q_GISYQmlyncA'
    },
    {
      icon: 'bar_chart_4_bars',
      title: 'Management Power BI Dashboards',
      description: 'Dynamic Power BI dashboards engineered for C-suite coordination. Utilizing Autodesk Platform Services (APS) to pull live BIM metadata for real-time progress tracking and resource allocation insights.',
      tags: ['Power BI', 'APS'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDc_HQzN0l1-jrXX2maQI04HfGeWzkJZNchS_Cyj7D2bGftd9Xdmjcq8dTwkBRbT1U28JqtWJFFpeTKgMjnEUlZLtJYl7R85ny7lau0WP13XZhfNPzMvgy16igNzBn2ehJ846bvMjQ8iV2DWLJFY4YD8NPRV5HpzjgWnWb3Et8RHE12wK8rwzcHx1bRq5UVM8gTOzHLzvUfxSLBmIIlzmBxwAg2e8cWuy4z6gGzD-1ROOcxT7ea9EJL6MZe6Q6c0h9VcYMzJJgnncs'
    },
    {
      icon: 'view_in_ar',
      title: 'BIM to Metaverse Visualization',
      description: 'Translating static BIM data into immersive Digital Twin experiences. Importing geometry and metadata into Unreal Engine to build high-fidelity Metaverse platforms for stakeholder walkthroughs.',
      tags: ['Unreal Engine', 'Metaverse'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf0wUwOewwMoUpHNIdvAhfvh3YHtULzQEUBE-9ai23G4Tg4oR2b-CfyZlb6-1JvvyUC9Cdg2nFJF4o86LT9E3ALk32otkccPLySZkk8wHnDvqRLod2LBa0v7GtdyVF4LfZb791s81Q0KKOpLhqv1lTSYEl15kNQNpyEYMc1nkhCbJTyjE-3k6k7xxaOHea7BWt-bd4rRBBkwfcH-m0rNMEt98LCQChKzIOjO_aJhgsPI893Bjwc7JCsaJ0vMgdyf5oeaQPgi_hT1s'
    },
    {
      icon: 'dynamic_feed',
      title: 'Web-Based Phasing Simulation',
      description: 'Optimizing construction phasing via BIM + Web simulation. Developed using APS for browser-based 4D visualization, allowing site teams to simulate construction sequences without thick-client software.',
      tags: ['APS', 'Web Simulation'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCI3rDF7nLnUWNDgB46vOKFUhs1hfaHIOGOxgde6BbsmtiJFcP8OlrsxDIs8gzs6NaxbGEHuWjtt36XanNp2-S3iQBCD-X79BK58it9mni6nrWK1xZLC_YAeZADFa9sSaUlDf9XG6UpUvk4Kz5CVD_yljVDIPV7wz56QKuzfwvO0JD1CrZbQMVw3OGlcoTFKgsCh_NQWDMOxBaSScHHt47YnhnTcFzh0UfG2Is_f0TCQCMxNaQul-3Kbe_ZivJK_B0NTAesatQuScs'
    },
    {
      icon: 'face_retouching_natural',
      title: 'MetaHuman Creation',
      description: 'Developing hyper-realistic digital personas within Unreal Engine. Creating professional MetaHumans to serve as interactive guides or digital representations within Digital Twin and training environments.',
      tags: ['Unreal Engine', 'MetaHuman'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJk7RDyiOSUPHfX3janYjHshbwW_ao7YnKJnAwISGvkIcVovVx1kQpR6S7IKfkniVoVYH584MsQQgNtdFiDe6T4PkwN2MEKSXA6e7ypDI43Tu7ttpFrgsBpZ4edy5l6Ge4mLGUdQUUiSTF5NzY472xfPjGmKi_x-eXuPNZoVycUVAQJzCqKMvPIjsi1astZi0qQHzdXC457W1YwXIshkC8blAcROfRroIcmamgVsRE5mORd_obFGaad59aemss_bSSt5LsNOwEjXM'
    }
  ];

  return (
    <section className="section" id="pocs" style={{ background: 'var(--surface)' }} ref={ref}>
      <div className="container">
        <div className={`${isVisible ? 'slide-up' : ''}`}>
          <div className="mb-16">
            <h2 className="display-font text-4xl font-bold mb-4">Hands-on POCs & Expertise</h2>
            <div style={{ height: '4px', width: '5rem', background: 'var(--primary)', marginBottom: 'var(--space-6)' }}></div>
            <p className="text-tertiary text-lg" style={{ maxWidth: '42rem' }}>
              Demonstrating technical depth through tangible Proof of Concepts and advanced digital integration strategies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pocs.map((poc, i) => (
              <div key={i} className="poc-card">
                <img src={poc.image} alt={poc.title} className="poc-card-img" />
                <div className="poc-card-content">
                  <div className="icon-container">
                    <span className="material-symbols-outlined">{poc.icon}</span>
                  </div>
                  <h3 className="display-font text-xl font-bold mb-3" style={{ transition: 'color 300ms' }}>
                    {poc.title}
                  </h3>
                  <p className="text-secondary text-sm mb-6" style={{ lineHeight: '1.625' }}>
                    {poc.description}
                  </p>
                  <div className="flex items-center gap-2">
                    {poc.tags.map((tag, j) => (
                      <span key={j} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="hidden lg:flex" style={{ padding: 'var(--space-8)', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-2xl)' }}>
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--slate-300)' }}>
                Future POC In Progress
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
