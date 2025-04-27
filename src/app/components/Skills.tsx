"use client";

import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import { Star } from "lucide-react";
import { SlideUpAnimation } from "./SlideUpAnimation";
import {
  BootstrapIcon,
  CICDIcon,
  CodeSplittingIcon,
  ContextIcon,
  DockerIcon,
  FirebaseIcon,
  GitIcon,
  GraphQLIcon,
  NextJsIcon,
  NodeIcon,
  PerformanceIcon,
  ReactIcon,
  ReduxIcon,
  ResponsiveDesignIcon,
  RestAPIIcon,
  SassIcon,
  SEOIcon,
  ShadcnIcon,
  TailwindIcon,
  TestingIcon,
  TypeScriptIcon,
  VueIcon,
  ZustandIcon,
} from "./icons/IconsSkill";

const skillCategories = [
  {
    category: "Front-End Frameworks",
    skills: [
      {name: "React.js", rating: 5},
      {name: "Next.js", rating: 5},
      {name: "React Native", rating: 5},
      {name: "Vue.js", rating: 5},
    ],
  },
  {
    category: "Core Languages",
    skills: [
      {name: "Node.js", rating: 5},
      {name: "JavaScript", rating: 5},
      {name: "TypeScript", rating: 5},
      {name: "SQL", rating: 4},
    ],
  },
  {
    category: "CSS Frameworks",
    skills: [
      {name: "Tailwind CSS", rating: 5},
      {name: "Shadcn/UI", rating: 5},
      {name: "Bootstrap", rating: 5},
      {name: "Sass/SCSS", rating: 4},
    ],
  },
  {
    category: "State Management",
    skills: [
      {name: "Redux", rating: 5},
      {name: "Context API", rating: 5},
      {name: "Zustand", rating: 4},
      {name: "Recoil", rating: 3},
    ],
  },
];

const SkillRating = ({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating?: number;
}) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <span key={i} className="text-yellow-500">
          {i < rating ? (
            <Star className="w-5 h-5 fill-yellow-500 text-yellow-500" />
          ) : (
            <Star className="w-5 h-5" />
          )}
        </span>
      ))}
    </div>
  );
};

// Componente de ícone com texto
const IconItem = ({icon, text}: {icon: React.ReactNode; text: string}) => (
  <li className="flex items-center gap-2 mb-2">
    <span className="text-blue-500 flex-shrink-0">{icon}</span>
    <span className="text-sm text-gray-700">{text}</span>
  </li>
);

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <SlideUpAnimation>
          <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        </SlideUpAnimation>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <SlideUpAnimation key={category.category} delay={100 * (index + 1)}>
              <Card className="card-type">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex justify-between items-center"
                    >
                      <span className="font-medium">{skill.name}</span>
                      <SkillRating rating={skill.rating} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </SlideUpAnimation>
          ))}
        </div>

        <SlideUpAnimation delay={500}>
          <div className="mt-12 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-bold mb-4">Technical Expertise</h3>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
              <SlideUpAnimation delay={600}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">Modern Front-End</h4>
                  <ul className="space-y-1">
                    <IconItem icon={<ReactIcon />} text="React.js & React Native" />
                    <IconItem icon={<NextJsIcon />} text="Next.js (SSR/SSG/ISR)" />
                    <IconItem icon={<VueIcon />} text="Vue.js & Nuxt.js" />
                    <IconItem
                      icon={<TypeScriptIcon />}
                      text="TypeScript & JavaScript"
                    />
                  </ul>
                </div>
              </SlideUpAnimation>

              <SlideUpAnimation delay={700}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">Styling & UI</h4>
                  <ul className="space-y-1">
                    <IconItem
                      icon={<TailwindIcon />}
                      text="Tailwind CSS & Shadcn/UI"
                    />
                    <IconItem icon={<BootstrapIcon />} text="Bootstrap & SASS" />
                    <IconItem
                      icon={<ShadcnIcon />}
                      text="Design Systems with Storybook"
                    />
                    <IconItem
                      icon={<SassIcon />}
                      text="Responsive & Adaptive Design"
                    />
                  </ul>
                </div>
              </SlideUpAnimation>

              <SlideUpAnimation delay={800}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">State Management</h4>
                  <ul className="space-y-1">
                    <IconItem icon={<ReduxIcon />} text="Redux & Redux Toolkit" />
                    <IconItem icon={<ContextIcon />} text="Context API" />
                    <IconItem icon={<ZustandIcon />} text="Zustand & Recoil" />
                    <IconItem
                      icon={<GraphQLIcon />}
                      text="Apollo Client (GraphQL)"
                    />
                  </ul>
                </div>
              </SlideUpAnimation>

              <SlideUpAnimation delay={900}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">Performance</h4>
                  <ul className="space-y-1">
                    <IconItem
                      icon={<PerformanceIcon />}
                      text="Core Web Vitals optimization"
                    />
                    <IconItem
                      icon={<CodeSplittingIcon />}
                      text="Lazy Loading & Code Splitting"
                    />
                    <IconItem icon={<SEOIcon />} text="SEO Optimization" />
                    <IconItem
                      icon={<ResponsiveDesignIcon />}
                      text="Responsive Design"
                    />
                  </ul>
                </div>
              </SlideUpAnimation>

              <SlideUpAnimation delay={1000}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">Tools & Workflow</h4>
                  <ul className="space-y-1">
                    <IconItem icon={<GitIcon />} text="Git & GitHub" />
                    <IconItem icon={<CICDIcon />} text="CI/CD (GitHub Actions)" />
                    <IconItem icon={<DockerIcon />} text="Docker & Webpack/Vite" />
                    <IconItem
                      icon={<TestingIcon />}
                      text="Testing (Jest, RTL, Cypress)"
                    />
                  </ul>
                </div>
              </SlideUpAnimation>

              <SlideUpAnimation delay={1100}>
                <div className="bg-gray-50 p-4 rounded-md card-type">
                  <h4 className="font-semibold mb-2">Back-End Knowledge</h4>
                  <ul className="space-y-1">
                    <IconItem icon={<NodeIcon />} text="Node.js & Express" />
                    <IconItem icon={<FirebaseIcon />} text="Firebase & Supabase" />
                    <IconItem icon={<RestAPIIcon />} text="RESTful APIs" />
                    <IconItem icon={<GraphQLIcon />} text="GraphQL" />
                  </ul>
                </div>
              </SlideUpAnimation>
            </div>
          </div>
        </SlideUpAnimation>
      </div>
    </section>
  );
}
