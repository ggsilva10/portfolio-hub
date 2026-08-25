import { FaGithub, FaPlay, FaCode } from 'react-icons/fa';
import { Zap, Shield, ShieldAlert, Box } from 'lucide-react';
import { DiagramVisual } from '@/components/DiagramVisual';
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

type ProjectStatus = 'Completed' | 'In Progress' | 'Planned' | string;
type ProjectCategory = 'Front-End' | 'Back-End' | 'FRONT-END' | 'BACK-END' | string;

type ProjectCardProps = {
  title: string;
  description: string;
  githubLink?: string;
  githubUrl?: string;
  liveDemoLink?: string; 
  demoUrl?: string;
  status: ProjectStatus; 
  category: ProjectCategory;
  technologies?: string[];
  techStack?: string[];
  demoType?: 'swagger' | 'website' | 'live' | 'soon' | string;
  imageUrl?: string;
  diagramType?: string;
  gradientTheme?: string;
  featureTag?: string;
  level?: 'Medium' | 'Advanced' | string;
};

const GRADIENT_MAP: Record<string, string> = {
  'purple-indigo': 'bg-gradient-to-br from-[#3b0764] via-[#240644] to-[#120224] border-purple-900/40',
  'emerald-teal': 'bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#011712] border-emerald-900/40',
  'cyber-cyan': 'bg-gradient-to-br from-[#075985] via-[#082f49] to-[#031525] border-cyan-900/40',
  'sunset-amber': 'bg-gradient-to-br from-[#9a3412] via-[#5b1c0a] to-[#2c0b02] border-amber-900/40',
};

const statusColors: Record<string, string> = {
  Completed: 'bg-emerald-800 text-emerald-100',
  'In Progress': 'bg-yellow-800 text-yellow-100',
  Planned: 'bg-zinc-700 text-zinc-300',
};

const categoryColors: Record<string, string> = {
  'Front-End': 'border-blue-500 text-blue-600 dark:text-blue-400',
  'Back-End': 'border-purple-500 text-purple-600 dark:text-purple-400',
  'FRONT-END': 'border-blue-500 text-blue-600 dark:text-blue-400',
  'BACK-END': 'border-purple-500 text-purple-600 dark:text-purple-400',
  'Full-Stack': 'border-orange-500 text-orange-600 dark:text-orange-400',
  'Data Science/Python': 'border-green-500 text-green-600 dark:text-green-400',
};

