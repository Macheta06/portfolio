import type { FC } from 'react';

interface AboutSectionProps {
  about: string;
}

export const AboutSection: FC<AboutSectionProps> = ({ about }) => {
  return (
    <section className="section-padding container">
      <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>About Me</h2>
      <div className="glass-panel" style={{ padding: '2rem' }}>
        {about.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: index < about.split('\n\n').length - 1 ? '1rem' : 0, color: 'var(--text-secondary)' }}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
