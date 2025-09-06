import type { IconType } from "react-icons";
import {
  FaCss3,
  FaJs,
  FaNode,
  FaPython,
  FaReact,
  FaSwift,
} from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const skills: { name: string; level: number; icon: IconType }[] = [
  { name: "JavaScript", level: 2, icon: FaJs },
  { name: "Python", level: 1, icon: FaPython },
  { name: "React", level: 2, icon: FaReact },
  { name: "Node.js", level: 1, icon: FaNode },
  { name: "CSS", level: 2, icon: FaCss3 },
  { name: "Accessibility", level: 2, icon: IoAccessibility },
  { name: "TypeScript", level: 1, icon: SiTypescript },
  { name: "Swift", level: 0, icon: FaSwift },
];

export { skills };
