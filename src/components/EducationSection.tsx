import type { FC } from 'react';
import type { Education, Certification } from '../models/portfolio.types';

interface EducationSectionProps {
  educationList: Education[];
  certifications: Certification[];
}

export const EducationSection: FC<EducationSectionProps> = ({ educationList, certifications }) => {
  return (
    <section className="section-padding container animate-fade-in">
      <h2 className="text-gradient">Education & Certifications</h2>
      
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Universidades / Estudios Formales */}
        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>University Studies</h3>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {educationList.map((edu) => (
              <div key={edu.id} className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                <p style={{ fontWeight: 500, marginBottom: '0.5rem' }}>{edu.institution}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{edu.period}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certificaciones / Cursos */}
        <div>
          <h3 style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Notable Certifications</h3>
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {certifications.map((cert) => (
              <div key={cert.id} className="glass-panel" style={{ padding: '1.5rem' }}>
                <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>{cert.title}</h4>
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
