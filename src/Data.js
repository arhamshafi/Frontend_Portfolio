// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "ARHAFI Platform",
    category: "E-Commerce",
    description:
      "Modern business platform for sellers and students with product verification system, dropshipping support, and scalable architecture.",
    fullDescription:
      "ARHAFI is a full-stack business ecosystem designed for modern digital sellers. It includes product verification before publishing, dropshipping automation support, and a multi-role system for sellers and students. Built with scalability in mind using Next.js, Node.js, Redux Toolkit, and NestJS.",
    tech: ["Next.js", "Node.js", "Redux Toolkit", "Nest.js"],
    features: [
      "Automated product verification system",
      "Dropshipping workflow integration",
      "Seller & student role management",
      "Clean business documentation system",
      "Scalable architecture design"
    ],
    status: "In Development",
    liveLink: null,
    githubLink: null,
    image: "/arhafi.webp"
  },
  {
    id: 2,
    title: "China Home",
    category: "E-Commerce",
    description:
      "Sanitary e-commerce platform with Redux Toolkit state management and full product catalog system.",
    fullDescription:
      "China Home is a complete e-commerce platform for sanitary products featuring a structured product catalog, cart system, and advanced Redux Toolkit state management. Designed with a clean UI and optimized for real-world business use.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
    features: [
      "Dynamic product catalog system",
      "Redux Toolkit state management",
      "Shopping cart functionality",
      "Responsive UI design",
      "Business-focused interface"
    ],
    status: "In Development",
    liveLink: null,
    githubLink: null,
    image: "/china.webp"
  },
  {
    id: 3,
    title: "Adam Palace",
    category: "Web Application",
    description:
      "React-based web application with structured architecture and API-driven dynamic content.",
    fullDescription:
      "Adam Palace is a modern React web application built with a clean architecture and API integration. It uses Context API for state handling and delivers optimized performance with a smooth user experience.",
    tech: ["React.js", "Express.js", "Context API"],
    features: [
      "API-driven dynamic content",
      "Clean and structured UI",
      "Optimized frontend architecture",
      "Fully responsive layout",
      "Performance-focused design"
    ],
    status: "Completed",
    liveLink: null,
    githubLink: null,
    image: "/adam.webp"
  },
  {
    id: 4,
    title: "Foodie App",
    category: "Creative UI",
    description:
      "Creative food application with 3D elements, smooth animations, and modern UI/UX design.",
    fullDescription:
      "Foodie App is a visually rich modern UI project featuring 3D model integration, smooth animations, and immersive user experience. Built with React, Three.js, Framer Motion, and Tailwind CSS.",
    tech: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    features: [
      "Interactive 3D model integration",
      "Smooth UI animations",
      "Modern creative interface",
      "Fully responsive design",
      "High-performance rendering"
    ],
    status: "Completed",
    liveLink: null,
    githubLink: null,
    image: "/foodie.webp"
  }
];

// Skills Data
export const skillsData = {
  frontend: [
    { name: "HTML", level: 95, icon: "🌐" },
    { name: "CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 88, icon: "📜" },
    { name: "React.js", level: 85, icon: "⚛️" },
    { name: "Next.js", level: 80, icon: "▲" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 82, icon: "🚂" },
    { name: "NestJS", level: 75, icon: "🧱" },
    { name: "REST APIs", level: 88, icon: "🔌" },
    { name: "MongoDB", level: 80, icon: "🍃" },
  ],
  tools: [
    { name: "Git", level: 80, icon: "🔧" },
    { name: "GitHub", level: 88, icon: "🐙" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📮" }
  ]
};

// Services Data
export const servicesData = [
  {
    title: "Full Stack Development",
    description:
      "Building complete web applications using MERN stack with clean architecture and real-world project structure.",
    icon: "🚀",
    highlights: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js"
    ]
  },
  {
    title: "Frontend Development",
    description:
      "Creating modern, responsive and interactive user interfaces using React and Tailwind CSS.",
    icon: "💎",
    highlights: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
    ]
  },
  {
    title: "Backend Development",
    description:
      "Developing secure and scalable backend systems with APIs, authentication and database integration.",
    icon: "⚡",
    highlights: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB"
    ]
  },
  {
    title: "API Integration & Database",
    description:
      "Handling API integrations and database operations for dynamic and data-driven applications.",
    icon: "🔄",
    highlights: [
      "REST APIs",
      "MongoDB",
      "CRUD Operations",
      "Authentication"
    ]
  }
];

export default projectsData;