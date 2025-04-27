export type Project = {
  link: string;
    title: string;
    description: string;
};

export type Experience = {
    id: string;
    logo: string;
    link: string;
    title: string;
    company: string;
    endDate: string;
    location: string;
    position: boolean;
    startDate: string;
    projects?: Project[];
    description: string[];
    technologies: string[];
    achievements: string[];
};

export interface ExperienceSection {
  title: string;
  experiences: Experience[];
} 