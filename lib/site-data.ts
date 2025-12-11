// ==================
// MASTER DATA FILE FOR PORTFOLIO WEBSITE
// ==================
// TODO: USER INPUT - Fill in all sections below with your personal information
// This file contains ALL content for your portfolio website

// ==================
// PERSONAL INFORMATION
// ==================
// TODO: USER INPUT - Add your basic personal information
export const personalInfo = {
  name: "Seun Olarewaju", // TODO: Replace with your name (e.g., "Jane Developer")
  title: "Full Stack Developer", // TODO: e.g., "Full Stack Developer", "Frontend Engineer"
  bio: "I am a Full Stack Developer with a passion for creating innovative and user-friendly web applications. I have experience in building scalable and secure applications using modern web technologies. I am also a team player and enjoy working collaboratively with others to deliver high-quality results.", // TODO: Write your short bio
  location: "Lagos, Nigeria", // TODO: Add your location
  timezone: "UTC+0", // TODO: Add your timezone (helps with remote work)
  availability: "Available for hire", // TODO: or "Open to opportunities", "Currently employed but open to interesting projects"
  email: "sewinwaju@gmail.com", // TODO: Add your professional email
  resumeUrl: "/resume.pdf", // TODO: Upload resume to /public folder and update path
  photoUrl: "/images/profile.png", // TODO: Add your photo as 'profile.png' in public/images folder
};

// ==================
// FEATURED PROJECT (Homepage Hero)
// ==================
// TODO: USER INPUT - Add your best/most impressive project for the homepage hero
export const featuredProject = {
  title: "Seun Student Tracker", // TODO: Your best project name
  description: "A student tracker application that helps students to keep track of their assignments and deadlines", // TODO: Short impactful description
  longDescription: "Seun Tracker is a modern productivity and habit-tracking platform built to help students and professionals stay organized. It turns goals into clear daily actions, making it easy to track habits, set milestones, and monitor progress through a smart dashboard. Unlike basic to-do lists, Seun Tracker focuses on consistency and long-term growth, offering habit reminders, real-time insights, a distraction-free dashboard, and seamless cloud sync across all devices.", // TODO: Write detailed description
  image: "/images/seun-student-tracker.png", // TODO: Add image as 'seun-student-tracker.png' in public/images
  video: "", // TODO: OPTIONAL - Add project demo video URL (YouTube, Vimeo, or direct URL)
  technologies: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"], // TODO: List all technologies used
  liveUrl: "https://seun-tracker-forportfolio.onrender.com/", // TODO: Add live demo URL (or leave empty if not deployed)
  githubUrl: "https://github.com/box129/Tracker-ForPortfolio", // TODO: Add GitHub repository URL
  featured: true,
};

// ==================
// RECENT PROJECTS (Homepage Grid)
// ==================
// TODO: USER INPUT - Add 3 recent projects to display on homepage
export const recentProjects = [
  {
    id: "project-1",
    title: "Seun Student Tracker", // TODO: Project title
    shortDescription: "A student tracker application that helps students to keep track of their assignments and deadlines", // TODO: Short description
    image: "/images/seun-student-tracker.png", // TODO: Add image as 'seun-student-tracker.png' in public/images
    technologies: ["React", "Next.js", "Tailwind CSS"], // TODO: List technologies
    liveUrl: "https://seun-tracker-forportfolio.onrender.com/", // TODO: Add live URL or leave empty
    githubUrl: "https://github.com/box129/Tracker-ForPortfolio", // TODO: Add GitHub URL or leave empty
    featured: true,
  },
  {
    id: "project-2",
    title: "ToDo App",
    shortDescription: "A simple to-do app that helps users to keep track of their tasks",
    image: "/images/todo-app.png", // TODO: Add image as 'todo-app.png' in public/images
    technologies: ["TypeScript", "Node.js", "Express"], // TODO: Update
    liveUrl: "https://box129.github.io/ToDo-ForPortfolio/",
    githubUrl: "https://github.com/box129/ToDo-ForPortfolio",
    featured: false,
  },
  {
    id: "project-3",
    title: "Leadway Form Page",
    shortDescription: "A form page for Leadway",
    image: "/images/leadway-form.png", // TODO: Add image as 'leadway-form.png' in public/images
    technologies: ["HTML", "CSS", "JavaScript"], // TODO: Update
    liveUrl: "https://box129.github.io/RSAClientSide-ForPortfolio/",
    githubUrl: "https://github.com/box129/RSAClientSide-ForPortfolio",
    featured: false,
  },
  // TODO: Add more projects as needed
];

