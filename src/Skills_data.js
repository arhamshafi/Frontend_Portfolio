import { DiJavascript1 } from "react-icons/di";
import { FaCss3, FaPuzzlePiece } from "react-icons/fa";
import { MdApi, MdSecurity } from "react-icons/md"; // ✅ CORS alternative
import {
  SiHtml5, SiReact, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiGithub, SiBootstrap, SiMui, SiChartdotjs, SiThreedotjs,
  SiFigma, SiNpm, SiVite, SiReactrouter, SiJquery, SiAxios, SiNetlify, SiVercel, SiExpress,
  SiRedux, SiNextdotjs, SiFramer, SiReacthookform,
} from "react-icons/si";

const skill_icon = [
  { title: "JavaScript", color: "#f0db4f", icon: DiJavascript1 },
  { title: "CSS3", color: "#2965f1", icon: FaCss3 },
  { title: "HTML5", color: "#e34c26", icon: SiHtml5 },
  { title: "React", color: "#61dafb", icon: SiReact },
  { title: "Node.js", color: "#68a063", icon: SiNodedotjs },
  { title: "MongoDB", color: "#10aa50", icon: SiMongodb },
  { title: "Tailwind CSS", color: "#06b6d4", icon: SiTailwindcss },
  { title: "GitHub", color: "#4b5563", icon: SiGithub },         // gray-600
  { title: "BootStrap", color: "#7952b3", icon: SiBootstrap },
  { title: "MUI", color: "#007FFF", icon: SiMui },
  { title: "Chart.js", color: "#ff6384", icon: SiChartdotjs },
  { title: "Three.js", color: "#6b7280", icon: SiThreedotjs },   // gray-500
  { title: "Figma", color: "#a259ff", icon: SiFigma },
  { title: "NPM", color: "#cb3837", icon: SiNpm },
  { title: "Vite", color: "#646cff", icon: SiVite },
  { title: "React Router", color: "#f44250", icon: SiReactrouter },
  { title: "JQuerry", color: "#0769ad", icon: SiJquery },
  { title: "API Integration", color: "#0a9396", icon: MdApi },
  { title: "Axios", color: "#5a29e4", icon: SiAxios },
  { title: "CORS", color: "#ee9b00", icon: MdSecurity },
  { title: "Problem Solving", color: "#3a0ca3", icon: FaPuzzlePiece },
  { title: "Netlify", color: "#00c7b7", icon: SiNetlify },
  { title: "Vercel", color: "#374151", icon: SiVercel },         // gray-700
  { title: "Express.js", color: "#4b5563", icon: SiExpress },    // gray-600
  { title: "Redux", color: "#764abc", icon: SiRedux },
  { title: "Next.js", color: "#1f2937", icon: SiNextdotjs },     // gray-800
  { title: "Framer Motion", color: "#e300ff", icon: SiFramer },
  { title: "React Hook Form", color: "#ec5990", icon: SiReacthookform },
];



export default skill_icon;
