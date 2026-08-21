import { FaGithub, FaPlay, FaCode } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiFastify, 
  SiDocker, 
  SiPostgresql, 
  SiPython, 
  SiFlask, 
  SiRedis,
  SiReact,
  SiTailwindcss,
  SiSwagger,
  SiCelery
} from 'react-icons/si';

type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';
type ProjectCategory = 'Front-End' | 'Back-End' | 'Full-Stack' | 'Data Science/Python';

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink?: string; 
  status: ProjectStatus; 
  category: ProjectCategory;
  technologies?: string[];
  demoType?: 'swagger' | 'website' | string;
};

const statusColors = {
  Completed: 'bg-emerald-800 text-emerald-100',
  'In Progress': 'bg-yellow-800 text-yellow-100',
  Planned: 'bg-zinc-700 text-zinc-300',
};

const categoryColors = {
  'Front-End': 'border-blue-500 text-blue-600 dark:text-blue-400',
  'Back-End': 'border-purple-500 text-purple-600 dark:text-purple-400',
  'Full-Stack': 'border-orange-500 text-orange-600 dark:text-orange-400',
  'Data Science/Python': 'border-green-500 text-green-600 dark:text-green-400',
};

const getTechIcon = (tech: string) => {
  const iconProps = { className: "text-lg" };
  switch (tech.toLowerCase()) {
    case 'next.js': return <SiNextdotjs {...iconProps} />;
    case 'typescript': return <SiTypescript {...iconProps} className="text-blue-500" />;
    case 'node.js': return <SiNodedotjs {...iconProps} className="text-green-500" />;
    case 'fastify': return <SiFastify {...iconProps} />;
    case 'docker': return <SiDocker {...iconProps} className="text-blue-400" />;
    case 'postgresql': return <SiPostgresql {...iconProps} className="text-blue-300" />;
    case 'python': return <SiPython {...iconProps} className="text-yellow-500" />;
    case 'flask': return <SiFlask {...iconProps} />;
    case 'redis': return <SiRedis {...iconProps} className="text-red-500" />;
    case 'react': return <SiReact {...iconProps} className="text-blue-400" />;
    case 'tailwind': return <SiTailwindcss {...iconProps} className="text-cyan-400" />;
    case 'celery': return <SiCelery {...iconProps} className="text-green-400" />;
    default: return <FaCode {...iconProps} className="text-zinc-400" />;
  }
};

export const ProjectCard = ({ 
  title, 
  description, 
  githubLink, 
  liveDemoLink, 
  status,
  category,
  technologies = [],
  demoType
}: ProjectCardProps) => {
  const isCompleted = status === 'Completed';

  return (
    <div className={`bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg 
                    transition-all duration-300 hover:scale-[1.03]
                    flex flex-col h-full border border-zinc-200 dark:border-zinc-700
                    ${isCompleted ? 'dark:border-emerald-500/50 dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]' : ''}`}>
      
      <div className="flex justify-between items-start mb-3 gap-2">
        <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
          {title}
        </h3>
        {/* Badge de Status */}
        <span 
          className={`text-xs font-semibold py-1 px-3 rounded-full whitespace-nowrap ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>

      <div className={`text-xs font-semibold uppercase tracking-wider mb-3 pb-2 border-b w-max ${categoryColors[category]}`}>
        {category}
      </div>
      
      <p className="text-zinc-700 dark:text-zinc-300 mb-6 flex-grow">
        {description}
      </p>

      {technologies.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech) => (
            <div key={tech} className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1.5 rounded-md border border-zinc-200 dark:border-zinc-800" title={tech}>
              {getTechIcon(tech)}
              <span>{tech}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-6 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-medium"
        >
          <FaGithub className="text-lg" />
            GitHub
        </a>
        
        {isCompleted && liveDemoLink ? (
          <a 
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors text-sm font-medium
              ${demoType === 'swagger' 
                ? 'text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300' 
                : 'text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400'}`}
          >
            {demoType === 'swagger' ? <SiSwagger className="text-lg" /> : <FaPlay className="text-sm" />}
            {demoType === 'swagger' ? 'Swagger UI' : 'Live Demo'}
          </a>
        ) : (
          <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 cursor-not-allowed text-sm font-medium">
            <FaPlay className="text-sm" />
            Demo (Soon)
          </span>
        )}
      </div>
    </div>
  );
};