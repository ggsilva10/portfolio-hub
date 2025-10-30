import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-150px)] flex flex-col items-center justify-center text-center p-4">

        <h1 className="text-4xl md:text-6xl font-bold mb-2">
          Gustavo Gonçalves
        </h1>

        <h2 className="text-2xl md:text-4xl font-semibold text-emerald-400 mb-6">
          Desenvolvedor Full-Stack.
        </h2>

        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl">
          Construo soluções web completas, do Back-end (Node.js, Flask) ao Front-end (React, Next.js).
        </p>

        <div className="flex gap-4">
          <a
            href="/roadmap"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Roadmap de Projetos
          </a>
          <a
            href="https://github.com/ggsilva10"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-700 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-zinc-400 hover:text-emerald-400 transition-colors"
          arial-label="Rolar para a seção Sobre Mim"
        >
          <FaChevronDown size={24} />
        </a>

      </section>

      {/* SEÇÃO 2: SOBRE MIM */}
      <section id="about" className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          Minha Trajetória
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Coluna da Esquerda: Texto */}
          <div className="text-lg text-zinc-300 space-y-4">
            <p>
              Sou um desenvolvedor focado em habilidades Full-Stack.
              Minha experiência profissional me proporcionou uma base sólida em
              ambientes Linux, consumo de APIs (Postman) e automação com Python e JavaScript.
            </p>

            {/* Parágrafo 1 */}
            <p>
              Minha experiência acadêmica inclui o desenvolvimento de uma aplicação
              completa com Python e Flask, onde fui responsável pela criação de
              endpoints da API RESTful e gerenciamento do banco de dados.
            </p>

            {/* Parágrafo 2 */}
            <p>
              Este portfólio é meu roadmap técnico. O objetivo é demonstrar minha
              evolução no ecossistema React, Node.js e TypeScript através de
              projetos.
            </p>

            <a
              href="https://www.linkedin.com/in/ggsilva10/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-emerald-400 hover:text-emerald-300 transition-colors font-bold"
            >
              Conecte-se comigo no LinkedIn →
            </a>
          </div>

          {/* Coluna da Direita: Skills*/}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Toolkit Técnico</h3>

            <h4 className="text-lg font-semibold mb-3 text-zinc-100">Back-End & DevOps</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Python</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Flask</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Node.js</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Linux</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">MongoDB</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">PostgreSQL</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Docker</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Azure</span>
            </div>

            <h4 className="text-lg font-semibold mb-3 text-zinc-100">Front-End & Ferramentas</h4>
            <div className="flex flex-wrap gap-3">
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">JavaScript</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">TypeScript</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">React</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Next.js</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">HTML/CSS</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">TailwindCSS</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Git & GitHub</span>
              <span className="bg-zinc-700 text-zinc-200 py-2 px-4 rounded-lg">Postman</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}