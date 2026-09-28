import type { FC } from 'react';
import type { ProfileInfo } from '../models/portfolio.types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      padding: '3rem 0 2rem', 
      backgroundColor: 'var(--bg-secondary)',
      textAlign: 'center'
    }}>
      <div style={{ 
        height: '1px', 
        background: 'linear-gradient(to right, transparent, var(--accent-primary), rgba(139,92,246,1), transparent)', 
        marginBottom: '2rem' 
      }} />
      
      <div className="container">
        <div style={{ 
          fontSize: '1.5rem', 
          fontWeight: 700, 
          letterSpacing: '-1px', 
          marginBottom: '1rem',
          color: 'var(--text-primary)'
        }}>
          AM.
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: '0.5rem', 
          marginBottom: '2rem', 
          flexWrap: 'wrap',
          color: 'var(--text-secondary)'
        }}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}>GitHub</a>
          <span>·</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}>LinkedIn</a>
          <span>·</span>
          <a href={`mailto:${profile.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease' }}>Email</a>
        </div>

        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>
            Built with React, TypeScript, and Vite.
          </p>
        </div>
      </div>
    </footer>
  );
};
