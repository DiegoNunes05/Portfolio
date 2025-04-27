import { Experience } from "./type";

export const experienceData: Experience[] = [
    {
        id: "1",
        title: "Front-End Developer",
        company: "Billor",
        location: "Joinville, Santa Catarina",
        startDate: "2025-04-01",
        endDate: "present",
        description: [
            "Working as a Front-End Developer, building and maintaining modern web applications using cutting-edge technologies and best practices.",
        ],
        technologies: [
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "React.js",
        ],
        achievements: [
            "Development and maintenance of the TMS (Transportation Management System), implementing continuous improvements to the interface and user experience.",
            "Efficient integration between back-end and front-end using HTTP requests and WebSocket for real-time communication, allowing instant visualization of critical data.",
            "Collaboration in enhancing interactive dashboards for company teams, displaying the best cargo options based on customizable criteria.",
            "Implementation of advanced filtering systems by trailer type, distances, and values, optimizing the decision-making process.",
            "Front-end architecture based on micro services, ensuring scalability and simplified component maintenance.",
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
        endDate: "",
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
        position: true,
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
        startDate: "2024-06-01",
        endDate: "",
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
        position: true,
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
