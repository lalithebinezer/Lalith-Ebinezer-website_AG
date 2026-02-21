// TechStack.jsx — swap src URLs for your own logos when ready.

const TECH_CATEGORIES = [
  {
    label: 'BIM & Construction',
    items: [
      { name: 'Revit',          src: 'https://cdn.worldvectorlogo.com/logos/autodesk-revit.svg' },
      { name: 'AutoCAD',        src: 'https://cdn.worldvectorlogo.com/logos/autocad-1.svg' },
      { name: 'Navisworks',     src: 'https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-navisworks-family/fy23/features/navisworks-manage-badge-1040x1040.png' },
      { name: 'ACC / BIM 360', src: 'https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-construction-cloud/fy23/features/acc-badge-1040x1040.png' },
      { name: 'Dynamo',         src: 'https://dynamobim.org/wp-content/uploads/forum-assets/colin-mccroneautodesk-com/07/10/Dynamo-Logo-2k.png' },
      { name: 'Civil 3D',       src: 'https://damassets.autodesk.net/content/dam/autodesk/www/products/autodesk-civil-3d/fy23/features/civil-3d-badge-1040x1040.png' },
    ],
  },
  {
    label: 'Development & APIs',
    items: [
      { name: 'APS / Forge',   src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'JavaScript',    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Python',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'React',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Power BI',      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      { name: 'Node.js',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ],
  },
  {
    label: 'Visualization',
    items: [
      { name: 'Unreal Engine', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
      { name: 'Twinmotion',    src: 'https://cdn2.unrealengine.com/twinmotion-logo-white-500x500-92d0e53e19ac.png' },
      { name: 'SketchUp',      src: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Sketchup_Logo.svg' },
      { name: 'Blender',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg' },
      { name: '3ds Max',       src: 'https://damassets.autodesk.net/content/dam/autodesk/www/products/3ds-max/fy23/editorial/badge/3ds-max-badge-1080px-1080px-header.png' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Microsoft 365', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'Azure',         src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'GitHub',        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Postman',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
      { name: 'VS Code',       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    ],
  },
];

const TechStack = () => {
  return (
    <section id="techstack" className="section scroll-mt-28" style={{ paddingTop: '0', paddingBottom: 'var(--space-24)' }}>
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
                  <div className="tech-logo-item" key={iIdx}>
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
