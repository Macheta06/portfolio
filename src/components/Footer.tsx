import type { FC } from 'react';
import type { ProfileInfo } from '../models/portfolio.types';

interface FooterProps {
  profile: ProfileInfo;
}

export const Footer: FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      marginTop: '4rem', 
      padding: '3rem 0', 
      borderTop: '1px solid var(--glass-border)',
      backgroundColor: 'var(--bg-secondary)',
      textAlign: 'center'
    }}>
      <div className="container">
        <h3 className="text-gradient" style={{ marginBottom: '1.5rem' }}>Let's Talk</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          I'm always open to discussing new opportunities, interesting projects, or just connecting. 
          Feel free to reach out.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Email Me
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            GitHub
          </a>
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
