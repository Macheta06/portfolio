import type { FC } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { SkillsSection } from '../components/SkillsSection';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export const HomePage: FC = () => {
  const { profile, education, certifications, projects } = usePortfolio();

  return (
    <main className="app-container">
      <div id="hero">
        <HeroSection profile={profile} />
      </div>
      <div id="projects">
        <ProjectsSection projects={projects} />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="education">
        <EducationSection educationList={education} certifications={certifications} />
      </div>
      <div id="contact">
        <ContactSection
          email={profile.email}
          github={profile.github}
          linkedin={profile.linkedin}
        />
      </div>
      <Footer profile={profile} />
    </main>
  );
};
