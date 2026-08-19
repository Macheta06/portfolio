import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const ProjectNotFound: FC = () => {
  return (
    <main className="app-container">
      <section className="container section-padding animate-fade-in" style={{ textAlign: 'center' }}>
        <h1 className="text-gradient">Project not found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          The project you're looking for doesn't exist.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/#projects" className="btn btn-primary">
            ← Back to Projects
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};