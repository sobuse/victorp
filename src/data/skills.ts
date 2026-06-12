import {
  Bot,
  ClipboardList,
  Code2,
  FolderOpen,
  Settings,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Engineering",
    icon: Settings,
    skills: [
      { name: "Mechanical Engineering", level: 90 },
      { name: "Security Systems", level: 88 },
      { name: "Access Control", level: 85 },
      { name: "CCTV Systems", level: 87 },
    ],
  },
  {
    title: "Project Management",
    icon: ClipboardList,
    skills: [
      { name: "Jira", level: 92 },
      { name: "Trello", level: 88 },
      { name: "Agile", level: 90 },
      { name: "Scrum", level: 88 },
      { name: "Documentation", level: 95 },
    ],
  },
  {
    title: "Software Development",
    icon: Code2,
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 83 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    title: "Information Management",
    icon: FolderOpen,
    skills: [
      { name: "Document Control", level: 95 },
      { name: "Records Management", level: 92 },
      { name: "Technical Documentation", level: 94 },
      { name: "Project Reporting", level: 90 },
    ],
  },
  {
    title: "AI Tools",
    icon: Bot,
    skills: [
      { name: "ChatGPT", level: 90 },
      { name: "Gemini", level: 85 },
      { name: "GitHub Copilot", level: 88 },
    ],
  },
];
