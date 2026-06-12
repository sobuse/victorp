export interface Project {
  id: string;
  title: string;
  description: string;
  features?: string[];
  tech: string[];
  demoUrl?: string;
  githubUrl?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "document-control",
    title: "Document Control Management System",
    description:
      "Enterprise platform for managing project documents, revisions, approvals, and audit trails.",
    features: [
      "Version Control",
      "Approval Workflow",
      "Search & Filtering",
      "Document Repository",
      "Audit Logs",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-cyan-500/20 to-slate-700/40",
  },
  {
    id: "project-dashboard",
    title: "Project Information Management Dashboard",
    description:
      "Real-time dashboard for project KPIs, reporting, documentation tracking, and team performance.",
    tech: ["React", "Chart.js", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500/20 to-slate-700/40",
  },
  {
    id: "asset-maintenance",
    title: "Asset Maintenance Management System",
    description:
      "Engineering-focused platform for equipment tracking and maintenance scheduling.",
    tech: ["React", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-emerald-500/20 to-slate-700/40",
  },
  {
    id: "utility-billing",
    title: "Utility Billing Platform",
    description:
      "Customer utility monitoring and payment management solution.",
    tech: ["React", "TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-violet-500/20 to-slate-700/40",
  },
  {
    id: "ai-document-assistant",
    title: "AI Document Assistant",
    description:
      "AI-powered document analysis platform capable of summarizing, extracting actions, and answering questions from uploaded documents.",
    tech: ["React", "OpenAI API", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
    gradient: "from-amber-500/20 to-slate-700/40",
  },
];