// ==================
// ALL PROJECTS (Projects Page)
// ==================
// TODO: USER INPUT - Add ALL your projects here with detailed information
export const allProjects = [
  {
    id: "project-slug-1", // Used in URL: /projects/project-slug-1
    title: "Seun Student Tracker",
    shortDescription: "A student tracker application that helps students to keep track of their assignments and deadlines",
    fullDescription: "Seun Student Tracker is a student tracker application that helps students to keep track of their assignments and deadlines. It is a simple and easy to use application that helps students to stay organized and on track with their assignments.",

    // Project images
    image: "/images/seun-student-tracker.png", // Main image
    images: [ // Additional screenshots for gallery
      {
        url: "/images/seun-student-tracker.png",
        caption: "Main dashboard view",
        alt: "Project dashboard screenshot",
      },
      {
        url: "/images/seun-student-tracker.png",
        caption: "Mobile responsive design",
        alt: "Mobile view screenshot",
      },
    ],

    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://seun-tracker-forportfolio.onrender.com/",
    githubUrl: "https://github.com/box129/Tracker-ForPortfolio",
    featured: true,
    completedDate: "2025-11",
    role: "Full Stack Developer", // Your role in the project

    // Detailed sections for project detail page
    sections: {
      overview: {
        summary: "Brief overview of what this project is and what it accomplishes.",
        keyFeatures: [
          "User Authentication",
          "Assignment Management",
          "Notification System",
          "Progress Tracking",
          "Deadline Alerts",
          "Mobile Responsive Design",
        ],
        duration: "1 month", // How long it took to build
        role: "Solo Developer", // or "Lead Developer", "Frontend Developer", etc.
      },
      challenge: {
        problem: "Detailed explanation of the problem this project solves. What need does it address? Who is it for?",
        constraints: [
          "User Authentication",
          "Assignment Management",
          "Notification System",
          "Progress Tracking",
          "Deadline Alerts",
          "Mobile Responsive Design",
        ],
      },
      solution: {
        approach: "Explain how you approached solving the problem. What was your strategy? What were the key technical decisions?",
        technicalDecisions: [
          "Why you chose React/Vue/etc",
          "Database design decisions",
          "API architecture choices",
        ],
        architectureDiagram: "", // OPTIONAL: URL to architecture diagram image
      },
      techStack: {
        technologies: [
          {
            name: "React",
            purpose: "Why you used this technology and what it does in the project",
            icon: "react",
          },
          {
            name: "TypeScript",
            purpose: "Type safety and better developer experience",
            icon: "code",
          },
        ],
        codeSnippets: [ // OPTIONAL: Show interesting code snippets
          {
            title: "Example: Custom Hook",
            code: "const useCustomHook = () => {\n  // Your code here\n};",
            language: "typescript",
          },
        ],
      },
      outcomes: {
        results: [
          "User Authentication",
          "Assignment Management",
          "Notification System",
          "Progress Tracking",
          "Deadline Alerts",
          "Mobile Responsive Design",
        ],
        metrics: [ // OPTIONAL: Quantifiable metrics
          { label: "Users", value: "50+" },
          { label: "Performance", value: "300ms load time" },
        ],
        learnings: [
          "What you learned from building this project",
          "Skills you developed or improved",
        ],
        futureImprovements: [
          "Feature or improvement you plan to add",
          "Technical debt you want to address",
        ],
      },
    },
  },
  {
    id: "todo-app-portfolio",
    title: "Seun Todo App",
    shortDescription: "A clean, responsive task manager designed for productivity.",
    fullDescription:
      "A simple but effective todo application that enables users to add, check off, and manage daily tasks. Built as a lightweight productivity tool with smooth interactions and local storage persistence.",

    image: "/images/todo-app.png",
    images: [
      {
        url: "/images/todo-app.png",
        caption: "Home screen",
        alt: "Todo app home page",
      },
      {
        url: "/images/todo-app.png",
        caption: "Mobile layout",
        alt: "Todo app mobile view",
      },
    ],

    technologies: ["React", "TypeScript", "LocalStorage"],
    liveUrl: "https://your-todo-live-link.com",
    githubUrl: "https://github.com/box129/todo-app",
    featured: false,
    completedDate: "2025-03",
    role: "Frontend Developer",

    sections: {
      overview: {
        summary: "A simple productivity tool for managing daily tasks efficiently.",
        keyFeatures: [
          "Add & remove tasks",
          "Check-off functionality",
          "LocalStorage persistence",
          "Mobile-friendly design",
        ],
        duration: "1 week",
        role: "Solo Developer",
      },
      challenge: {
        problem:
          "People often need a quick way to organize daily tasks without signing up or downloading anything.",
        constraints: ["No backend", "Must work offline", "Very lightweight"],
      },
      solution: {
        approach:
          "Focused on speed and simplicity. Used React state management with LocalStorage to persist tasks.",
        technicalDecisions: [
          "Used React for UI rendering",
          "Used LocalStorage instead of backend",
          "Minimal UI with flexible layout",
        ],
        architectureDiagram: "",
      },
      techStack: {
        technologies: [
          { name: "React", purpose: "UI rendering and state management", icon: "react" },
          { name: "TypeScript", purpose: "Reliable type-safe development", icon: "code" },
        ],
        codeSnippets: [],
      },
      outcomes: {
        results: ["Fully offline", "Fast performance", "Clean UI"],
        metrics: [],
        learnings: ["State management basics", "Component composition"],
        futureImprovements: ["Task categories", "Cloud sync"],
      },
    },
  },
  {
    id: "leadway-form-clone",
    title: "Leadway Form Page Clone",
    shortDescription: "A responsive, pixel-perfect clone of Leadway’s onboarding form.",
    fullDescription:
      "A frontend replication of Leadway’s official form page, built to practice UI accuracy, validation, layout structuring, and user experience optimization.",

    image: "/images/leadway-form.png",
    images: [
      {
        url: "/images/leadway-form.png",
        caption: "Form layout",
        alt: "Leadway form clone UI",
      },
    ],

    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://your-leadway-clone-live.com",
    githubUrl: "https://github.com/box129/leadway-form",
    featured: false,
    completedDate: "2025-02",
    role: "Frontend Developer",

    sections: {
      overview: {
        summary: "A clone of the Leadway form page with responsive UI.",
        keyFeatures: [
          "Modern form design",
          "Validation logic",
          "Accessibility-friendly structure",
          "Responsive layout",
        ],
        duration: "4 days",
        role: "Solo Developer",
      },
      challenge: {
        problem: "Rebuilding a real-world form UI with pixel-level accuracy.",
        constraints: ["No frameworks", "Must match original layout", "Clean and reusable CSS"],
      },
      solution: {
        approach:
          "Focused on CSS grid + flexbox, semantic HTML, and clean input validation.",
        technicalDecisions: ["Pure HTML/CSS/JS", "No libraries", "Mobile-first design"],
        architectureDiagram: "",
      },
      techStack: {
        technologies: [
          { name: "HTML", purpose: "Structure", icon: "code" },
          { name: "CSS", purpose: "Styling & layout", icon: "code" },
          { name: "JavaScript", purpose: "Validation logic", icon: "code" },
        ],
        codeSnippets: [],
      },
      outcomes: {
        results: ["Pixel-perfect clone", "Improved CSS mastery"],
        metrics: [],
        learnings: ["Responsive grids", "Cross-browser form styling"],
        futureImprovements: ["Connect to backend", "Add multi-step form"],
      },
    },
  },


  // TODO: Copy the above template and add all your projects
  // Aim for at least 3-6 projects to showcase your range
];

