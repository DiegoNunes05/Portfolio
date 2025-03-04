import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE, HydrateAction } from 'next-redux-wrapper';

export interface Skill {
  name: string;
  level: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface PortfolioState {
  name: string;
  title: string;
  description: string;
  skills: Skill[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    social: {
      linkedin: string;
      github: string;
    }
  }
}

// Interface para definir a forma do payload do HYDRATE
interface HydratePayload {
  portfolio: PortfolioState;
}

const initialState: PortfolioState = {
  name: 'Your Name',
  title: 'Front-end Developer',
  description: "I'm a user interface designer passionate about creating interactive and intuitive digital experiences.",
  skills: [
    { name: 'HTML/CSS', level: 100 },
    { name: 'TypeScript', level: 90 },
    { name: 'React/Next.js', level: 90 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Redux', level: 90 },
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Redesign',
      description: 'Complete redesign of an online store interface to improve user experience.',
      image: '/images/project1.jpg',
      tags: ['UI/UX', 'React', 'Next.js', 'Tailwind']
    },
    {
      id: '2',
      title: 'Mobile App',
      description: 'Development of a mobile app for a tech startup.',
      image: '/images/project2.jpg',
      tags: ['Mobile', 'React Native', 'UI Design']
    },    
  ],
  contact: {
    email: 'diegonunesabc@gmail.com',
    phone: '+55 (21)99942-7160',
    social: {
      linkedin: 'https://www.linkedin.com/in/diegonsp/',
      github: 'https://github.com/DiegoNunes05',
    }
  }
};

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<PortfolioState>>) => {
      return { ...state, ...action.payload };
    },
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    updateSkill: (state, action: PayloadAction<Skill>) => {
      const index = state.skills.findIndex(skill => skill.name === action.payload.name);
      if (index !== -1) {
        state.skills[index] = action.payload;
      } else {
        state.skills.push(action.payload);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: HydrateAction) => {
      const payload = action.payload as unknown as HydratePayload;

      if (payload && 'portfolio' in payload) {
        return {
          ...state,
          ...payload.portfolio,
        };
      }
      return state;
    });
  },
});

export const { updateProfile, addProject, updateSkill } = portfolioSlice.actions;
export default portfolioSlice.reducer;