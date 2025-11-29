// Types for the portfolio configuration

export interface ProfileInfo {
    label: string;
    value: string;
    icon: string;
}

export interface SocialLink {
    icon: string;
    url: string;
}

export interface ProfileConfig {
    HEADER: {
        label: string;
    };
    USER: {
        role: string;
        name: string;
        username: string;
        avatar: string;
    };
    INFO: ProfileInfo[];
    SOCIAL: SocialLink[];
}

export interface AboutItem {
    title: string;
    icon: string;
    description: string;
}

export interface AboutConfig {
    HEADER: {
        label: string;
    };
    PRESENTATION: {
        description: string;
    };
    DOING: {
        enabled: boolean;
        label: string;
        items: AboutItem[];
    };
    SKILLS: {
        enabled: boolean;
        label: string;
        items: AboutItem[];
    };
    TECHNOLOGIES: {
        enabled: boolean;
        label: string;
        items: {
            title: string;
            icon: string;
        }[];
    };
}

export interface NavbarConfig {
    NAVBAR: {
        label: string;
    }[];
}

export interface EducationItem {
    period: string;
    institution: string;
    description: string;
}

export interface ExperienceItem {
    period: string;
    position: string;
    description: string;
}

export interface LanguageItem {
    language: string;
    proficiency: string;
}

export interface SkillItem {
    skill: string;
    proficiency: string;
}

export interface ResumeConfig {
    HEADER: {
        label: string;
    };
    EDUCATION: {
        enabled: boolean;
        label: string;
        items: EducationItem[];
    };
    EXPERIENCE: {
        enabled: boolean;
        label: string;
        items: ExperienceItem[];
    };
    LANGUAGES: {
        enabled: boolean;
        display_progress_bars: boolean;
        display_percentage_values: boolean;
        label: string;
        items: LanguageItem[];
    };
    SKILLS: {
        enabled: boolean;
        display_progress_bars: boolean;
        display_percentage_values: boolean;
        label: string;
        items: SkillItem[];
    };
}

export interface Project {
    title: string;
    category: string;
    image: string;
    url: string;
}

export interface ProjectsConfig {
    HEADER: {
        label: string;
    };
    PROJECTS: Project[];
}

export interface PortfolioConfig {
    profile: ProfileConfig;
    about: AboutConfig;
    navbar: NavbarConfig;
    resume: ResumeConfig;
    projects: ProjectsConfig;
}
