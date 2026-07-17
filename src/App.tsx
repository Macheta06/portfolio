import React from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  const { profile, education, certifications, projects, loading, error } = usePortfolio();

  if (loading) {
    return (
      <div className="container section-padding" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <h2 className="text-gradient">Loading portfolio...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center', color: '#ef4444', minHeight: '100vh' }}>
        <h2>Error loading portfolio</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="app-container">
      <Navbar />
      <div id="hero">
        {profile && <HeroSection profile={profile} />}
      </div>
      <div id="education">
        <EducationSection educationList={education} certifications={certifications} />
      </div>
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      {profile && <Footer profile={profile} />}
    </main>
  );
}

export default App;
