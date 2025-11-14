import {FaGithub, FaPlay} from 'react-icons/fa';

type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink?: string; 
  status: ProjectStatus; 
};

const statusColors = {
  Completed: 'bg-emerald-800 text-emerald-100',
  'In Progress': 'bg-yellow-800 text-yellow-100',
  Planned: 'bg-zinc-700 text-zinc-300',
};

export const ProjectCard = ({ 
  title, 
  description, 
  githubLink, 
  liveDemoLink, 
  status 
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg 
                    transition-transform duration-300 hover:scale-[1.03]
                    flex flex-col h-full border border-zinc-200 dark:border-zinc-700">
      
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 pr-2">
          {title}
        </h3>
        {/*Badge de Status */}
        <span 
          className={`text-xs font-semibold py-1 px-3 rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      
      <p className="text-zinc-700 text-zinc-800 dark:text-zinc-300 mb-4">
        {description}
      </p>
      <div className="flex gap-6 mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <FaGithub />
            GitHub
        </a>
        
        {status === 'Completed' && liveDemoLink ? (
          <a 
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <FaPlay />
            Live Demo
          </a>
        ) : (
          <span className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 cursor-not-allowed">
            <FaPlay />
            Demo (Soon)
          </span>
        )}
      </div>
    </div>
  );
};