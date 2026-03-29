// TechStack.jsx — icons sourced from devicon, simple-icons, and Wikipedia SVG commons.

const TECH_CATEGORIES = [
  {
    label: 'BIM & Construction',
    items: [
      { name: 'Revit',      src: 'https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg' },
      { name: 'AutoCAD',    src: 'https://cdn.worldvectorlogo.com/logos/autocad-1.svg' },
      { name: 'Navisworks', src: 'https://ui-avatars.com/api/?name=NW&background=0d6efd&color=fff&size=96&bold=true&length=2' },
      { name: 'ACC',        src: 'https://ui-avatars.com/api/?name=ACC&background=e65c00&color=fff&size=96&bold=true&length=3' },
      { name: 'Dynamo',     src: 'https://raw.githubusercontent.com/DynamoDS/Dynamo/master/doc/distrib/Images/dynamo_logo_dark.png' },
      { name: 'Civil 3D',   src: 'https://ui-avatars.com/api/?name=C3D&background=0078b8&color=fff&size=96&bold=true&length=3' },
    ],
  },
  {
    label: 'Development & APIs',
    items: [
      { name: 'APS / Forge',  src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/autodesk.svg' },
      { name: 'JavaScript',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'Python',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'React',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Power BI',     src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Node.js',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    label: 'Visualization',
    items: [
      { name: 'Unreal 5',  src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg' },
      { name: 'Twinmotion',src: 'https://ui-avatars.com/api/?name=TM&background=00a3e0&color=fff&size=96&bold=true&length=2' },
      { name: 'SketchUp',  src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Sketchup_Logo.svg' },
      { name: 'Blender',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg' },
      { name: '3ds Max',   src: 'https://ui-avatars.com/api/?name=3M&background=1a73e8&color=fff&size=96&bold=true&length=2' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'MS 365',      src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/microsoft365.svg' },
      { name: 'GitHub',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'Postman',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { name: 'VS Code',      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
      { name: 'Antigravity',  src: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@latest/icons/googlegemini.svg' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="section scroll-mt-28" style={{ borderTop: '1px solid var(--border-color)', paddingBottom: 'var(--space-24)' }}>
      <div className="container">

        <div className="exp-section-header">
          <p className="section-label">Stack</p>
          <h2 className="display-font font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}>
            Technologies I Use
          </h2>
          <p className="text-secondary" style={{ maxWidth: '36rem', marginTop: '0.75rem', fontSize: '0.95rem' }}>
            A curated toolkit spanning BIM, APIs, visualization, and cloud platforms.
          </p>
        </div>

        <div className="tech-grid-outer">
          {TECH_CATEGORIES.map((cat, cIdx) => (
            <div className="tech-category" key={cIdx}>
              {/* Rotated category label */}
              <div className="tech-category-label-wrap">
                <span className="tech-category-label">{cat.label}</span>
              </div>

              {/* Logo row */}
              <div className="tech-logo-row">
                {cat.items.map((item, iIdx) => (
                  <div className="tech-logo-item" key={iIdx} data-name={item.name}>
                    <div className="tech-logo-img-wrap">
                      <img
                        src={item.src}
                        alt={item.name}
                        className="tech-logo-img"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=c9a961&color=fff&size=96&bold=true&length=2`;
                        }}
                      />
                    </div>
                    <span className="tech-logo-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
