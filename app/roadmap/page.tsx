import { ProjectCard } from '@/components/ProjectCard';

type ProjectCategory = 'Back-End' | 'Front-End';

const projects = [
    {
    title: 'Price Tracker API (Microservices)',
    description: 'An asynchronous e-commerce price tracking system. Built with a microservices architecture using Flask, Celery, and Redis to monitor price drops automatically. It features strategies to bypass anti-bot mechanisms and handles complex database concurrency.',
    githubLink: 'https://github.com/ggsilva10/price-tracker',
    liveDemoLink: '/api-docs/price-tracker',
    demoType: 'swagger' as const,
    status: 'Completed' as const,
    category: 'Back-End' as ProjectCategory,
    technologies: ['Python', 'Flask', 'Celery', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'FilmFinder',
    description: 'A responsive dashboard for searching and exploring movies, built with Next.js, TypeScript, and Zustand for state management.',
    githubLink: 'https://github.com/ggsilva10/film-finder',
    liveDemoLink:'https://film-finder-nu.vercel.app/',
    status: 'Completed' as const,
    category: 'Front-End' as ProjectCategory,
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'TaskFlow API',
    description: 'API RESTful API for a task manager. Focus on Node.js, JWT authentication, and database management (PostgreSQL with Docker).',
    githubLink: 'https://github.com/ggsilva10/taskflow-api',
    liveDemoLink: '/api-docs/taskflow',
     demoType: 'swagger' as const,
    status: 'Completed' as const,
    category: 'Back-End' as ProjectCategory,
    technologies: ['Node.js', 'Fastify', 'TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Habit Tracker',
    description: 'Full-stack Habit Tracker built as a Capstone Project. Developed backend logic using Python/Flask and architected a RESTful API to monitor user progress and ensure data persistence.',
    githubLink: 'https://github.com/ggsilva10/Projeto-de-Software.git',
    status: 'Completed' as const,
    category: 'Back-End' as ProjectCategory,
    technologies: ['Python', 'Flask', 'PostgreSQL'],
  },
];

export default function RoadmapPage() {
  return (
    <section className="py-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        Project Roadmap
      </h1>
      
      <p className="text-center text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
        A collection of my past, current, and future projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
            status={project.status}
            category={project.category}
            technologies={project.technologies}
            demoType={(project as any).demoType}
          />
        ))}
      </div>
    </section>
  );
}