import type { FC } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { HeroSection } from '../components/HeroSection';
import { EducationSection } from '../components/EducationSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { Footer } from '../components/Footer';

export const HomePage: FC = () => {
  const { profile, education, certifications, projects } = usePortfolio();

  return (
    <main className="app-container">
      <div id="hero">
        <HeroSection profile={profile} />
      </div>
      <div id="education">
        <EducationSection educationList={education} certifications={certifications} />
      </div>
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      <Footer profile={profile} />
    </main>
  );
};