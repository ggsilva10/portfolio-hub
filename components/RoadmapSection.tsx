import { ProjectCard } from '@/components/ProjectCard';

type ProjectCategory = 'Front-End' | 'Back-End';

const projects = [
  {
    title: "Price Tracker API (Microservices)",
    description: "An asynchronous e-commerce price tracking system. Built with a microservices architecture using Flask, Celery, and Redis to monitor price drops automatically. It features strategies to bypass anti-bot mechanisms and handles complex database concurrency.",
    status: "Completed",
    category: "BACK-END",
    techStack: ["Python", "Flask", "Celery", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/ggsilva10/price-tracker",
    demoUrl: "/api-docs/price-tracker",
    demoType: "swagger",
    diagramType: "microservices-flow",
    gradientTheme: "purple-indigo",
    featureTag: "Async Engine",
    level: "Advanced"
  },
  {
    title: "FilmFinder",
    description: "A responsive dashboard for searching and exploring movies, built with Next.js, TypeScript, and Zustand for state management.",
    status: "Completed",
    category: "FRONT-END",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind", "Zustand"],
    githubUrl: "https://github.com/ggsilva10/filmfinder",
    demoUrl: "https://film-finder-nu.vercel.app/",
    demoType: "live",
    diagramType: "movie-dashboard-state",
    gradientTheme: "cyber-cyan",
    featureTag: "Zustand State Store",
    level: "Medium"
  },
  {
    title: "TaskFlow API",
    description: "A robust RESTful API built with Node.js and Fastify using a layered architecture. The system manages stateless JWT authentication, password encryption via bcrypt, and relational database orchestration with PostgreSQL running on Docker. The infrastructure focuses on security and referential integrity, leveraging Knex.js for migrations and UUID-based primary keys to ensure a scalable and isolated environment.",
    status: "Completed",
    category: "BACK-END",
    techStack: ["Node.js", "Fastify", "TypeScript", "PostgreSQL", "Docker", "Knex.js", "JWT Auth"],
    githubUrl: "https://github.com/ggsilva10/taskflow-api",
    demoUrl: "/api-docs/taskflow",
    demoType: "swagger",
    diagramType: "layered-fastify-jwt",
    gradientTheme: "emerald-teal",
    featureTag: "Stateless JWT & UUIDs",
    level: "Advanced"
  },
  {
    title: "Habit Tracker",
    description: "Backend service for a Habit Tracker built as a Capstone Project. Developed using Python/Flask, architecting a RESTful API to monitor user progress and ensure data persistence.",
    status: "Completed",
    category: "BACK-END",
    techStack: ["Python", "Flask", "PostgreSQL", "REST API"],
    githubUrl: "https://github.com/ggsilva10/habit-tracker",
    demoUrl: "#", 
    demoType: "soon",
    diagramType: "habit-progress-tracker",
    gradientTheme: "sunset-amber",
    featureTag: "Streaks & Persistence",
    level: "Medium"
  }
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Project Roadmap
      </h1>
      
      <p className="text-center text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12 max-w-2xl mx-auto">
        A collection of my past, current, and future projects.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            status={project.status}
            category={project.category}
            techStack={project.techStack}
            demoType={project.demoType}
            diagramType={project.diagramType}
            gradientTheme={project.gradientTheme}
            featureTag={project.featureTag}
            level={project.level}
          />
        ))}
      </div>
    </section>
  );
}
