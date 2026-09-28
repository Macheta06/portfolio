import type { FC, ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../services/portfolioService';
import type { Project } from '../models/portfolio.types';
import { ProjectNotFound } from './ProjectNotFound';

const TechChips: FC<{ technologies: string[] }> = ({ technologies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      {technologies.map((tech) => (
        <span
          key={tech}
          style={{
            fontSize: '0.75rem',
            padding: '0.3rem 0.75rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            color: 'var(--accent-primary)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
          }}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

const DetailSection: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <div style={{
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem',
      marginBottom: '1.5rem',
    }}>
      <h2 style={{
        color: 'var(--accent-primary)',
        marginBottom: '1.25rem',
        fontSize: '1.25rem',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
      }}>
        <span style={{
          width: '4px',
          height: '1.25rem',
          background: 'var(--accent-gradient)',
          borderRadius: '2px',
          display: 'inline-block',
          flexShrink: 0,
        }} />
        {title}
      </h2>
      {children}
    </div>
  );
};

const DetailList: FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul style={{ paddingLeft: '0', listStyle: 'none', display: 'grid', gap: '0.75rem' }}>
      {items.map((item) => (
        <li key={item} style={{
          color: 'var(--text-secondary)',
          paddingLeft: '1.25rem',
          position: 'relative',
          lineHeight: 1.7,
        }}>
          <span style={{
            position: 'absolute',
            left: 0,
            top: '0.6em',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'var(--accent-primary)',
            opacity: 0.6,
          }} />
          {item}
        </li>
      ))}
    </ul>
  );
};

export const ProjectDetailPage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project: Project | undefined = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <main className="app-container">
      <section className="container section-padding animate-fade-in">
        <Link
          to="/#projects"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
            transition: 'color 0.2s ease',
          }}
        >
          ← Back to Projects
        </Link>

        {project.featuredImages && project.featuredImages.length > 0 && (
          <div style={{
            marginBottom: '2rem',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 40%)',
              zIndex: 1,
              pointerEvents: 'none',
            }} />
            <img
              src={`${import.meta.env.BASE_URL}${project.featuredImages[0].replace(/^\//, '')}`}
              alt={`${project.title} preview`}
              style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        )}

        <div style={{
          background: 'var(--glass-bg)',
          border: '1px solid var(--glass-border)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          marginBottom: '2rem',
        }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              marginBottom: '1.25rem',
              fontWeight: 600,
            }}
          >
            {project.type === 'real' ? 'Real-world Project' : 'Study Project'}
          </span>
          <h1 className="text-gradient" style={{ marginBottom: '0.75rem' }}>{project.title}</h1>
          <p style={{
            color: 'var(--text-secondary)',
            marginBottom: '1.5rem',
            fontSize: '1.15rem',
            lineHeight: 1.7,
            maxWidth: '700px',
          }}>
            {project.tagline}
          </p>

          {project.role && (
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              <strong style={{ color: 'var(--text-primary)' }}>Role:</strong> {project.role}
            </p>
          )}

          <div style={{ marginBottom: '1.5rem' }}>
            <TechChips technologies={project.technologies} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                className="btn btn-primary"
              >
                View Project
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View project repository"
                className="btn btn-secondary"
              >
                Repository
              </a>
            )}
          </div>
        </div>

        <DetailSection title="Overview">
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.summary}</p>
        </DetailSection>

        {project.problemStatement && (
          <DetailSection title="The Problem">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.problemStatement}</p>
          </DetailSection>
        )}

        {project.solutionOverview && (
          <DetailSection title="The Solution">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.solutionOverview}</p>
          </DetailSection>
        )}

        {project.role && (
          <DetailSection title="My Role">
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.role}</p>
          </DetailSection>
        )}

        {project.architecture && (
          <DetailSection title="Architecture">
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '0.9rem',
              background: 'rgba(0,0,0,0.2)',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              overflowX: 'auto',
            }}>{project.architecture}</p>
          </DetailSection>
        )}

        {project.keyChallenges && project.keyChallenges.length > 0 && (
          <DetailSection title="Technical Challenges">
            <div style={{ display: 'grid', gap: '2rem' }}>
              {project.keyChallenges.map((challenge) => (
                <div key={challenge.title} style={{
                  paddingLeft: '1rem',
                  borderLeft: '2px solid rgba(59, 130, 246, 0.2)',
                }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                    {challenge.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--accent-primary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Problem:</strong> {challenge.problem}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    <strong style={{ color: '#10b981', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.03em' }}>Solution:</strong> {challenge.solution}
                  </p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {project.technicalDecisions && project.technicalDecisions.length > 0 && (
          <DetailSection title="Technical Decisions">
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {project.technicalDecisions.map((decision) => (
                <div key={decision.decision} style={{
                  background: 'rgba(0,0,0,0.15)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--accent-primary)',
                }}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    {decision.decision}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{decision.rationale}</p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {project.outcomes && project.outcomes.length > 0 && (
          <DetailSection title="Outcomes">
            <DetailList items={project.outcomes} />
          </DetailSection>
        )}

        {project.learnings && project.learnings.length > 0 && (
          <DetailSection title="Learnings">
            <DetailList items={project.learnings} />
          </DetailSection>
        )}

        {project.nextSteps && project.nextSteps.length > 0 && (
          <DetailSection title="Next Steps">
            <DetailList items={project.nextSteps} />
          </DetailSection>
        )}
      </section>
    </main>
  );
};