// Projects Data
export const projectsData = [
  {
    id: 1,
    title: "ARHAFI Platform",
    category: "Full Stack",
    description: "Complete business platform for sellers and students with product verification, dropshipping support, and clean documentation. Currently in active development.",
    fullDescription: "A comprehensive business platform that enables online product selling with built-in verification system before publishing. Features dropshipping system support and user-friendly design focused on business needs.",
    tech: ["Next.js", "Node.js", "MongoDB", "Express.js", "Redux Toolkit"],
    features: [
      "Product verification system",
      "Dropshipping integration",
      "Seller & student management",
      "Clean documentation",
      "Business-oriented UI"
    ],
    status: "In Development",
    liveLink: null,
    githubLink: null,
    image: null
  },
  {
    id: 2,
    title: "China Home",
    category: "E-Commerce",
    description: "E-commerce platform for sanitary store with Redux Toolkit state management and comprehensive product catalog system.",
    fullDescription: "Full-featured e-commerce sanitary store platform with advanced state management using Redux Toolkit. Includes product catalog, cart system, and business-focused UI design.",
    tech: ["React.js", "Redux Toolkit", "Node.js", "MongoDB"],
    features: [
      "Product catalog system",
      "Redux state management",
      "Shopping cart functionality",
      "Business-oriented interface",
      "Responsive design"
    ],
    status: "Completed",
    liveLink: null,
    githubLink: null,
    image: null
  },
  {
    id: 3,
    title: "Adam Palace",
    category: "Web Application",
    description: "React-based web application with content API integration and structured frontend architecture.",
    fullDescription: "Modern web application built with React featuring clean UI design and efficient API integration for dynamic content management.",
    tech: ["React.js", "REST API", "CSS3"],
    features: [
      "Content API integration",
      "Clean UI design",
      "Structured frontend",
      "Responsive layout",
      "Performance optimized"
    ],
    status: "Completed",
    liveLink: null,
    githubLink: null,
    image: null
  },
  {
    id: 4,
    title: "Foodie App",
    category: "Creative UI",
    description: "Highly creative food application with 3D model integration and unique frontend design focused on modern UI/UX.",
    fullDescription: "Innovative food application featuring 3D model integration and creative frontend design. Fully responsive across all devices with focus on exceptional user experience.",
    tech: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    features: [
      "3D model integration",
      "Creative UI/UX design",
      "Fully responsive",
      "Smooth animations",
      "Modern interface"
    ],
    status: "Completed",
    liveLink: null,
    githubLink: null,
    image: null
  }
];

// Skills Data
export const skillsData = {
  frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 88, icon: "📜" },
    { name: "HTML/CSS", level: 95, icon: "🌐" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 82, icon: "🚂" },
    { name: "REST APIs", level: 88, icon: "🔌" },
    { name: "MongoDB", level: 80, icon: "🍃" }
  ],
  stateManagement: [
    { name: "Redux Toolkit", level: 85, icon: "🔄" },
    { name: "Context API", level: 90, icon: "📦" }
  ],
  tools: [
    { name: "Git/GitHub", level: 88, icon: "🔧" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Postman", level: 85, icon: "📮" }
  ]
};

// Services Data
export const servicesData = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development using MERN stack with modern best practices and scalable architecture.",
    icon: "🚀",
    highlights: ["MERN Stack", "Next.js", "Redux Toolkit", "REST APIs"]
  },
  {
    title: "Frontend Development",
    description: "Building responsive, performant user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "💎",
    highlights: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Express, and MongoDB for scalable applications.",
    icon: "⚡",
    highlights: ["Node.js", "Express.js", "MongoDB", "API Design"]
  },
  {
    title: "State Management",
    description: "Complex state management solutions using Redux Toolkit and Context API for enterprise applications.",
    icon: "🔄",
    highlights: ["Redux Toolkit", "Context API", "Data Flow", "Performance"]
  }
];

export default projectsData;