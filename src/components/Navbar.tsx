import type { FC, MouseEvent } from 'react';

export const Navbar: FC = () => {
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--glass-bg)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--glass-border)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)' }}>
          AM<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a 
            href="#hero" 
            onClick={(e) => handleScroll(e, 'hero')}
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Home
          </a>
          <a 
            href="#education" 
            onClick={(e) => handleScroll(e, 'education')}
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Education
          </a>
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            style={{ fontSize: '0.875rem', fontWeight: 500 }}
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};
