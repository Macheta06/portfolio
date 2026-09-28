import type { FC } from 'react';

interface ContactSectionProps {
  email: string;
  github: string;
  linkedin: string;
}

export const ContactSection: FC<ContactSectionProps> = ({ email, github, linkedin }) => {
  return (
    <section aria-label="Contact" className="section-padding container animate-fade-in">
      <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem', borderRadius: 'var(--radius-xl)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="text-gradient" style={{ marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href={`mailto:${email}`} aria-label="Send email to Andrés" className="btn btn-primary contact-btn" style={{ padding: '0.75rem 1.5rem' }}>
              Email Me
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="Andrés GitHub profile" className="btn btn-secondary contact-btn" style={{ padding: '0.75rem 1.5rem' }}>
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="Andrés LinkedIn profile" className="btn btn-secondary contact-btn" style={{ padding: '0.75rem 1.5rem' }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
