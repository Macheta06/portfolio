export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface TechnicalDecision {
  decision: string;
  rationale: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  type: 'real' | 'study';
  summary: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  role?: string;
  problemStatement?: string;
  solutionOverview?: string;
  keyChallenges?: ProjectChallenge[];
  technicalDecisions?: TechnicalDecision[];
  architecture?: string;
  outcomes?: string[];
  learnings?: string[];
  nextSteps?: string[];
  featuredImages?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
}
