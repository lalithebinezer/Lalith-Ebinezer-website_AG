const Footer = () => {
  return (
    <footer className="section" style={{ paddingTop: 'var(--space-24)', paddingBottom: 'var(--space-12)', background: 'var(--bg-secondary)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="display-font font-bold mb-8" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: '1.1' }}>
          Ready to transform <br />construction workflows?
        </h2>
        <p className="text-tertiary text-lg mb-12" style={{ maxWidth: '42rem', margin: '0 auto var(--space-12)' }}>
          Whether you need strategic BIM implementation, custom automation tools, or a complete digital twin solution, I'm here to help you build the future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <a
            href="mailto:hello@lalith.com"
            className="flex items-center gap-3 font-bold"
            style={{
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%)',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: 'var(--radius-full)',
              boxShadow: '0 4px 14px 0 rgba(201, 169, 97, 0.4)',
              transition: 'all 300ms',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px 0 rgba(201, 169, 97, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(201, 169, 97, 0.4)';
            }}
          >
            <span className="material-icons-outlined">email</span>
            Say Hello
          </a>
          <a
            href="#"
            className="flex items-center gap-3 font-bold"
            style={{
              background: 'var(--surface)',
              color: 'var(--text-primary)',
              padding: '1rem 2.5rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              transition: 'transform 300ms',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <svg style={{ width: '20px', height: '20px', fill: 'var(--primary)' }} viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
            Connect on LinkedIn
          </a>
        </div>
        <div className="border-t border-sand-200 dark:border-sand-800 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="display-font font-bold text-lg text-sand-900 dark:text-white mb-1">Lalith Ebinezer.</p>
            <p className="text-xs text-sand-500 dark:text-sand-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <span className="material-icons-outlined text-sm">place</span>
              Riyadh, Saudi Arabia
            </p>
          </div>
          
          <div className="text-sm text-sand-500 dark:text-sand-400 text-center">
            © 2026 Lalith Ebinezer. All rights reserved.
          </div>

          <div className="text-xs text-sand-500 dark:text-sand-400 uppercase text-center md:text-right max-w-xs tracking-tight">
            Based in Riyadh, Saudi Arabia • #258 Radha Govinda Residency, Tirupati 51701 (Home Base)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
