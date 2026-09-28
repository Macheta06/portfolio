import type { FC } from 'react';

interface AboutSectionProps {
  about: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="section-padding container">
      <h2 className="text-gradient" style={{ marginBottom: '0.5rem' }}>About Me</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.05rem' }}>
        Get to know me and my journey in software engineering.
      </p>
      <div className="glass-panel" style={{ padding: '2rem', borderLeft: '3px solid var(--accent-primary)', position: 'relative' }}>
        <span style={{
          position: 'absolute',
          top: '-0.5rem',
          left: '1rem',
          fontSize: '4rem',
          color: 'rgba(59, 130, 246, 0.2)',
          fontFamily: 'Georgia, serif',
          lineHeight: 1,
          pointerEvents: 'none'
        }}>
          "
        </span>
        {about.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: index < about.split('\n\n').length - 1 ? '1rem' : 0, color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1.05rem' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
