import type { FC } from 'react';
import type { Education, Certification } from '../models/portfolio.types';

interface EducationSectionProps {
  educationList: Education[];
  certifications: Certification[];
}

export const EducationSection: FC<EducationSectionProps> = ({ educationList, certifications }) => {
  return (
    <section aria-label="Education and certifications" className="section-padding container animate-fade-in">
      <h2 className="text-gradient">Education & Certifications</h2>
      
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        
        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>University Studies</h3>
          <div style={{ position: 'relative', paddingLeft: '2rem', display: 'grid', gap: '1rem' }}>
            <div style={{ 
              position: 'absolute', 
              left: '0.5rem', 
              top: 0, 
              bottom: 0, 
              width: '2px', 
              background: 'linear-gradient(to bottom, var(--accent-primary), rgba(59,130,246,0.1))' 
            }} />
            
            {educationList.map((edu) => (
              <div key={edu.id} style={{ position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  left: '-1.875rem',
                  top: '1.75rem', 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  background: 'var(--accent-primary)', 
                  border: '3px solid var(--bg-color)', 
                  zIndex: 1 
                }} />
                
                <div style={{ 
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem',
                  transition: 'border-color 0.3s ease'
                }}>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                  <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{edu.institution}</p>
                  <p style={{ marginBottom: '1rem' }}>
                    <span style={{ 
                      background: 'rgba(59, 130, 246, 0.1)', 
                      padding: '0.15rem 0.5rem', 
                      borderRadius: '4px', 
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {edu.period}
                    </span>
                  </p>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Notable Certifications</h3>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))' }}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{ 
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                transition: 'border-color 0.3s ease'
              }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>🏆</span>
                  {cert.link ? (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none' }}>
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h4>
                <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{cert.issuer}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Issued: {cert.date}</p>
                {cert.credentialId && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                    ID: {cert.credentialId}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
