export type SkillGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export type Project = {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  team?: string;
  role?: string;
  link?: { href: string; label: string };
};

export const profile = {
  name: "Nguyen Le Nguyen",
  title: "Software Developer",
  location: "Linh Trung, Thu Duc City, Ho Chi Minh City",
  email: "nashnguyen1002@gmail.com",
  phone: "0906100204",
  linkedin: {
    href: "https://www.linkedin.com/in/nashinnov8",
    label: "Nguyen (Le) Nguyen",
  },
  github: { href: "https://github.com/nashinnov8", label: "nashinnov8" },
  cv: "/NguyenLeNguyen_CV.pdf",
  about:
    "Backend-focused Software Developer experienced in building scalable APIs and system components using Java, Spring Boot, and .NET. Strong interest in system architecture, performance optimization, and building reliable production systems. Eager to contribute to impactful engineering teams and grow as a backend engineer.",
};

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "C#", "TypeScript", "JavaScript", "C"] },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "JPA / Hibernate",
      "ASP.NET Core",
      "REST API",
    ],
  },
  { label: "Frontend", items: ["React", "TypeScript", "MUI", "Ant Design"] },
  { label: "Database", items: ["MySQL", "SQL Server", "MongoDB"] },
  { label: "DevOps & Cloud", items: ["Docker", "AWS ECS", "Linux"] },
  { label: "Tools", items: ["Git", "GitHub", "GitLab", "Firebase"] },
];

export const experiences: Experience[] = [
  {
    company: "1Byte Software",
    role: "Software Developer",
    period: "Jan 2025 — Dec 2025",
    bullets: [
      "Contributed to a Scrum team developing .NET APIs and integrating front-end features using React.",
      "Implemented UI components with cross-browser compatibility based on design requirements.",
      "Optimized SQL Server queries and stored procedures, reducing API response time to under 500ms.",
      "Used Firebase for real-time data handling and authentication.",
      "Participated in sprint planning and feature discussions throughout the development lifecycle.",
    ],
  },
  {
    company: "FPT Software — SCM.DMS",
    role: "Intern Software Developer",
    period: "Sep 2024 — Dec 2024",
    bullets: [
      "Developed custom JavaScript parsers to convert legacy RPG code into Java and Spring Boot services.",
      "Built WinForms (.NET) tools to support migration testing between RPG and Java modules.",
      "Collaborated with a cross-functional team to modernize IBM legacy systems into scalable Spring Boot services.",
    ],
  },
];

export const projects: Project[] = [
  {
    name: "Ecommerce Microservices",
    period: "Feb 2026 — Mar 2026",
    team: "Solo",
    description:
      "A self-learning microservices project simulating an ecommerce platform with distributed services for product, order, and user management.",
    bullets: [
      "Architected a distributed ecommerce backend with 5 Spring Boot 3.2 microservices and an API Gateway (JWT auth, Redis rate limiting, Resilience4j circuit breakers).",
      "Implemented the Saga pattern via Apache Kafka across 3 topics to orchestrate distributed order/inventory transactions with eventual consistency.",
      "Built a secure Auth Service with JWT access/refresh token rotation, Redis-based token blacklisting, and 8+ RESTful APIs with global exception handling and pagination.",
      "Containerized the full platform with Docker Compose including MySQL, Redis, Kafka, and Zookeeper for reproducible development environments.",
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Spring JPA",
      "Spring Security",
      "JWT",
      "OAuth2",
      "Apache Kafka",
      "AWS ECS",
    ],
    link: { href: "https://github.com/nashinnov8", label: "GitHub" },
  },
  {
    name: "Dental Clinic Booking",
    period: "May 2024 — Aug 2024",
    role: "Backend Developer",
    team: "Team of 4",
    description: "An appointment system for a dental clinic.",
    bullets: [
      "Implemented authentication and authorization using JWT and OAuth2.",
      "Integrated VNPAY API for secure and seamless payment processing.",
      "Designed and maintained the database schema and backend business logic.",
      "Built and documented RESTful APIs for appointment scheduling, user management, and billing.",
    ],
    tech: [
      "React",
      "TypeScript",
      "MUI",
      "Jest",
      "ASP.NET Core",
      "SQL Server",
      "AWS S3",
      "VNPAY",
    ],
    link: { href: "https://github.com/nashinnov8", label: "GitHub" },
  },
];

export const education = {
  school: "FPT University",
  degree: "Software Engineering",
  period: "2022 — 2025",
};

export const activities = [
  {
    name: "F-Code",
    period: "2022 — 2024",
    bullets: [
      "Participated in C programming language training for new members.",
      "Attended various workshops in the technology field.",
      "Showcased club achievements to others.",
    ],
  },
  {
    name: "APEA",
    period: "2022 — Now",
    bullets: [
      "A children's charity fund.",
      "Organized and participated in fundraising activities.",
    ],
  },
];

export const awards = ["Good Performance Student — Summer 2024"];

export const interests = ["Football", "Basketball", "Running", "Coffee"];
