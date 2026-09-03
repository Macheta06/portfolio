import type { FC } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Vite', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Context API'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MongoDB Atlas'],
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'Render', 'Hostinger'],
  },
];

const pillStyle = {
  fontSize: '0.75rem',
  padding: '0.25rem 0.75rem',
  borderRadius: '999px',
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  color: 'var(--accent-primary)',
  border: '1px solid rgba(59, 130, 246, 0.2)',
} as const;

export const SkillsSection: FC = () => {
  return (
    <section className="section-padding container animate-fade-in">
      <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>Skills & Technologies</h2>
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        }}
      >
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-panel" style={{ padding: '1.5rem' }}>
            <h3 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{category.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map((skill) => (
                <span key={skill} style={pillStyle}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
