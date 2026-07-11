import { Experience } from "./type";

export const experienceData: Experience[] = [
    {
        id: "1",
        title: "Senior Frontend Engineer",
        company: "Billor",
        location: "Joinville, Santa Catarina",
        startDate: "2025-04-01",
        endDate: "present",
        description: [
            "Billor is a US-based trucking company building its logistics software in-house. I work on the frontend of the TMS (Transportation Management System) used daily by dispatch and operations, and on the public Billor for Brokers platform.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "Next.js",
            "Single-SPA",
            "NestJS",
            "WebSocket / Socket.IO",
            "Mapbox GL",
            "Zod",
            "PostgreSQL",
            "Tailwind CSS",
        ],
        achievements: [
            "Co-built the frontend migration from a monolithic TMS to a microfrontend platform: a Single-SPA shell orchestrating independently deployed React MFEs, each fronted by a NestJS BFF routing to 8+ backend services, with shared Zod contracts as the single source of truth for domain types.",
            "Built the real-time Loadboard: loads stream in over WebSocket with creation, updates and expiry reflected live. Designed the batching and animation strategy so high-frequency data stays readable instead of overwhelming dispatchers, plus market-rate intelligence (GreenScreens) for pricing context on each load.",
            "Built the Truckboard fleet scheduling board — trucks on a timeline with driver hours-of-service, ETAs, deadhead and conflict detection, event CRUD, map integration and inline editing — kept fast at fleet scale via viewport-driven rendering backed by a paginated endpoint that fetches only visible rows.",
            "Led a production-validated frontend rewrite under identical conditions: Lighthouse 40 → 79, TBT 1,650ms → 60ms (−96%), CLS −90%, Speed Index −44%.",
            "Built the public Billor for Brokers fleet map — real-time truck positions (Mapbox GL, timezone-aware), geocoded search and trailer/availability filtering — plus a no-auth public load-tracking page for brokers.",
            "Contribute beyond the frontend to the NestJS BFF layer (endpoints, proxy/rewrite rules) and PostgreSQL migrations when features require it.",
        ],
        logo: "/experience-images/billor-logo.jpeg",
        link: "https://billor.com.br",
        position: true
    },
    {
        id: "2",
        title: "Mid-Level Front-End Developer",
        company: "Disc Rescue Network",
        location: "New Jersey, United States",
        startDate: "2024-01-01",
        endDate: "2025-09-01",
        description: [
            "Built and maintained key application features using React, Next.js, TypeScript, and Shadcn UI. My work included the development of the public-facing disc recovery platform and an administrative dashboard for disc management.",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Redux",
            "Bootstrap"
        ],
        achievements: [
            "Implemented responsive UI components and interactive features",
            "Developed and maintained administrative dashboard with complex data visualization",
            "Optimized application performance and improved Core Web Vitals",
            "Collaborated with cross-functional teams in an agile environment",
        ],
        logo: "/experience-images/disc-rescue-network.png",
        link: "https://discrescuenetwork.com",
        position: false,
        projects: [
            {
                title: "Disc Rescue Platform",
                description: "Public-facing platform for disc recovery services",
                link: "https://github.com/Disc-Rescue-Network/disc-rescue-network/"
            },
            {
                title: "Disc Rescue Admin Dashboard",
                description: "Internal admin tool for disc management and tracking",
                link: "https://github.com/Disc-Rescue-Network/drn-admin-dashboard/"
            },
            {
                title: "Team Challenge App",
                description: "Team collaboration tool for employee engagement",
                link: "https://github.com/Disc-Rescue-Network/team-challenge-app/"
            }
        ]
    },
    {
        id: "3",
        title: "Front-End Developer",
        company: "Vortex Digital Enterprises",
        location: "Remote",
        startDate: "2024-08-01",
        endDate: "2025-09-01",
        description: [
            "Built and maintained key application features using React, Next.js, TypeScript, and Rest API. Focused on creating efficient and scalable e-commerce solutions.",
        ],
        technologies: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Rest API",
            "Tailwind CSS",
            "Bootstrap",
            "Node.js"
        ],
        achievements: [
            "Developed responsive and interactive user interfaces",
            "Implemented complex data visualization features",
            "Optimized application performance and user experience",
            "Worked with international team in an agile environment"
        ],
        logo: "/experience-images/vortex.png",
        link: "#",
        position: false,
        projects: [
            {
                title: "Tropical Bliss Wholesale Portal",
                description: "B2B platform for wholesale tropical products",
                link: "https://github.com/Disc-Rescue-Network/tropical-bliss-wholesale-portal"
            },
            {
                title: "Sales Portal",
                description: "Internal sales management and analytics platform",
                link: "https://github.com/Disc-Rescue-Network/sales-portal"
            }
        ]
    },
    {
        id: "4",
        title: "Front-End Developer",
        company: "Aglet Digital",
        location: "Rio de Janeiro, Brazil",
        startDate: "2023-03-01",
        endDate: "2023-04-01",
        description: [
            "Started my career as a Front-End Intern, developing over 80 web pages and focusing on improving user experience and optimizing web systems.",
        ],
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap",
            "JavaScript",
            "jQuery",
        ],
        achievements: [
            "Created and updated over 80 pages using Bootstrap to enhance user experience and optimize web systems.",
            "Integrated interactive features with JavaScript and VB (Visual Basic) for dynamic content manipulation and improved functionality.",
            "Developed reusable components and responsive layouts, ensuring consistent design and accessibility across devices.",
        ],
        logo: "/experience-images/aglet-digital-logo.jpeg",
        link: "https://aglet.com.br",
        position: false
    },
];
