import Link from 'next/link';

// 1. Definimos os status possíveis
type ProjectStatus = 'Concluído' | 'Em Andamento' | 'Planejado';

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink: string;
  demoLink?: string; // Link da demo é opcional
  status: ProjectStatus; // Status é obrigatório
};

// Objeto para mapear status para cores do Tailwind
const statusColors = {
  Concluído: 'bg-emerald-800 text-emerald-100',
  'Em Andamento': 'bg-yellow-800 text-yellow-100',
  Planejado: 'bg-zinc-700 text-zinc-300',
};

export const ProjectCard = ({ 
  title, 
  description, 
  githubLink, 
  demoLink, 
  status 
}: ProjectCardProps) => {
  return (
    // 2. Adicionamos 'flex flex-col' para que o card ocupe a altura total
    //    e possamos usar 'mt-auto' nos links.
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg 
                    transition-transform duration-300 hover:scale-[1.03]
                    flex flex-col h-full">
      
      {/* 3. Cabeçalho do Card com Título e Status */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-emerald-400 pr-2">
          {title}
        </h3>
        {/* 4. Badge de Status */}
        <span 
          className={`text-xs font-semibold py-1 px-3 rounded-full ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
      
      <p className="text-zinc-300 mb-4">
        {description}
      </p>

      {/* 5. Links de Ação (usando 'mt-auto' para grudar no fundo) */}
      <div className="flex gap-4 mt-auto pt-4 border-t border-zinc-700/50">
        <a 
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-emerald-400 transition-colors"
        >
          GitHub
        </a>
        
        {/* 6. Lógica Condicional para o link "Ver Demo" */}
        {status === 'Concluído' && demoLink ? (
          <a 
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-emerald-400 transition-colors"
          >
            Ver Demo
          </a>
        ) : (
          <span className="text-zinc-500 cursor-not-allowed">
            Demo (Em Breve)
          </span>
        )}
      </div>
    </div>
  );
};