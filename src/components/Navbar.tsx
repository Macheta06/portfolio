import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {
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
        <Link
          to="/"
          style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', textDecoration: 'none' }}
        >
          AM<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Home
          </Link>
          <Link to="/#education" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Education
          </Link>
          <Link to="/#projects" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Projects
          </Link>
          <Link to="/#skills" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Skills
          </Link>
          <Link to="/#contact" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};