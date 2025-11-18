import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'Project 1: FilmFinder (Front-End)',
    description: 'A responsive dashboard for searching and exploring movies, built with Next.js, TypeScript, and Zustand for state management.',
    githubLink: 'https://github.com/ggsilva10/film-finder',
    liveDemoLink:'https://film-finder-nu.vercel.app/',
    status: 'Completed' as const,
  },
  {
    title: 'Project 2: TaskFlow API (Back-End)',
    description: 'API RESTful API for a task manager. Focus on Node.js, SWT authentication, and database management (PostgreSQL with Prisma).',
    githubLink: 'https://github.com/ggsilva10/taskflow-api',
    status: 'Planned' as const,
  },
  {
    title: 'Project 3: BookMark (Full-Stack)',
    description: 'A full-stack service scheduling system, integrating the React front-end with the TaskFlow API and busmiess logic .',
    githubLink: 'https://github.com/ggsilva10/bookmark',
    status: 'Planned' as const,
  },
  {
    title: 'Project 4: Deep Dive (DevOps/Cache)',
    description: 'Evolving the TaskFlow API. Focus on performace with Redis caching and building a CI/CD pipeline (Docker & GitHub Actions)',
    githubLink: 'https://github.com/ggsilva10/taskflow-api',
    status: 'Planned' as const,
  },
 
  {
    title: 'Capstone Project: Habit Tracker(Python)',
    description: 'Full-stack Habit Tracker built as a Capstone Project. Developed backend logic using Python/Flask and architected a RESTful API to monitor user progress and ensure data persistence.',
    githubLink: 'https://github.com/ggsilva10/Projeto-de-Software.git',
    status: 'Completed' as const,
    demoLink:  '#'
  },
];

export default function RoadmapPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Project Roadmap
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
            status={project.status}
          />
        ))}

      </div>
    </section>
  );
}