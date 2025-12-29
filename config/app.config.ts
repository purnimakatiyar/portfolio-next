import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  Smartphone,
  BotIcon
} from 'lucide-react';


export const HERO = {
  title: "Full Stack Developer",
  subtitle: "Building exceptional digital experiences with modern technologies",

  cta: {
    primary: {
      label: "Get In Touch",
      href: "#contact",
    },
    secondary: {
      label: "View Work",
      href: "#projects",
    },
  },

  socials: [
    { icon: Github, href: "https://github.com/purnimakatiyar" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/purnima-katiyar-6a1a92134/" },
    { icon: Mail, href: "purnimakatiyar48@gmail.com" },
  ],

  blobs: {
    count: 50,
    minSize: 50,
    maxSize: 350,
    animationOffset: 50,
    minDuration: 10,
    maxDuration: 20,
  },
};


export const ABOUT = {
  heading: "About Me",
  emoji: "👨‍💻",
  paragraphs: [
    "I'm a passionate full-stack developer with expertise in building scalable web applications primarily in backend.",
    "My journey in tech started with curiosity and evolved into building real-world solutions users love.",
  ],
  highlights: [
    "1.5+ Years Experience",
    "10+ Projects",
    "95% Client Satisfaction",
  ],
};


export const SKILLS = {
  heading: "Skills & Technologies",

  categories: [
    {
      title: "Frontend",
      icon: Code,
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      items: ["Python", "Django", "FastAPI", "RestAPI"],
    },
    {
      title: "Database",
      icon: Database,
      items: ["PostgreSQL", "MySQL", "DynamoDB", "Supabase"],
    },
    {
      title: "Tools",
      icon: Smartphone,
      items: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Jenkins"],
    },
    {
      title: "AI",
      icon: BotIcon,
      items: ["OpenAI", "Gemini", "Claude", "Cursor"],
    },
  ],

  animation: {
    cardHover: { scale: 1.05, rotate: 2 },
    skillBar: {
      initial: { width: 0 },
      whileInView: { width: "100%" },
      transition: { duration: 0.5 },
    },
  },
};


export const PROJECTS = {
  heading: "Featured Projects",

  items: [
    {
      title: "Book My Event",
      description:
        "Full-stack event management system with role based access along with event management features.",
      tech: ["Python", "Flask", "SQLite", "Angular", "NgPrime"],
      image: "📊",
      link: "#",
    },
  ],

  animation: {
    cardHover: { y: -10 },
    overlay: {
      initial: { scale: 0, borderRadius: "100%" },
      whileHover: { scale: 2, borderRadius: "0%" },
      transition: { duration: 0.5 },
    },
  },
};


export const CONTACT = {
  heading: "Let's Work Together",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",

  methods: [
    {
      icon: Mail,
      text: "purnimakatiyar48@gmail.com",
      href: "mailto:purnimakatiyar48@gmail.com",
    },
    {
      icon: Github,
      text: "github.com/purnimakatiyar",
      href: "https://github.com/purnimakatiyar",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/purnima-katiyar-6a1a92134/",
      href: "https://linkedin.com/in/purnima-katiyar-6a1a92134/",
    },
  ],

  cta: {
    label: "Send Me a Message",
    href: "mailto:purnimakatiyar48@gmail.com",
  },
};


export const NAVIGATION = {
  brand: "Purnima Katiyar",

  items: ["home", "about", "skills", "projects", "contact"],

  animation: {
    brand: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
    },

    menuItem: {
      whileHover: { scale: 1.05 },
      whileTap: { scale: 0.95 },
    },

    mobileMenu: {
      initial: { opacity: 0, height: 0 },
      animate: { opacity: 1, height: "auto" },
      exit: { opacity: 0, height: 0 },
    },
  },
};
