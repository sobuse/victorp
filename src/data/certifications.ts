import { Award, GraduationCap, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Certification {
  title: string;
  subtitle: string;
  institution: string;
  icon: LucideIcon;
  status: "completed" | "upcoming";
}

export const certifications: Certification[] = [
  {
    title: "Bachelor of Science",
    subtitle: "Mechanical Engineering",
    institution: "Ladoke Akintola University of Technology",
    icon: GraduationCap,
    status: "completed",
  },
  {
    title: "Software & AI Bootcamp",
    subtitle: "Full-Stack Development & AI Integration",
    institution: "Nexora Digital Lab Academy",
    icon: Award,
    status: "completed",
  },
  {
    title: "Future Certifications",
    subtitle: "Cloud, DevOps & Advanced AI",
    institution: "Professional Development Track",
    icon: Sparkles,
    status: "upcoming",
  },
];
