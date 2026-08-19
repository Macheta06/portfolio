import type { Project, Education, Certification, ProfileInfo } from '../models/portfolio.types';
import * as portfolioService from '../services/portfolioService';

interface PortfolioState {
  profile: ProfileInfo;
  education: Education[];
  certifications: Certification[];
  projects: Project[];
}

/**
 * Thin accessor hook that exposes the static portfolio data.
 * Keeps the business logic separated from the presentation layer.
 */
export const usePortfolio = (): PortfolioState => ({
  profile: portfolioService.getProfileInfo(),
  education: portfolioService.getEducation(),
  certifications: portfolioService.getCertifications(),
  projects: portfolioService.getProjects(),
});