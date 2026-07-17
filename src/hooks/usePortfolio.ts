import { useState, useEffect } from 'react';
import type { Project, Education, Certification, ProfileInfo } from '../models/portfolio.types';
import * as portfolioService from '../services/portfolioService';

/**
 * Interfaz para el estado completo del portafolio.
 */
interface PortfolioState {
  profile: ProfileInfo | null;
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  loading: boolean;
  error: string | null;
}

/**
 * Custom Hook para gestionar el estado y la carga de datos del portafolio.
 * Sigue el patrón Observer/Custom Hook para separar la lógica de negocio de los componentes.
 * 
 * @returns {PortfolioState} Objeto con la información del portafolio, estado de carga y posibles errores.
 */
export const usePortfolio = (): PortfolioState => {
  const [state, setState] = useState<PortfolioState>({
    profile: null,
    education: [],
    certifications: [],
    projects: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    // Simulamos una carga asíncrona (ej. si luego migramos a una API)
    const fetchPortfolioData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        
        // Simular latencia de red para demostrar manejo de estados de carga
        await new Promise(resolve => setTimeout(resolve, 500));

        const profile = portfolioService.getProfileInfo();
        const education = portfolioService.getEducation();
        const certifications = portfolioService.getCertifications();
        const projects = portfolioService.getProjects();

        setState({
          profile,
          education,
          certifications,
          projects,
          loading: false,
          error: null,
        });
      } catch (err) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Error desconocido al cargar el portafolio',
        }));
      }
    };

    fetchPortfolioData();
  }, []);

  return state;
};
