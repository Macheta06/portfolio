import { useState } from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../models/portfolio.types';

const ProjectCard: FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        padding: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        overflow: 'hidden', 
        borderRadius: 'var(--radius-xl)',
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 40px rgba(59, 130, 246, 0.15)' : 'none',
        borderColor: isHovered ? 'rgba(59, 130, 246, 0.3)' : 'var(--glass-border)',
      }}
    >
      {project.featuredImages && project.featuredImages.length > 0 && (
        <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, transparent 50%)', zIndex: 1, pointerEvents: 'none' }}></div>
          <span
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              zIndex: 2,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.2rem 0.6rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
            }}
          >
            {project.type === 'real' ? 'Real' : 'Study'}
          </span>
          <img
            src={`${import.meta.env.BASE_URL}${project.featuredImages[0].replace(/^\//, '')}`}
            alt={`${project.title} preview`}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: isHovered ? 'scale(1.08)' : 'scale(1)'
            }}
          />
        </div>
      )}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <h3 style={{ color: 'var(--accent-primary)', marginBottom: 0 }}>{project.title}</h3>
        </div>
        <p style={{ flexGrow: 1, marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
          {project.summary}
        </p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              style={{ 
                fontSize: '0.7rem', 
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

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', flexWrap: 'wrap' }}>
          <Link to={`/projects/${project.slug}`} className="btn btn-primary project-study-link" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            View Case Study
            <span style={{ display: 'inline-block', transition: 'transform 0.3s ease', transform: isHovered ? 'translateX(4px)' : 'translateX(0)' }}>→</span>
          </Link>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
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
    <section aria-label="Projects" className="section-padding container animate-fade-in">
      <h2 className="text-gradient" style={{ marginBottom: '0.5rem' }}>My Projects</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
        A selection of real-world and study projects showcasing my technical skills and problem-solving approach.
      </p>
      
      {/* Proyectos Reales */}
      {realProjects.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Real-world Projects</h3>
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))' }}>
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
          <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px, 100%), 1fr))' }}>
            {studyProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
