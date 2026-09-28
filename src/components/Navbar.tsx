import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#education', label: 'Education' },
    { to: '/#projects', label: 'Projects' },
    { to: '/#skills', label: 'Skills' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <nav aria-label="Main navigation" style={{
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
          aria-label="Home"
          style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-primary)', textDecoration: 'none' }}
        >
          AM<span style={{ color: 'var(--accent-primary)' }}>.</span>
        </Link>

        {/* Hamburger button - mobile only */}
        <button
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text-primary)',
            zIndex: 51
          }}
          className="hamburger-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '1.5rem' }} className="nav-links-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              style={{ fontSize: '0.875rem', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile nav menu */}
        {isOpen && (
          <div
            className="nav-menu-mobile"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '280px',
              maxWidth: '85vw',
              background: 'var(--bg-color)',
              borderLeft: '1px solid var(--glass-border)',
              padding: '6rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              zIndex: 50,
              boxShadow: '-4px 0 20px rgba(0,0,0,0.3)',
              animation: 'slideIn 0.3s ease'
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid var(--glass-border)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};