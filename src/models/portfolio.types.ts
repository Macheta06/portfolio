export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  repoLink?: string;
  type: 'real' | 'study';
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
