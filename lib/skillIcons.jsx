// Maps a skill name (as written in content.js) to a brand icon + color.
// Anything not listed here falls back to a lettered badge, so you can add
// skills freely without breaking the marquee.
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiDocker,
  SiVercel,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbDatabase, TbShieldLock } from "react-icons/tb";

export const skillIcons = {
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#4B8BBE" },
  SQL: { icon: TbDatabase, color: "#F7B5D0" },
  Java: { icon: FaJava, color: "#E76F00" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#F4E9F0" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38BDF8" },
  "Framer Motion": { icon: SiFramer, color: "#B24BF3" },
  "HTML/CSS": { icon: SiHtml5, color: "#E34F26" },
  "Node.js": { icon: SiNodedotjs, color: "#3C873A" },
  Express: { icon: SiExpress, color: "#F4E9F0" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  "REST APIs": { icon: TbApi, color: "#F7B5D0" },
  "Auth / JWT": { icon: TbShieldLock, color: "#FF6FA5" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Prisma: { icon: SiPrisma, color: "#FF6FA5" },
  Git: { icon: SiGit, color: "#F05032" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Vercel: { icon: SiVercel, color: "#F4E9F0" },
};