// Automatically extract unique technologies for filtering
export const allTechnologies = Array.from(
  new Set(allProjects.flatMap((p) => p.technologies))
).sort();

// ==================
// CORE SKILLS (Homepage)
// ==================
// TODO: USER INPUT - List 6-8 core technologies you want to highlight on homepage
export const coreSkills = [
  { name: "React", icon: "react" as const },
  { name: "TypeScript", icon: "code" as const },
  { name: "Node.js", icon: "server" as const },
  { name: "Next.js", icon: "layout" as const },
  { name: "Tailwind CSS", icon: "palette" as const },
  { name: "Git", icon: "git-branch" as const },
  // TODO: Add your core skills (we use lucide-react icons)
  // Available icons: react, code, server, layout, palette, git-branch, database, cloud, etc.
];

// ==================
// ABOUT PAGE DATA
// ==================
// TODO: USER INPUT - About page content

export const aboutData = {
  hero: {
    greeting: "Hi, I'm", // Optional: customize greeting
    name: personalInfo.name,
    title: personalInfo.title,
    location: personalInfo.location,
    missionStatement: "One sentence about what you do and why you're passionate about it",
    photoUrl: personalInfo.photoUrl,
  },

  bio: {
    paragraphs: [
      "I'm Seun Olarewaju, a Software Engineering student and Developer based in Osun, Nigeria. My journey into tech started with a curiosity for how things work, which quickly evolved into a passion for building functional and user-friendly applications. Currently pursuing my B.Sc. in Software Engineering at Osun State University, I balance my academic studies with hands-on development work.",
      "I have professional experience as a Junior Software Developer at Leadway Assurance, where I contributed to internal tools and learned the ropes of agile development in a corporate environment. As a freelancer, I've honed my full-stack skills by building responsive web applications and experimenting with modern technologies like React and Node.js.",
      "I'm driven by the opportunity to solve real problems through code. whether it's building a drag-and-drop interface or setting up a backend API. I thrive in collaborative environments and am always eager to learn from senior developers and contribute to open-source projects.",
    ],
  },

  // Skills organized by category
  skills: {
    frontend: [
      {
        name: "React",
        proficiency: 85,
        yearsOfExperience: 2,
        icon: "react" as const,
      },
      {
        name: "JavaScript",
        proficiency: 90,
        yearsOfExperience: 3,
        icon: "code" as const,
      },
      {
        name: "HTML/CSS",
        proficiency: 95,
        yearsOfExperience: 3,
        icon: "layout" as const,
      },
      {
        name: "Tailwind CSS",
        proficiency: 85,
        yearsOfExperience: 2,
        icon: "palette" as const,
      },
    ],
    backend: [
      {
        name: "Node.js",
        proficiency: 80,
        yearsOfExperience: 2,
        icon: "server" as const,
      },
      {
        name: "Express",
        proficiency: 80,
        yearsOfExperience: 2,
        icon: "server" as const,
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        proficiency: 85,
        yearsOfExperience: 3,
        icon: "git-branch" as const,
      },
      {
        name: "VS Code",
        proficiency: 90,
        yearsOfExperience: 3,
        icon: "code" as const,
      },
    ],
    softSkills: [
      {
        name: "Team Collaboration",
        proficiency: 90,
        description: "Experience working in agile teams and participating in code reviews",
        icon: "message-circle" as const,
      },
      {
        name: "Problem Solving",
        proficiency: 85,
        description: "Ability to debug complex issues and optimize performance",
        icon: "lightbulb" as const,
      },
      {
        name: "Communication",
        proficiency: 90,
        description: "Proficient in English; clear technical communication",
        icon: "message-circle" as const,
      },
    ],
  },

  // Work experience and education
  experience: [
    {
      type: "work" as const,
      company: "Leadway Assurance",
      role: "Junior Software Developer (Intern)",
      startDate: "2025-04",
      endDate: "2025-09",
      achievements: [
        "Built UI components and integrated them with backend APIs for internal tools.",
        "Implemented and tested REST APIs to ensure seamless frontend-backend communication.",
        "Collaborated with senior developers on debugging, code cleanup, and performance improvements.",
        "Participated in agile ceremonies including standups and review sessions.",
      ],
      logo: "",
    },
    {
      type: "work" as const,
      company: "Self Employed",
      role: "Freelance Full-Stack Developer",
      startDate: "2023-01",
      endDate: "Present",
      achievements: [
        "Developed full-stack web applications using React, Node.js, and Express.",
        "Created responsive, mobile-friendly layouts and forms ensuring cross-device compatibility.",
        "Managed backend routing, server logic, and database connections for client projects.",
        "Contributed to open-source projects to gain collaborative development experience.",
      ],
      logo: "",
    },
    {
      type: "education" as const,
      company: "Osun State University",
      role: "B.Sc. Software Engineering",
      startDate: "2023-01",
      endDate: "Present",
      achievements: [
        "Focusing on software engineering principles, algorithms, and system design.",
        "Active student building practical projects alongside academic coursework.",
      ],
      logo: "",
    },
  ],

  currentlyLearning: [
    "System Design & Architecture",
    "Advanced React Patterns",
    "Cloud Deployment (AWS/Vercel)",
  ],

  interests: [
    "Open Source Contribution",
    "Tech Community Building",
    "Football",
  ],

  resumeUrl: personalInfo.resumeUrl,
};

