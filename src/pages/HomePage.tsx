import type { FC } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { RevealOnScroll } from '../components/RevealOnScroll';

export const HomePage: FC = () => {
  const { profile, education, certifications, projects } = usePortfolio();

  return (
    <main className="app-container">
      <RevealOnScroll>
        <div id="hero"><HeroSection profile={profile} /></div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="projects"><ProjectsSection projects={projects} /></div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="about"><AboutSection about={profile.about} /></div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="skills"><SkillsSection /></div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="education"><EducationSection educationList={education} certifications={certifications} /></div>
      </RevealOnScroll>
      <RevealOnScroll>
        <div id="contact">
          <ContactSection
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </div>
      </RevealOnScroll>
      <Footer profile={profile} />
    </main>
  );
};
