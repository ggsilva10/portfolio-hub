import { FaChevronDown, FaGithub, FaLinux, FaDocker } from "react-icons/fa";
import {
  SiPython, 
  SiFlask, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql, 
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostman,
  SiGit
} from "react-icons/si"

export default function Home() {

  const backendSkills = [
    { name: 'Python', icon: SiPython },
    { name: 'Flask', icon: SiFlask },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Linux', icon: FaLinux },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Docker', icon: FaDocker },
  ];

  const frontendSkills = [
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Postman', icon: SiPostman },
  ];
  return (

    <>
      <section className="relative min-h-[calc(100vh-150px)] flex flex-col items-center justify-center text-center">

        <h1 className="text-3xl md:text-6xl font-bold mb-2 text-zinc-900 dark:text-white">
          Hello, I'm Gustavo Gonçalves
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
          a Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
          Building end-to-end web solutions, from Back-end (Node.js, Flask) 
          to Front-end (React, Next.js).
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
            className="bg-zinc-700 hover:bg-zinc-800 text-white dark:text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </div>
        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Scroll to About Me section"
        >
          <FaChevronDown size={24} />
        </a>

      </section>

      <section id="about" className="py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-zinc-900 dark:text-white">
          My Background
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-2 md:px-0">
          
          <div className="text-base md:text-lg text-zinc-700 dark:text-zinc-300 space-y-6 leading-loose text-justify hyphens-auto">
            <p>
              I'm a developer focused on honing my Full-Stack skills. 
              My professional experience has given me a solid foundation in 
              Linux environments, API consumption (Postman), and automation with JavaScript.
            </p>
            <p>
              My academic background includes developing a complete software 
              application using Python and Flask, where I was responsible for creating 
              RESTful API endpoints and managing the database.
            </p>
            <p>
              This portfolio is my technical roadmap. The goal is to demonstrate my 
              evolution in the React, Node.js, and TypeScript ecosystem by building 
              projects of increasing complexity.
            </p>
            
            <div className="text-left">
              <a 
                href="https://www.linkedin.com/in/ggsilva10/"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors font-bold mt-2"
              >
                Connect with me on LinkedIn →
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-600 dark:text-emerald-400 mt-8 md:mt-0">
              Technical Toolkit
            </h3>
            
            <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Back-End & DevOps</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {backendSkills.map((skill) => (
                <span 
                  key={skill.name} 
                  className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 py-2 px-4 rounded-lg font-medium text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-default"
                >
                  <skill.icon className="text-lg" />
                  {skill.name}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Front-End & Tools</h4>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill) => (
                <span 
                  key={skill.name} 
                  className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 py-2 px-4 rounded-lg font-medium text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-default"
                >
                  <skill.icon className="text-lg" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}