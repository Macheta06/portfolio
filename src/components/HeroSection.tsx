import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { ProfileInfo } from '../models/portfolio.types';

interface HeroSectionProps {
  profile: ProfileInfo;
}

export const HeroSection: FC<HeroSectionProps> = ({ profile }) => {
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
