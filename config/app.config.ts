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
      title: "ResolveAI",
      description:
        "Full-stack tickets resolver system with dashboard analytics and automation of drafts creation.",
      tech: ["Python", "FastAPI", "Supabase", "Next.js", "PostgreSQL", "Gemini"],
      image: "📱",
      link: "https://github.com/purnimakatiyar/ResolveAI",
    },
    {
      title: "Book My Event",
      description:
        "A fully-fledged, production-style event management platform featuring seamless role-based access control, end-to-end event workflows, dynamic scheduling etc. Designed to deliver a smooth user experience across admin, manager, and customers.",
      tech: ["Python", "Flask", "SQLite", "Angular", "NgPrime"],
      image: "🎟️",
      link: "https://github.com/purnimakatiyar/Bookmyevent-v3",
    },
    {
      title: "ATM System",
      description:
        "A high-fidelity command-line ATM simulation that mirrors real banking operations—secure authentication, balance inquiry, withdrawals, deposits, and transaction tracking—built on a clean, modular MVC architecture for maintainability and clarity.",
      tech: ["Python", "SQLite", "MVC"],
      image: "🏦",
      link: "https://github.com/purnimakatiyar/API-ATM",
    },
    {
      title: "Ace Learntech",
      description:
        "A modern, responsive online learning platform built with React, offering intuitive navigation, modular course content, interactive UI components, and a smooth learner-first experience optimized for performance.",
      tech: ["React", "JavaScript"],
      image: "🎓",
      link: "https://acelearntech.netlify.app/",
    },
    {
      title: "Agrotech Assistant",
      description:
        "A smart agriculture support system empowering farmers with crop insights, weather-based recommendations, and resource guidance. Built with Django to ensure reliable data handling, scalability, and fast responses.",
      tech: ["Django", "Bootstrap"],
      image: "🌱",
      link: "https://github.com/purnimakatiyar/AgroTech-Assistant",
    },
    {
      title: "Electronic Gadget Website",
      description:
        "A visually engaging, fast-loading static website showcasing modern electronic gadgets with clean UI design, smooth layouts, and carefully structured content for maximum user appeal.",
      tech: ["HTML", "CSS"],
      image: "📱",
      link: "https://gallant-payne-e90c2c.netlify.app",
    },
    {
      title: "Realtime Chat App",
      description:
        "A lightning-fast realtime chat application powered by WebSockets, delivering instant messaging, dynamic user updates, and efficient message broadcasting through a lightweight Node.js backend.",
      tech: ["Node.js", "Express"],
      image: "💬",
      link: "https://github.com/purnimakatiyar/realtimechat",
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

  items: ["home", "about", "experience", "skills", "projects", "contact"],

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


export const EXPERIENCE = {
  heading: "Work Experience",

  items: [
    {
      role: "Software Engineer",
      company: "Abstrabit Technologies Pvt Ltd",
      location: "Bengaluru, Karnataka (Remote)",
      duration: "Sep 2024 – Present",
      tech: ["Python", "Django", "ReactJS", "AWS", "Docker"],
      highlights: [
        "Designed and implemented a job manager portal that reduced manual tracking errors by 30%.",
        "Engineered a scalable backend architecture using AWS EC2 and RDS with automated deployment workflows.",
        "Improved application performance by 40% by identifying and resolving critical bottlenecks.",
        "Integrated Stripe for secure and seamless payment processing.",
        "Developed automated and event-triggered email notification systems.",
        "Implemented Role-Based Access Control (RBAC) to enhance security and personalize user experiences.",
        "Enhanced audit tool management system for easier auditing and report generation.",
        "Built REST APIs for a mentoring platform connecting mentors and mentees based on expertise.",
        "Configured custom domains and deployments using AWS Amplify.",
        "Integrated OpenAI LLMs for meeting transcription summaries and action items, including Whisper for speech-to-text.",
      ],
    },

    {
      role: "Software Development Engineer Intern",
      company: "Syscore Solutions Pvt Ltd",
      location: "Gurugram, Haryana (Hybrid)",
      duration: "Jul 2024 – Sep 2024",
      tech: ["Vue.js", "Tailwind CSS", "Docker"],
      highlights: [
        "Contributed to the IWBI WELL project by improving platform usability and functionality.",
        "Integrated Google Maps API for interactive and real-time geospatial visualizations.",
      ],
    },

    {
      role: "Software Development Engineer Intern",
      company: "Watchguard Technologies Pvt Ltd",
      location: "Noida (On-site)",
      duration: "Sep 2023 – Jul 2024",
      tech: ["Python", "Flask", "FastAPI", "Angular", "AWS"],
      highlights: [
        "Developed RESTful microservices using OpenAPI, API Gateway, and AWS Lambda.",
        "Authored infrastructure-as-code templates for automated AWS deployments.",
        "Improved test coverage from 72% to ~89% by applying industry best practices.",
        "Wrote unit tests using Pytest across multiple repositories.",
        "Contributed to a full-stack internal tool (WG Car Pooling System).",
      ],
    },
  ],
};
