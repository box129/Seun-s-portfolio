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
  name: "Your Full Name", // TODO: Replace with your name (e.g., "Jane Developer")
  title: "Your Job Title", // TODO: e.g., "Full Stack Developer", "Frontend Engineer"
  bio: "Your elevator pitch here. This should be 3-4 sentences about who you are, what you do, and what drives you as a developer.", // TODO: Write your short bio
  location: "Your City, Country", // TODO: Add your location
  timezone: "UTC+0", // TODO: Add your timezone (helps with remote work)
  availability: "Available for hire", // TODO: or "Open to opportunities", "Currently employed but open to interesting projects"
  email: "your.email@example.com", // TODO: Add your professional email
  resumeUrl: "/resume.pdf", // TODO: Upload resume to /public folder and update path
  photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", // TODO: Replace with your professional photo
};

// ==================
// FEATURED PROJECT (Homepage Hero)
// ==================
// TODO: USER INPUT - Add your best/most impressive project for the homepage hero
export const featuredProject = {
  title: "Featured Project Title", // TODO: Your best project name
  description: "One-line description of what this project does and why it's impressive", // TODO: Short impactful description
  longDescription: "Detailed paragraph about the project. Explain what problem it solves, what makes it special, your role in building it, and the impact it has had. This appears below the hero section.", // TODO: Write detailed description
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200", // TODO: Replace with your project screenshot/banner
  video: "", // TODO: OPTIONAL - Add project demo video URL (YouTube, Vimeo, or direct URL)
  technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"], // TODO: List all technologies used
  liveUrl: "https://your-project.com", // TODO: Add live demo URL (or leave empty if not deployed)
  githubUrl: "https://github.com/yourusername/project", // TODO: Add GitHub repository URL
  featured: true,
};