// ==================
// CONTACT PAGE DATA
// ==================
// TODO: USER INPUT - Contact information and social links

export const contactData = {
  availability: {
    status: "available" as const, // "available" | "open" | "employed"
    message: "I'm currently available for full-time positions and freelance projects. Let's build something amazing together!",
  },

  email: personalInfo.email,

  location: {
    city: "Osogbo",
    country: "Nigeria",
    timezone: "UTC+0", // Important for remote work
  },

  socialLinks: [
    {
      platform: "LinkedIn",
      username: "Oluwaseun Olarewaju",
      url: "https://www.linkedin.com/in/oluwaseun-olarewaju-ba4ba8316/", // TODO: Add your LinkedIn
      icon: "linkedin" as const,
    },
    {
      platform: "GitHub",
      username: "box129",
      url: "https://github.com/box129", // TODO: Add your GitHub
      icon: "github" as const,
    },
    {
      platform: "Twitter",
      username: "seunsolidity",
      url: "https://x.com/seunsolidity", // TODO: Add if you have Twitter
      icon: "twitter" as const,
    },
    // TODO: Add other platforms (Dev.to, Medium, personal blog, etc.)
  ],

  responseTime: "24-48 hours",

  calendlyUrl: "", // TODO: OPTIONAL - Add Calendly link if you use it for scheduling calls

  // Form submission endpoint - Choose one of these options:
  // Option 1: Formspree (https://formspree.io) - Easy, free tier available
  // Option 2: Web3Forms (https://web3forms.com) - Privacy-focused, free
  // Option 3: Your own API endpoint
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // TODO: Set up form service and add endpoint here
};

