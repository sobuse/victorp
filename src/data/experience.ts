import {
  Briefcase,
  Code2,
  Shield,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  icon: LucideIcon;
  responsibilities: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: "Mechanical Engineer",
    company: "Automedics Nigeria",
    period: "2014–2015",
    icon: Wrench,
    responsibilities: [
      "Performed mechanical diagnostics and repair on automotive systems",
      "Maintained technical documentation for service operations",
      "Collaborated with workshop teams to improve repair turnaround time",
    ],
  },
  {
    title: "Security Engineer",
    company: "MapleSoft Engineering",
    period: "2016–2018",
    icon: Shield,
    responsibilities: [
      "Designed and installed access control and CCTV security systems",
      "Conducted site surveys and prepared technical specifications",
      "Managed client relationships and project handover documentation",
    ],
  },
  {
    title: "Security Engineer",
    company: "Kontz Engineering",
    period: "2018–2021",
    icon: Shield,
    responsibilities: [
      "Led security system installations across commercial facilities",
      "Coordinated field teams and vendor supply chains",
      "Developed maintenance schedules and incident response protocols",
    ],
  },
  {
    title: "Project Manager / Junior Software Developer",
    company: "Touch And Pay Technologies",
    period: "2021–2024",
    icon: Briefcase,
    responsibilities: [
      "Managed agile software projects from planning through delivery",
      "Built and maintained React-based web applications",
      "Coordinated cross-functional teams and stakeholder reporting",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Nexora Digital Lab",
    period: "2024–Present",
    icon: Code2,
    responsibilities: [
      "Develops full-stack applications with React, TypeScript, and Node.js",
      "Implements document control and information management solutions",
      "Integrates AI tools to improve workflow automation and productivity",
    ],
  },
];