// ==================
// RECENT PROJECTS (Homepage Grid)
// ==================
// TODO: USER INPUT - Add 3 recent projects to display on homepage
export const recentProjects = [
  {
    id: "project-1",
    title: "Project Name 1", // TODO: Project title
    shortDescription: "Brief 1-2 sentence description for the card view", // TODO: Short description
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800", // TODO: Replace with project screenshot
    technologies: ["React", "Next.js", "Tailwind CSS"], // TODO: List technologies
    liveUrl: "", // TODO: Add live URL or leave empty
    githubUrl: "", // TODO: Add GitHub URL or leave empty
    featured: false,
  },
  {
    id: "project-2",
    title: "Project Name 2",
    shortDescription: "Brief description of this project",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800", // TODO: Replace
    technologies: ["TypeScript", "Node.js", "Express"], // TODO: Update
    liveUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    id: "project-3",
    title: "Project Name 3",
    shortDescription: "Brief description of this project",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800", // TODO: Replace
    technologies: ["Python", "Django", "PostgreSQL"], // TODO: Update
    liveUrl: "",
    githubUrl: "",
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
    title: "Comprehensive Project Title",
    shortDescription: "One sentence for card view",
    fullDescription: "Detailed description for the project detail page. Explain what the project is, what it does, and why it matters.",

    // Project images
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200", // Main image
    images: [ // Additional screenshots for gallery
      {
        url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
        caption: "Main dashboard view",
        alt: "Project dashboard screenshot",
      },
      {
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        caption: "Mobile responsive design",
        alt: "Mobile view screenshot",
      },
    ],

    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    liveUrl: "https://project.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
    completedDate: "2024-03",
    role: "Full Stack Developer", // Your role in the project

    // Detailed sections for project detail page
    sections: {
      overview: {
        summary: "Brief overview of what this project is and what it accomplishes.",
        keyFeatures: [
          "Key feature or capability #1",
          "Key feature or capability #2",
          "Key feature or capability #3",
        ],
        duration: "3 months", // How long it took to build
        role: "Solo Developer", // or "Lead Developer", "Frontend Developer", etc.
      },
      challenge: {
        problem: "Detailed explanation of the problem this project solves. What need does it address? Who is it for?",
        constraints: [
          "Constraint or requirement #1",
          "Constraint or requirement #2",
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
          "Result or achievement #1 (e.g., deployed to 100+ users)",
          "Result or achievement #2 (e.g., 50% performance improvement)",
        ],
        metrics: [ // OPTIONAL: Quantifiable metrics
          { label: "Users", value: "500+" },
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
      "First paragraph: Tell your story. How did you get into development? What sparked your interest in programming?",
      "Second paragraph: What drives you? What's your approach to building software? What kind of problems do you love solving?",
      "Third paragraph: What are you passionate about? What technologies excite you? What are your goals?",
    ],
  },

  // Skills organized by category
  skills: {
    frontend: [
      {
        name: "React",
        proficiency: 90, // 0-100 or use "Expert", "Advanced", "Intermediate", "Beginner"
        yearsOfExperience: 3,
        icon: "react" as const,
      },
      {
        name: "TypeScript",
        proficiency: 85,
        yearsOfExperience: 2,
        icon: "code" as const,
      },
      {
        name: "Next.js",
        proficiency: 80,
        yearsOfExperience: 2,
        icon: "layout" as const,
      },
      // TODO: Add all your frontend skills
    ],
    backend: [
      {
        name: "Node.js",
        proficiency: 85,
        yearsOfExperience: 3,
        icon: "server" as const,
      },
      {
        name: "Express",
        proficiency: 80,
        yearsOfExperience: 3,
        icon: "server" as const,
      },
      // TODO: Add all your backend skills
    ],
    tools: [
      {
        name: "Git",
        proficiency: 90,
        yearsOfExperience: 4,
        icon: "git-branch" as const,
      },
      {
        name: "VS Code",
        proficiency: 95,
        yearsOfExperience: 4,
        icon: "code" as const,
      },
      // TODO: Add tools you use
    ],
    softSkills: [
      {
        name: "Problem Solving",
        proficiency: 90,
        description: "Strong analytical thinking and debugging skills",
        icon: "lightbulb" as const,
      },
      {
        name: "Communication",
        proficiency: 85,
        description: "Clear technical communication with team and stakeholders",
        icon: "message-circle" as const,
      },
      // TODO: Add soft skills
    ],
  },

  // Work experience and education
  experience: [
    {
      type: "work" as const,
      company: "Company Name",
      role: "Your Role",
      startDate: "2023-01",
      endDate: "Present", // or specific end date like "2024-12"
      achievements: [
        "Key achievement or responsibility #1 with measurable impact",
        "Key achievement or responsibility #2 showing your contributions",
        "Key achievement or responsibility #3 demonstrating growth",
      ],
      logo: "", // Optional: company logo URL
    },
    {
      type: "education" as const,
      company: "University Name",
      role: "Degree Name",
      startDate: "2019-09",
      endDate: "2023-05",
      achievements: [
        "Relevant coursework or achievements",
        "GPA or honors if applicable",
      ],
      logo: "",
    },
    // TODO: Add all work experience and education entries
  ],

  currentlyLearning: [
    "Technology or skill you're currently learning #1",
    "Technology or skill you're currently learning #2",
    "Technology or skill you're currently learning #3",
    // TODO: What are you learning right now?
  ],

  interests: [
    "Interest or hobby #1",
    "Interest or hobby #2",
    "Interest or hobby #3",
    // TODO: Add personal interests to humanize your profile (optional)
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
    city: "Your City",
    country: "Your Country",
    timezone: "UTC+0", // Important for remote work
  },

  socialLinks: [
    {
      platform: "LinkedIn",
      username: "yourname",
      url: "https://linkedin.com/in/yourname", // TODO: Add your LinkedIn
      icon: "linkedin" as const,
    },
    {
      platform: "GitHub",
      username: "yourusername",
      url: "https://github.com/yourusername", // TODO: Add your GitHub
      icon: "github" as const,
    },
    {
      platform: "Twitter",
      username: "@yourhandle",
      url: "https://twitter.com/yourhandle", // TODO: Add if you have Twitter
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
  url: "https://yourwebsite.com", // TODO: Add your domain when deployed
  ogImage: "/og-image.jpg", // TODO: Create and add Open Graph image to /public folder
  twitterHandle: "@yourhandle", // TODO: Add your Twitter handle
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
