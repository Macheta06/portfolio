import type { FC } from 'react';
import type { Project } from '../models/portfolio.types';

// Componente interno para encapsular la tarjeta de proyecto
const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{project.title}</h3>
      <p style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
        {project.description}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {project.technologies.map((tech) => (
          <span 
            key={tech} 
            style={{ 
              fontSize: '0.75rem', 
              padding: '0.25rem 0.75rem', 
              borderRadius: '999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            View Project
          </a>
        )}
        {project.repoLink && (
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
            Repository
          </a>
        )}
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  const realProjects = projects.filter(p => p.type === 'real');
  const studyProjects = projects.filter(p => p.type === 'study');

  return (
    <section className="section-padding container animate-fade-in">
      <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>My Projects</h2>
      
      {/* Proyectos Reales */}
      {realProjects.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Real-world Projects</h3>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {realProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Proyectos de Estudio */}
      {studyProjects.length > 0 && (
        <div>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Study Projects</h3>
          <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {studyProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
