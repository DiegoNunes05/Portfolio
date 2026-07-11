"use client";

import {SlideUpAnimation} from "./SlideUpAnimation";

const skillCategories = [
  {
    category: "Frameworks",
    skills: ["React.js", "Next.js", "React Native", "Vue.js"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Node.js", "SQL"],
  },
  {
    category: "Styling & UI",
    skills: ["Tailwind CSS", "Shadcn/UI", "Bootstrap", "Sass/SCSS"],
  },
  {
    category: "State & Data",
    skills: ["Redux", "React Query", "Context API", "Zustand"],
  },
];

const capabilities = [
  {
    title: "Modern Front-End",
    items: [
      "React.js & React Native",
      "Next.js — SSR / SSG / ISR",
      "Vue.js & Nuxt.js",
      "TypeScript & JavaScript",
    ],
  },
  {
    title: "Real-Time & Data",
    items: [
      "WebSocket / Socket.IO",
      "Data-heavy dashboards",
      "Mapbox GL interfaces",
      "REST & GraphQL APIs",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Micro-frontend architecture",
      "Design systems & Storybook",
      "Reusable component design",
      "Scalable state management",
    ],
  },
  {
    title: "Performance",
    items: [
      "Core Web Vitals",
      "Lazy loading & code splitting",
      "SEO optimization",
      "Responsive & adaptive UI",
    ],
  },
  {
    title: "Tooling & Workflow",
    items: [
      "Git & GitHub",
      "CI/CD — GitHub Actions",
      "Docker, Webpack, Vite",
      "Testing — Jest, RTL, Cypress",
    ],
  },
  {
    title: "Back-End Knowledge",
    items: [
      "Node.js & Express",
      "Firebase & Supabase",
      "RESTful APIs",
      "GraphQL",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="expertise"
      className="w-full scroll-mt-24 border-t border-hairline bg-graphite/30 py-28 md:py-40"
    >
      <div className="container">
        <SlideUpAnimation>
          <div className="mb-16 flex items-center gap-4">
            <span className="font-display text-lg text-gold">04</span>
            <span className="rule" />
            <p className="eyebrow">Expertise</p>
          </div>
        </SlideUpAnimation>

        {/* Core stacks — big typographic rows */}
        <div className="grid gap-px overflow-hidden border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, i) => (
            <SlideUpAnimation key={cat.category} delay={80 * (i + 1)}>
              <div className="h-full bg-background p-8">
                <h3 className="font-ui text-[11px] uppercase tracking-[0.16em] text-gold">
                  {cat.category}
                </h3>
                <ul className="mt-6 space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="font-display text-xl font-light text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUpAnimation>
          ))}
        </div>

        {/* Capabilities */}
        <SlideUpAnimation delay={200}>
          <h3 className="mb-10 mt-24 font-display text-[clamp(28px,4vw,44px)] font-light tracking-[-0.01em]">
            Technical capabilities
          </h3>
        </SlideUpAnimation>
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <SlideUpAnimation key={cap.title} delay={80 * (i + 1)}>
              <div className="border-t border-hairline pt-6">
                <h4 className="font-display text-xl">{cap.title}</h4>
                <ul className="mt-5 space-y-2.5">
                  {cap.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-sans text-sm text-silver"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-px w-3 flex-shrink-0 bg-gold"
                      />
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
