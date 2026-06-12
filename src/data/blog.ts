export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "document-control-project-success",
    title: "How Document Control Improves Project Success",
    excerpt:
      "Explore how structured document control reduces errors, improves accountability, and accelerates project delivery across engineering teams.",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Information Management",
  },
  {
    slug: "ai-information-management",
    title: "Using AI for Information Management",
    excerpt:
      "Discover practical ways to integrate AI tools like ChatGPT and Copilot into your document workflows for faster insights and better decisions.",
    date: "2025-10-28",
    readTime: "5 min read",
    category: "AI & Technology",
  },
  {
    slug: "engineering-lessons-software",
    title: "Engineering Lessons Applied to Software Development",
    excerpt:
      "How principles from mechanical and security engineering—precision, documentation, and systematic thinking—translate to better software.",
    date: "2025-09-12",
    readTime: "7 min read",
    category: "Engineering",
  },
  {
    slug: "modern-project-coordination",
    title: "Modern Project Coordination Best Practices",
    excerpt:
      "A guide to agile project coordination that bridges technical teams and business stakeholders for transparent, efficient delivery.",
    date: "2025-08-05",
    readTime: "8 min read",
    category: "Project Management",
  },
];
