import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-800 text-zinc-400 py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Gustavo Gonçalves. Todos os direitos reservados.
        </p>

        {/* Links Sociais */}
        {/* 'flex': Ativa o flexbox
          'gap-6': Espaçamento de 1.5rem entre os ícones
          'mt-4': Margem no topo em telas pequenas (mobile)
          'md:mt-0': Remove a margem no topo em telas médias ou maiores
        */}
        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/ggsilva10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} /> 
          </a>
          <a
            href="https://www.linkedin.com/in/ggsilva10/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};