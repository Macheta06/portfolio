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
            padding: '0.25rem 0.75rem',
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
    <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '1.5rem' }}>
      <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }}>{title}</h2>
      {children}
    </div>
  );
};

const DetailList: FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul style={{ paddingLeft: '1.5rem', display: 'grid', gap: '0.5rem' }}>
      {items.map((item) => (
        <li key={item} style={{ color: 'var(--text-secondary)' }}>
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
          style={{ display: 'inline-block', marginBottom: '2rem', fontSize: '0.875rem' }}
        >
          ← Back to Projects
        </Link>

        {project.featuredImages && project.featuredImages.length > 0 && (
          <div style={{ marginBottom: '2rem', borderRadius: 'var(--radius-xl)', overflow: 'hidden' }}>
            <img
              src={project.featuredImages[0]}
              alt={`${project.title} preview`}
              style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              padding: '0.25rem 0.75rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-primary)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              marginBottom: '1rem',
            }}
          >
            {project.type === 'real' ? 'Real-world Project' : 'Study Project'}
          </span>
          <h1 className="text-gradient">{project.title}</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>
            {project.tagline}
          </p>

          {project.role && (
            <p style={{ marginBottom: '1.5rem' }}>
              <strong>Role:</strong> {project.role}
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
          <p style={{ color: 'var(--text-secondary)' }}>{project.summary}</p>
        </DetailSection>

        {project.problemStatement && (
          <DetailSection title="The Problem">
            <p style={{ color: 'var(--text-secondary)' }}>{project.problemStatement}</p>
          </DetailSection>
        )}

        {project.solutionOverview && (
          <DetailSection title="The Solution">
            <p style={{ color: 'var(--text-secondary)' }}>{project.solutionOverview}</p>
          </DetailSection>
        )}

        {project.role && (
          <DetailSection title="My Role">
            <p style={{ color: 'var(--text-secondary)' }}>{project.role}</p>
          </DetailSection>
        )}

        {project.architecture && (
          <DetailSection title="Architecture">
            <p style={{ color: 'var(--text-secondary)' }}>{project.architecture}</p>
          </DetailSection>
        )}

        {project.keyChallenges && project.keyChallenges.length > 0 && (
          <DetailSection title="Technical Challenges">
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {project.keyChallenges.map((challenge) => (
                <div key={challenge.title}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {challenge.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    <strong>Problem:</strong> {challenge.problem}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    <strong>Solution:</strong> {challenge.solution}
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
                <div key={decision.decision}>
                  <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                    {decision.decision}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{decision.rationale}</p>
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