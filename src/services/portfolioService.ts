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
    slug: "somoshuizy",
    title: "SomosHuizy",
    tagline:
      "Dual-purpose platform for eco-friendly artisanal products and used cooking oil collection, powering a circular economy initiative in Manizales.",
    type: "real",
    summary:
      "SomosHuizy is a dual-purpose web platform driving a circular economy initiative in Manizales. For the end-user, it serves as an e-commerce store to purchase eco-friendly artisanal soaps and cosmetics, while also providing a streamlined scheduling system to request the home collection of used cooking oil for recycling.",
    role: "Full Stack Web Developer & Systems Engineer. Responsible for end-to-end development: designing the NoSQL database schema, building the REST API, implementing the security layer (JWT, RBAC), developing the React frontend, and ensuring data integrity between the client and server.",
    problemStatement:
      "The business struggled with manual, disjointed processes. Managing inventory, processing orders, and coordinating used oil collections were likely handled entirely via WhatsApp or spreadsheets. This led to inventory discrepancies, risk of spam in collection requests, and a lack of a centralized dashboard to track business growth and user data securely.",
    solutionOverview:
      "I built a full-stack platform featuring a public storefront and a secure back-office. The system calculates prices dynamically on the backend to prevent tampering, manages product variants (presentations/weights), and routes checkout data to WhatsApp for final coordination. It also includes a public, rate-limited form for oil collection, all manageable by the business owner through an admin dashboard.",
    architecture:
      "React (Vite/JS) → REST API → Express/Node → MongoDB Atlas · Deploy: Vercel (Frontend) + Render/Railway (Backend) + MongoDB Atlas (Database)",
    keyChallenges: [
      {
        title: "Preventing Race Conditions",
        problem: "Managing inventory when multiple users checkout simultaneously.",
        solution:
          "Implemented MongoDB Sessions and ACID transactions with $inc to ensure atomic stock updates.",
      },
      {
        title: "Price Manipulation",
        problem: "Preventing users from altering cart totals via the browser.",
        solution:
          "Shifted all price calculations to the backend, querying the database directly as the single source of truth before saving the order.",
      },
      {
        title: "Form Abuse",
        problem: "Protecting the public oil collection form from spam bots.",
        solution:
          "Implemented express-rate-limit on the backend to restrict requests per IP address.",
      },
    ],
    technicalDecisions: [
      {
        decision: "MongoDB",
        rationale:
          "Chosen for its flexible schema, allowing products to have dynamic arrays of presentations (different weights and prices) without complex SQL joins.",
      },
      {
        decision: "React + Context API",
        rationale:
          "Selected to build a snappy SPA and effectively manage global states like the user session and shopping cart without prop-drilling.",
      },
      {
        decision: "Node/Express (ES Modules)",
        rationale:
          "Provided a lightweight, fast environment to build the REST API, keeping the entire stack in a single language (JavaScript) for rapid development.",
      },
    ],
    outcomes: [
      "Delivered a fully functional MVP that automates stock tracking and centralizes collection requests.",
      "Eliminated manual order calculation errors by enforcing backend price validation.",
      "Created a secure, role-based admin environment to manage the entire business logic without touching code.",
    ],
    learnings: [
      "Deepened understanding of database atomicity and how to handle distributed transactions in NoSQL databases.",
      "Mastered defensive programming techniques on the backend, specifically preventing Mass Assignment and securing JWT payloads.",
      "Learned to bridge the gap between frontend UX (loading states, error handling) and backend infrastructure.",
    ],
    nextSteps: [
      "Migrate the codebase to TypeScript for stricter type safety.",
      "Integrate a formal payment gateway (e.g., MercadoPago or Wompi) to handle transactions directly on the platform instead of routing to WhatsApp.",
      "Implement automated email notifications (via SendGrid/Nodemailer) for order confirmations and collection status updates.",
    ],
    technologies: [
      "MongoDB Atlas",
      "Express",
      "React",
      "Node.js",
      "Vercel",
      "Render",
    ],
    liveLink: "https://somoshuizy.vercel.app/",
    repoLink: "https://github.com/Macheta06/huizy-store",
  },
  {
    id: "proj-2",
    slug: "hardware-store",
    title: "Hardware Store Website",
    tagline:
      "Digital catalog and inventory management platform for a physical retail business.",
    type: "real",
    summary:
      'HardwareStore ("El Agropecuario") is a digital catalog and inventory management platform built for a physical retail business. It allows customers to browse categorized products online while providing the business owner with a centralized, real-time system to track stock levels, manage pricing, and prepare for in-store point-of-sale operations.',
    role: "Sole Full Stack Engineer. I designed the MongoDB database schema, developed the REST API, built the React frontend, and managed the end-to-end cloud infrastructure and deployment process on shared hosting environments.",
    problemStatement:
      "The business relied entirely on manual inventory tracking and had no digital footprint. Customers lacked visibility into available stock without visiting the store, and the owner struggled to maintain accurate counts, track real profit margins, and manage catalog updates efficiently without paying expensive, recurring SaaS subscriptions.",
    solutionOverview:
      "A fully decoupled web application featuring a public-facing digital catalog and a secure administrative backend. It synchronizes inventory dynamically and serves as the foundational data layer. The system is designed to seamlessly integrate with a future Point of Sale (POS) module, ensuring that online and physical sales instantly update a single source of truth.",
    architecture:
      "React/Vite (TS) → REST API (Express/Node + TS) → MongoDB Atlas · Deploy: Hostinger — frontend and backend as isolated, decoupled Web Apps communicating via HTTPS",
    keyChallenges: [
      {
        title: "Infrastructure Configuration & Process Lifecycle",
        problem:
          "Deploying a compiled TypeScript backend on Hostinger's shared environment caused silent process crashes.",
        solution:
          "Resolved by debugging the process manager logs, injecting a postinstall compilation script, and strictly defining the entry points.",
      },
      {
        title: "Express 5 Routing & Strictness",
        problem:
          "Upgrading to Express 5 broke standard wildcard routes (causing instant 503 errors on boot).",
        solution:
          "Refactored the routing layer to use RegEx-based paths to ensure compatibility and stability.",
      },
      {
        title: "Network Resilience (Cold Starts)",
        problem:
          "The backend hosting aggressively suspended idle processes, causing Failed to fetch errors on initial loads.",
        solution:
          "Implemented an exponential backoff retry pattern in the React frontend and utilized a cron-job to keep the Node.js process alive.",
      },
    ],
    technicalDecisions: [
      {
        decision: "Node.js / Express",
        rationale:
          "Lightweight and highly customizable. Combined with TypeScript, it provided the type safety needed to prevent runtime errors without the overhead of heavier frameworks.",
      },
      {
        decision: "React & Vite",
        rationale:
          "Vite offered significantly faster build times compared to Webpack, creating a highly optimized Single Page Application (SPA) for instantaneous catalog navigation.",
      },
      {
        decision: "MongoDB",
        rationale:
          "The flexible document schema was essential. Hardware products have vastly different attributes (weights, dimensions, brands, specific use cases) that don't fit cleanly into rigid SQL tables.",
      },
      {
        decision: "Hostinger",
        rationale:
          "Provided an extremely cost-effective solution for a local business, eliminating the need for expensive cloud providers while still allowing for a custom decoupled architecture.",
      },
    ],
    outcomes: [
      "Successfully launched a production-ready digital catalog that eliminates manual stock inquiries.",
      "Delivered a highly customized, scalable foundation that saves the owner thousands of dollars in annual SaaS fees while maintaining full ownership of their data.",
    ],
    learnings: [
      'Cloud Realities: Deploying on shared environments requires a much deeper understanding of internal process managers (like Phusion Passenger) compared to "plug-and-play" PaaS platforms.',
      "Frontend Resilience: A robust frontend must be engineered to expect network failures and backend latency, handling errors gracefully through automated retries rather than exposing them to the user.",
    ],
    nextSteps: [
      "Developing a dedicated, sub-domain-hosted Point of Sale (POS) module to handle physical in-store transactions. This will include thermal receipt printing capabilities and real-time inventory deduction directly linked to the central API.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TailwindCSS",
      "Express",
      "Node.js",
      "MongoDB Atlas",
      "Hostinger",
    ],
    liveLink: "https://elagropecuariomadrid.com/",
    repoLink: "https://github.com/Macheta06/agropecuario-website",
  },
  {
    id: "proj-3",
    slug: "teslo-shop",
    title: "Teslo | Shop",
    tagline:
      "React and TypeScript application focused on an admin dashboard, authorization forms, and file uploads.",
    type: "study",
    summary:
      'A comprehensive web application built with React and TypeScript using Vite. This project focuses on create an admin dashboard, authorization forms and files upload. Developed as part of the "React: De cero a experto" course by DevTalles (Udemy) to master modern frontend architecture and type-safe development.',
    role: "Solo course project developed by following the 'React: De cero a experto' course by DevTalles (Udemy).",
    keyChallenges: [
      {
        title: "JWT Authentication & Protected Routes",
        problem:
          "The admin dashboard required authentication so that only logged-in users could access protected areas of the application.",
        solution:
          "Implemented a JWT-based auth flow with token handling and protected routes to secure the admin section.",
      },
      {
        title: "File Uploads",
        problem:
          "The admin dashboard needed to support file uploads as part of its data-entry flows.",
        solution:
          "Integrated file uploads into the admin forms and handled the full submission flow with form state.",
      },
    ],
    learnings: [
      "Authentication flows with JWT and protecting routes in a React SPA.",
      "State management with Zustand for a streamlined global store.",
      "Handling file uploads and form data in admin interfaces.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Zustand"],
    liveLink: "https://teslo-shop-react-mac.netlify.app/",
    repoLink: "https://github.com/Macheta06/teslo-shop",
  },
  {
    id: "proj-4",
    slug: "heroes-app",
    title: "Heroes App",
    tagline:
      "React and TypeScript application focused on advanced state management with the Context API and custom Hooks.",
    type: "study",
    summary:
      'A comprehensive web application built with React and TypeScript using Vite. This project focuses on advanced state management through the Context API, custom Hooks, and a scalable file structure. Developed as part of the "React: De cero a experto" course by DevTalles (Udemy) to master modern frontend architecture and type-safe development.',
    role: "Solo course project developed by following the 'React: De cero a experto' course by DevTalles (Udemy).",
    keyChallenges: [
      {
        title: "Global State with Context & Reducer",
        problem:
          "The app needed to share global state across nested components without prop drilling.",
        solution:
          "Combined Context with a reducer to centralize state updates and keep components decoupled.",
      },
      {
        title: "Search State in the URL",
        problem:
          "Search results needed to persist across navigation and page refreshes.",
        solution:
          "Synced the search state with URL query parameters and restored it on load.",
      },
    ],
    learnings: [
      "Lazy loading routes and components to keep the initial bundle lean.",
      "Data fetching and server state with TanStack Query.",
      "Keeping UI state in sync with URL query parameters.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Context API", "TanStack Query"],
    liveLink: "https://roaring-heliotrope-7cfb9c.netlify.app/",
    repoLink: "https://github.com/Macheta06/heroes-app",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  getProjects().find((project) => project.slug === slug);
