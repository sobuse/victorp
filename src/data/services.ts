import {
  Bot,
  Code2,
  FileText,
  FolderKanban,
  Settings,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Engineering Support",
    description:
      "Technical expertise in mechanical and security engineering systems, from design through implementation.",
    icon: Settings,
  },
  {
    title: "Project Coordination",
    description:
      "End-to-end project management using agile methodologies, ensuring on-time and on-budget delivery.",
    icon: Users,
  },
  {
    title: "Document Control",
    description:
      "Structured document management with version control, approval workflows, and audit compliance.",
    icon: FileText,
  },
  {
    title: "Information Management",
    description:
      "Organizing, storing, and retrieving critical project information for operational excellence.",
    icon: FolderKanban,
  },
  {
    title: "Software Development",
    description:
      "Building modern web applications with React, TypeScript, and Node.js for enterprise needs.",
    icon: Code2,
  },
  {
    title: "AI Solutions",
    description:
      "Leveraging AI tools to automate workflows, analyze documents, and improve decision-making.",
    icon: Bot,
  },
];
