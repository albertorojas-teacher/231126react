import type { Developer } from "../types/developers";

export const developers: Developer[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    role: "Frontend",
    skills: ["Mongo", "HTML", "CSS", "Javascript"],
    available: true,
  },
  {
    id: 2,
    name: "Angel Caridad",
    role: "Backend",
    skills: ["Mongo", "Diseño", "HTML", "CSS", "JS"],
    available: true,
  },
  {
    id: 3,
    name: "Alberto Rojas",
    role: "Full Stack",
    skills: ["Cocinar", "Desarrollo", "React", "VUEJS"],
    available: false,
  },
];
