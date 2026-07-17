import React from 'react';
import type { ProfileInfo } from '../models/portfolio.types';

interface HeroSectionProps {
  profile: ProfileInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section className="hero-section section-padding container animate-fade-in">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <h2 className="hero-role">{profile.role}</h2>
        <div className="hero-about glass-panel" style={{ marginBottom: '1.5rem' }}>
          {/* Usamos split para renderizar los párrafos separados por \n\n */}
          {profile.about.split('\n\n').map((paragraph, index) => (
            <p key={index} className="about-paragraph">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="hero-actions">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Contact Me on LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
