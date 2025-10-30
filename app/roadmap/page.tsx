import { ProjectCard } from '@/components/ProjectCard';

// 1. Definição dos projetos
const projects = [
  {
    title: 'Projeto 1: FilmFinder (Front-End)',
    description: 'Aplicação Front-end para consumir a API REST do TMDB. Foco em gerenciamento de estado (Zustand) e requisições assíncronas com TypeScript.',
    githubLink: 'https://github.com/ggsilva10/filmfinder', // (Exemplo)
    status: 'Em Andamento' as const, // Use 'as const' para o TypeScript
  },
  {
    title: 'Projeto 2: TaskFlow API (Back-End)',
    description: 'API RESTful para um gestor de tarefas. Foco em arquitetura Node.js, autenticação (JWT) e manipulação de banco de dados (PostgreSQL com Prisma).',
    githubLink: 'https://github.com/ggsilva10/taskflow-api',
    status: 'Planejado' as const,
  },
  {
    title: 'Projeto 3: BookMark (Full-Stack)',
    description: 'Sistema de agendamentos. Foco na integração Full-Stack (React + API do Projeto 2), fluxo de autenticação e regras de negócio.',
    githubLink: 'https://github.com/ggsilva10/bookmark',
    status: 'Planejado' as const,
  },
  {
    title: 'Projeto 4: Deep Dive (DevOps/Cache)',
    description: 'Evolução da API (Projeto 2). Foco em performance com caching (Redis) e na criação de um pipeline de deploy (CI/CD com Docker e GitHub Actions).',
    githubLink: 'https://github.com/ggsilva10/taskflow-api',
    status: 'Planejado' as const,
  },
 
  {
    title: 'Projeto TCC: Controle de Hábitos (Python)',
    description: 'Aplicação acadêmica desenvolvida em Python e Flask, com API RESTful um sistema web completo para ajudar usuários a monitorar e construir hábitos positivos, com funcionalidades de cadastro, login e gerenciamento de banco de dados.',
    githubLink: 'https:github.com/ggsilva10/Projeto-de-Software.git',
    status: 'Concluído' as const,
    demoLink:  '#'// Se tiver um link da demo, adicione aqui
  },
];

export default function RoadmapPage() {
  return (
    <section>
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">
        Roadmap de Projetos
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            status={project.status}
          />
        ))}

      </div>
    </section>
  );
}