// ==================
// SITE METADATA
// ==================
// TODO: USER INPUT - Update site metadata for SEO

export const siteMetadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: `Portfolio of ${personalInfo.name} - ${personalInfo.title} specializing in modern web development. Explore my projects and get in touch.`,
  url: "https://box129.com", // TODO: Add your domain when deployed
  ogImage: "/og-image.jpg", // TODO: Create and add Open Graph image to /public folder
  twitterHandle: "@seunsolidity", // TODO: Add your Twitter handle
};

// ==================
// NAVIGATION LINKS
// ==================

export const navLinks = [
  { label: "Home", href: "/", icon: "home" as const },
  { label: "Projects", href: "/projects", icon: "folder" as const },
  { label: "About", href: "/about", icon: "user" as const },
  { label: "Contact", href: "/contact", icon: "mail" as const },
];

// ==================
// TYPE DEFINITIONS
// ==================

export type IconName =
  | "home" | "folder" | "user" | "mail" | "react" | "code" | "server"
  | "layout" | "palette" | "git-branch" | "database" | "cloud" | "linkedin"
  | "github" | "twitter" | "external-link" | "arrow-right" | "download"
  | "lightbulb" | "message-circle" | "alert-circle" | "trending-up"
  | "check" | "x" | "menu" | "chevron-down";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  image: string;
  images?: Array<{ url: string; caption: string; alt: string }>;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  completedDate?: string;
  role?: string;
  sections?: {
    overview: {
      summary: string;
      keyFeatures: string[];
      duration: string;
      role: string;
    };
    challenge: {
      problem: string;
      constraints: string[];
    };
    solution: {
      approach: string;
      technicalDecisions: string[];
      architectureDiagram?: string;
    };
    techStack: {
      technologies: Array<{
        name: string;
        purpose: string;
        icon: string;
      }>;
      codeSnippets?: Array<{
        title: string;
        code: string;
        language: string;
      }>;
    };
    outcomes: {
      results: string[];
      metrics?: Array<{ label: string; value: string }>;
      learnings: string[];
      futureImprovements: string[];
    };
  };
}

export interface Skill {
  name: string;
  proficiency?: number | string;
  yearsOfExperience?: number;
  description?: string;
  icon: IconName;
}

export interface Experience {
  type: "work" | "education";
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  logo?: string;
}
