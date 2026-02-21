// TechStack.jsx
// Logo images are PLACEHOLDERS — swap src URLs for your own logos later.

const TECH_CATEGORIES = [
  {
    label: 'BIM & Construction',
    items: [
      { name: 'Revit',           src: 'https://img.icons8.com/color/96/autodesk-revit.png' },
      { name: 'AutoCAD',         src: 'https://img.icons8.com/color/96/autocad.png' },
      { name: 'Navisworks',      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Autodesk_Navisworks_2022_logo.png/240px-Autodesk_Navisworks_2022_logo.png' },
      { name: 'ACC / BIM360',    src: 'https://img.icons8.com/color/96/autodesk.png' },
      { name: 'Dynamo',          src: 'https://dynamobim.org/wp-content/uploads/forum-assets/colin-mccroneautodesk-com/07/10/Dynamo-Logo-2k.png' },
    ],
  },
  {
    label: 'Development & APIs',
    items: [
      { name: 'APS / Forge',     src: 'https://img.icons8.com/color/96/autodesk.png' },
      { name: 'JavaScript',      src: 'https://img.icons8.com/color/96/javascript--v1.png' },
      { name: 'Python',          src: 'https://img.icons8.com/color/96/python--v1.png' },
      { name: 'React',           src: 'https://img.icons8.com/officel/96/react.png' },
      { name: 'Power BI',        src: 'https://img.icons8.com/color/96/power-bi.png' },
    ],
  },
  {
    label: 'Visualization',
    items: [
      { name: 'Unreal Engine',   src: 'https://img.icons8.com/color/96/unreal-engine.png' },
      { name: 'Twinmotion',      src: 'https://cdn2.unrealengine.com/twinmotion-logo-white-500x500-92d0e53e19ac.png' },
      { name: 'SketchUp',        src: 'https://img.icons8.com/color/96/sketchup.png' },
      { name: 'Blender',         src: 'https://img.icons8.com/color/96/blender-3d.png' },
    ],
  },
  {
    label: 'Tools & Platforms',
    items: [
      { name: 'Microsoft 365',   src: 'https://img.icons8.com/color/96/microsoft.png' },
      { name: 'Azure',           src: 'https://img.icons8.com/color/96/azure-1.png' },
      { name: 'GitHub',          src: 'https://img.icons8.com/ios-glyphs/96/github.png' },
      { name: 'Postman',         src: 'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png' },
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
              {/* Rotated label — same style as the CV reference */}
              <div className="tech-category-label-wrap">
                <span className="tech-category-label">{cat.label}</span>
              </div>

              {/* Logo row */}
              <div className="tech-logo-row">
                {cat.items.map((item, iIdx) => (
                  <div className="tech-logo-item" key={iIdx}>
                    <img
                      src={item.src}
                      alt={item.name}
                      className="tech-logo-img"
                      onError={(e) => { e.target.src = 'https://img.icons8.com/ios/96/settings.png'; }}
                    />
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
