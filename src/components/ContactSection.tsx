import type { FC } from 'react';

interface ContactSectionProps {
  email: string;
  github: string;
  linkedin: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ email, github, linkedin }) => {
  return (
    <section aria-label="Contact" className="section-padding container animate-fade-in">
      <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Let's Connect</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href={`mailto:${email}`} aria-label="Send email to Andrés" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
          Email Me
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Andrés GitHub profile" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Andrés LinkedIn profile" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
          LinkedIn
        </a>
      </div>
    </section>
  );
};
