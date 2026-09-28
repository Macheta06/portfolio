import type { FC } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    accent: '#3b82f6',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Context API'],
  },
  {
    title: 'Backend',
    accent: '#10b981',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Databases',
    accent: '#f59e0b',
    skills: ['MongoDB', 'MongoDB Atlas'],
  },
  {
    title: 'Tools & Deployment',
    accent: '#8b5cf6',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Hostinger'],
  },
];

export const SkillsSection: FC = () => {
  return (
    <section aria-label="Skills and technologies" className="section-padding container animate-fade-in">
      <h2 className="text-gradient">Skills & Technologies</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
        Technologies and tools I work with to build modern, performant web applications.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))', 
        gap: '1.5rem' 
      }}>
        {skillCategories.map((category) => (
          <div 
            key={category.title} 
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderLeft: `4px solid ${category.accent}`,
              borderRadius: 'var(--radius-lg)',
              padding: '1.5rem',
              transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{ 
              color: category.accent, 
              marginBottom: '1rem', 
              fontSize: '1.1rem', 
              fontWeight: 600 
            }}>
              {category.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  style={{
                    backgroundColor: `${category.accent}1a`,
                    color: category.accent,
                    border: `1px solid ${category.accent}33`,
                    fontSize: '0.75rem',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '999px'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
