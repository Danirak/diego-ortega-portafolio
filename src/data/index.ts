import { PortfolioConfig } from '../types/config';
import { profileConfig } from './profile';
import { aboutConfig } from './about';
import { navbarConfig } from './navbar';
import { resumeConfig } from './resume';
import { projectsConfig } from './projects';

export const portfolioConfig: PortfolioConfig = {
    profile: profileConfig,
    about: aboutConfig,
    navbar: navbarConfig,
    resume: resumeConfig,
    projects: projectsConfig
};
