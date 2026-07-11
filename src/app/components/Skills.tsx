"use client";

import {SlideUpAnimation} from "./SlideUpAnimation";

const skillCategories = [
  {category: "Frameworks", skills: ["React.js", "Next.js", "React Native", "Vue.js"]},
  {category: "Languages", skills: ["TypeScript", "JavaScript", "Node.js", "SQL"]},
  {category: "Styling & UI", skills: ["Tailwind CSS", "Shadcn/UI", "Bootstrap", "Sass"]},
  {category: "State & Data", skills: ["Redux", "React Query", "Context API", "Zustand"]},
];

const capabilities = [
  {
    title: "Modern Front-End",
    items: ["React.js & React Native", "Next.js — SSR / SSG / ISR", "Vue.js & Nuxt.js", "TypeScript & JavaScript"],
  },
  {
    title: "Real-Time & Data",
    items: ["WebSocket / Socket.IO", "Data-heavy dashboards", "Mapbox GL interfaces", "REST & GraphQL APIs"],
  },
  {
    title: "Architecture",
    items: ["Micro-frontend architecture", "Design systems & Storybook", "Reusable component design", "Scalable state management"],
  },
  {
    title: "Performance",
    items: ["Core Web Vitals", "Lazy loading & code splitting", "SEO optimization", "Responsive & adaptive UI"],
  },
  {
    title: "Tooling & Workflow",
    items: ["Git & GitHub", "CI/CD — GitHub Actions", "Docker, Webpack, Vite", "Testing — Jest, RTL, Cypress"],
  },
  {
    title: "Back-End Knowledge",
    items: ["Node.js & Express", "Firebase & Supabase", "RESTful APIs", "GraphQL"],
  },
];

export function Skills() {
  return (
    <section id="expertise" className="w-full scroll-mt-24 py-24 md:py-32">
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-14">
            <p className="eyebrow mb-4">{"// Expertise"}</p>
            <h2 className="display text-[clamp(32px,5vw,56px)]">
              Skills &amp; capabilities
            </h2>
          </div>
        </SlideUpAnimation>

        {/* Core stacks */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <SlideUpAnimation key={cat.category} delay={70 * (i + 1)} className="h-full">
              <div className="card h-full p-6">
                <h3 className="font-mono text-[12px] text-accent">{cat.category}</h3>
                <ul className="mt-4 space-y-2.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-[15px] font-medium text-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <SlideUpAnimation key={cap.title} delay={60 * (i + 1)} className="h-full">
              <div className="card h-full p-6">
                <h4 className="text-[15px] font-semibold tracking-tight">{cap.title}</h4>
                <ul className="mt-4 space-y-2">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13.5px] text-muted">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
