import type {
  Project,
  Education,
  Certification,
  ProfileInfo,
} from "../models/portfolio.types";

export const getProfileInfo = (): ProfileInfo => ({
  name: "Andrés Mauricio Machetá Holguín",
  role: "Software Engineer | Fullstack Developer (MERN)",
  about: `Hi! I’m Andrés 👋\n\nI’m a Full Stack Web Developer and Systems Engineer with a strong focus on backend and modern web applications. I enjoy building reliable, scalable solutions that solve real business problems and improve everyday workflows.\n\nI have hands-on experience developing production-ready web applications, including:\n\n- An internal business application built during my professional internship to automate manual and Excel-based processes.\n- A web-based e-commerce platform for an entrepreneurial project, where I work across frontend, backend, APIs, and database design.\n\nI’m especially interested in backend development, RESTful APIs, and clean system design, while still enjoying frontend work with React to deliver solid user experiences. I value clean code, collaboration, and continuous learning, and I’m comfortable working in agile environments with version control and code reviews.\n\nI’m currently looking for opportunities where I can grow as a full-stack or backend-oriented engineer, contribute to real products, and learn from strong engineering teams—particularly in environments that value quality, mentorship, and impact.`,
  email: "sr.macheta08@gmail.com",
  github: "https://github.com/Macheta06",
  linkedin: "https://www.linkedin.com/in/andres-macheta/",
});

export const getEducation = (): Education[] => [
  {
    id: "edu-1",
    institution: "Universidad de Manizales",
    degree: "Ingeniería, Information Technology",
    period: "feb. 2020 – sept. 2025",
    description:
      "During my studies, I gained hands-on experience through academic projects focused on web application development, working with frontend and backend technologies, databases, and RESTful APIs. These projects helped me build a solid foundation in software development, problem-solving, and teamwork.",
  },
];

export const getCertifications = (): Certification[] => [
  {
    id: "cert-1",
    title: "React: De cero a experto",
    issuer: "Udemy",
    date: "abr. 2026",
    credentialId: "UC-50ca3532-2fa5-47ba-9974-43c857106ece",
  },
];

export const getProjects = (): Project[] => [
  {
    id: "proj-1",
    title: "SomosHuizy",
    description:
      "MERN-based web application developed for an entrepreneurial project and deployed online. Built focusing on real-world functionality and scalable architecture.",
    technologies: [
      "TypeScript",
      "MongoDB Atlas",
      "Express",
      "React",
      "Node.js",
      "Vercel",
      "Render",
    ],
    link: "https://somoshuizy.vercel.app/",
    type: "real",
  },
  {
    id: "proj-2",
    title: "Hardware Store Website",
    description:
      "Development of a hardware store website featuring a product catalog and inventory management.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    link: "https://elagropecuariomadrid.com/",
    type: "real",
  },
  {
    id: "proj-3",
    title: "Teslo | Shop",
    description:
      'A comprehensive web application built with React and TypeScript using Vite. This project focuses on create an admin dashboard, authorization forms and files upload. Developed as part of the "React: De cero a experto" course by DevTalles (Udemy) to master modern frontend architecture and type-safe development.',
    technologies: ["React", "TypeScript", "Vite"],
    link: "https://teslo-shop-react-mac.netlify.app/",
    type: "study",
  },
  {
    id: "proj-4",
    title: "Heroes App",
    description:
      'A comprehensive web application built with React and TypeScript using Vite. This project focuses on advanced state management through the Context API, custom Hooks, and a scalable file structure. Developed as part of the "React: De cero a experto" course by DevTalles (Udemy) to master modern frontend architecture and type-safe development.',
    technologies: ["React", "TypeScript", "Vite", "Context API"],
    link: "https://roaring-heliotrope-7cfb9c.netlify.app/",
    type: "study",
  },
];
