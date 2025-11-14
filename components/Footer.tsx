import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 py-8 mt-12 border-t border-zinc-200 dark:border-zinc-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Gustavo Gonçalves. Todos os direitos reservados.
        </p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://github.com/ggsilva10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} /> 
          </a>
          <a
            href="https://www.linkedin.com/in/ggsilva10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};