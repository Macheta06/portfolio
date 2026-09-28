import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { ProfileInfo } from '../models/portfolio.types';

interface HeroSectionProps {
  profile: ProfileInfo;
}

export const HeroSection: FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section 
      className="hero-section section-padding container animate-fade-in"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <style>
        {`
          @keyframes pulse-green {
            0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
            100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
        `}
      </style>
      
      <div 
        style={{
          position: 'absolute', 
          top: '-50%', 
          right: '-20%', 
          width: '600px', 
          height: '600px', 
          borderRadius: '50%', 
          background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', 
          filter: 'blur(60px)', 
          pointerEvents: 'none', 
          zIndex: 0
        }}
        aria-hidden="true"
      />
      
      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.25rem 0.75rem',
          background: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          borderRadius: '9999px',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'rgb(34, 197, 94)',
            animation: 'pulse-green 2s infinite'
          }} />
          <span style={{ fontSize: '0.875rem', color: 'rgb(34, 197, 94)', fontWeight: 500 }}>
            Available for opportunities
          </span>
        </div>

        <h1 className="hero-title">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        
        <h2 
          className="hero-role"
          style={{
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--accent-primary)',
            marginBottom: '1.5rem'
          }}
        >
          {profile.role}
        </h2>
        
        <p style={{ 
          fontSize: '1.25rem',
          lineHeight: 1.7,
          maxWidth: '650px',
          color: 'var(--text-secondary)',
          marginBottom: '2.5rem'
        }}>
          I build reliable, scalable web applications that solve real business problems.
        </p>
        
        <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/#projects" className="btn btn-primary">
            View Projects
          </Link>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Andrés LinkedIn profile" className="btn btn-secondary">
            Contact Me on LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="Andrés GitHub profile" className="btn btn-secondary">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
