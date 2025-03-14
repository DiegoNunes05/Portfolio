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
  images: string[];  // Alterado para um array de strings
  tags: string[];
  link: string;
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
  name: 'Diego Nunes',
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
      title: 'Tropical Bliss Wholesale Portal',
      description: 'Complete redesign of an online store interface to improve user experience.',
      images: [
        '/projects/tropical.png',
        '/projects/tropical-2.png'
      ],
      tags: ['UI/UX', 'React', 'Next.js', 'Tailwind'],
      link: "https://tropical-bliss-wholesale-portal.vercel.app/",
    },
    {
      id: '2',
      title: 'Disc Rescue Network',
      description: 'Development of a mobile app for a tech startup.',
      images: [
        '/projects/disc-rescue.png',
        '/projects/disc-rescue-2.png'
      ],
      tags: ['Next.js', 'Typescript', 'UI Design'],
      link: "https://app.discrescuenetwork.com/"
    },
    {
      id: '3',
      title: 'DRN Admin Dashboard',
      description: 'Development of a dashboard for a tech startup.',
      images: [
        '/projects/dashboard.png',
        '/projects/dashboard-2.png',
        '/projects/dashboard-3.png',
        '/projects/dashboard-4.png',
        '/projects/dashboard-5.png',
        '/projects/dashboard-6.png'
      ],
      tags: ['Next.js', 'Typescript', 'Shadcn/ui'],
      link: "https://drn-demo-admin-dashboard.vercel.app/"
    },
    {
      id: '4',
      title: 'Fake Book Store',
      description: 'A fake store, made just to train RestAPI and Design',
      images: [
        '/projects/fake-book-store.png',
        '/projects/fake-book-store-2.png',
        '/projects/fake-book-store-3.png',
        '/projects/fake-book-store-4.png',
        '/projects/fake-book-store-5.png',
      ],
      tags: ['Next.js', 'Typescript', 'Shadcn/ui', 'Rest API'],
      link: "https://fake-book-store-a85mmqoj6-diegonunes05s-projects.vercel.app/"
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