const getTechIcon = (tech: string) => {
  const iconProps = { className: "text-lg" };
  switch (tech.toLowerCase()) {
    case 'jwt auth': return <ShieldAlert size={16} className="text-purple-400" />;
    case 'knex.js': return <span className="font-black text-[14px] text-orange-500">K</span>;
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
  githubUrl,
  liveDemoLink, 
  demoUrl,
  status,
  category,
  technologies,
  techStack,
  demoType,
  imageUrl,
  diagramType,
  gradientTheme,
  featureTag,
  level
}: ProjectCardProps) => {
  const isCompleted = status === 'Completed';
  const finalGithub = githubUrl || githubLink || '#';
  const finalDemo = demoUrl || liveDemoLink;
  const finalTechs = techStack || technologies || [];

  return (
    <div className="flex flex-col bg-white dark:bg-[#14151c] rounded-2xl border border-zinc-200 dark:border-[#272a38] overflow-hidden shadow-2xl h-full group">
      
      {/* Banner Vetorial do Topo */}
      <div className={`relative w-full overflow-hidden border-b p-5 sm:p-6 flex flex-col justify-between min-h-[175px] sm:min-h-[190px] ${GRADIENT_MAP[gradientTheme || 'purple-indigo'] || 'bg-zinc-950 border-zinc-800/80'}`}>
        {/* Efeito de Malha (Grid) de fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none" />
        
        {/* Títulos em Destaque (Stickers) */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mt-0.5">
            <span className="px-3 py-1.5 bg-[#121318]/95 text-white font-extrabold text-lg sm:text-xl rounded-md shadow-md border border-black/40 tracking-tight">
              {title}
            </span>
            {featureTag && (
              <span className="px-3 py-1.5 bg-emerald-500 text-white font-black text-lg sm:text-xl rounded-md shadow-md tracking-tight">
                {featureTag}
              </span>
            )}
          </div>
        </div>

        {/* Injeção do SVG Nativo */}
        {diagramType && (
          <div className="relative z-10 w-full mt-3 flex justify-center items-end">
            <DiagramVisual type={diagramType} />
          </div>
        )}
      </div>

      {/* Área de Conteúdo: flex-grow garante que o rodapé seja empurrado para alinhar cards lado a lado */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow bg-white dark:bg-transparent">
        
        <div className="mb-6">
          {/* Categoria e Status */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase font-mono">{category}</span>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">{status}</span>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-3">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Badges de Tecnologias */}
          <div className="flex flex-wrap gap-2">
            {finalTechs.map((tech) => (
              <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 dark:bg-[#1c1e28] border border-zinc-200 dark:border-slate-800 text-xs text-zinc-700 dark:text-slate-200">
                
                {/* Ícones Customizados */}
                {tech === 'Knex.js' && (
                  <div className="flex items-center justify-center font-black text-[9px] bg-[#D25A27] text-white rounded px-1 py-0.5 leading-none">K</div>
                )}
                {tech === 'JWT Auth' && (
                  <Shield className="w-3.5 h-3.5 text-[#D63AFF]" />
                )}
                {tech === 'Zustand' && (
                  <div className="flex items-center justify-center text-[10px] bg-amber-700/80 text-white rounded px-1 py-0.5 leading-none">🐻</div>
                )}
                {tech === 'REST API' && (
                  <Box className="w-3.5 h-3.5 text-slate-400" />
                )}
                
                {/* Fallback para os outros ícones nativos (React, Node, etc) */}
                {!['Knex.js', 'JWT Auth', 'Zustand', 'REST API'].includes(tech) && (
                  getTechIcon(tech)
                )}

                {/* Nome da Tecnologia */}
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé Fixo na base */}
        <div className="mt-auto pt-5 border-t border-zinc-200 dark:border-[#272a38] flex flex-wrap items-center justify-between gap-4">
          {/* Feature Tag c/ Ícone Shield Exato */}
          <div className="flex items-center gap-2">
            {title === 'TaskFlow API' ? (
              <Shield className="w-4 h-4 text-amber-500 flex-shrink-0"/>
            ) : (
              <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0"/>
            )}
            <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 leading-tight max-w-[100px]">
              {featureTag}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Badge Advanced/Medium */}
            {level && (
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${level === 'Advanced' ? 'bg-purple-950/80 border border-purple-800/60 text-purple-300' : 'bg-amber-950/80 border border-amber-800/60 text-amber-300'}`}>
                {level}
              </span>
            )}
            <div className="flex items-center gap-3">
              <a 
                href={finalGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-500 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors text-xs font-medium"
              >
                <FaGithub className="text-sm" />
                GitHub
              </a>
              
              {isCompleted && finalDemo && finalDemo !== '#' ? (
                <a 
                  href={finalDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 transition-colors text-xs font-medium
                    ${demoType === 'swagger' 
                      ? 'text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300' 
                      : 'text-zinc-500 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400'}`}
                >
                  {demoType === 'swagger' ? <SiSwagger className="text-sm" /> : <FaPlay className="text-[10px]" />}
                  {demoType === 'swagger' ? 'Swagger UI' : 'Live Demo'}
                </a>
              ) : (
                <span className="flex items-center gap-1 text-zinc-500 cursor-not-allowed text-xs font-medium">
                  <FaPlay className="text-[10px]" />
                  Demo (Soon)
                </span>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};