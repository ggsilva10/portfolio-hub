"use client";

import { FaGithub, FaLinux, FaDocker } from "react-icons/fa";
import { ProjectsSection } from "@/components/ProjectsSection";
import ShaderBackground from "@/components/ShaderBackground";
import { Terminal, ChevronDown, ChevronUp } from "lucide-react";
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
} from "react-icons/si";

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
    <div className="relative overflow-hidden">
      <ShaderBackground />
      <section id="home" className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center">

        <h1 className="text-3xl md:text-6xl font-bold mb-2 text-zinc-900 dark:text-white">
          Hello, I'm Gustavo Gonçalves
        </h1>

        <h2 className="text-xl md:text-4xl font-semibold text-emerald-600 dark:text-emerald-400 mb-6">
          a Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-lg mx-auto text-center text-balance mb-8">
          Full-Stack Software Engineer focused on scalable architectures. I transform complex business rules into high-performance APIs and modern interfaces.
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Projects
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
          className="absolute bottom-10 text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
          aria-label="Scroll down to About"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </a>

      </section>

      <section id="about" className="relative z-10 w-full min-h-screen flex flex-col justify-between items-center pt-24 pb-6">
        <div className="w-full flex justify-center mt-4">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
            aria-label="Scroll up to Home"
          >
            <ChevronUp className="w-8 h-8 animate-bounce" />
          </a>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl text-zinc-900 dark:text-white font-bold tracking-tight">
              About <span className="text-emerald-400">Me</span>
            </h1>
            <div className="w-16 h-1 bg-emerald-400/30 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
            {/* Coluna de Texto (Mantendo o copy profissional) */}
            <div className="lg:col-span-6 flex flex-col gap-6 p-8 rounded-2xl bg-zinc-100/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
                I'm a Full-Stack Developer specialized in the JavaScript/TypeScript and Python ecosystems. With practical experience in developing and maintaining corporate systems and analytical tools, I work from database modeling to building dynamic user interfaces.
              </p>
              
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify mt-2">
                My focus is on designing resilient systems, efficient APIs, and seamless integrations. I am passionate about building projects of increasing complexity, utilizing tools like Node.js, Next.js, Fastify, and microservices architectures to solve real-world problems.
              </p>
              
              <div className="mt-8 pt-6 border-t border-zinc-800/50">
                <a 
                  href="https://www.linkedin.com/in/ggsilva10/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                >
                  Connect with me on LinkedIn
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Coluna do Toolkit */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="text-emerald-400 w-8 h-8"/>
                <h2 className="text-2xl text-emerald-400 font-bold tracking-tight">Technical Toolkit</h2>
              </div>

              <div className="flex flex-col gap-8">
                {/* Back-End & DevOps */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-sm flex items-center gap-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                    Back-End & DevOps
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {backendSkills.map((tech) => (
                      <span key={tech.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 text-sm text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(78,222,163,0.15)] transition-all cursor-default">
                        <tech.icon className="text-lg" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Front-End & Tools */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-zinc-900 dark:text-zinc-100 uppercase tracking-widest text-sm flex items-center gap-2 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    Front-End & Tools
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {frontendSkills.map((tech) => (
                      <span key={tech.name} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200/80 dark:border-zinc-800/80 text-sm text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(78,222,163,0.15)] transition-all cursor-default">
                        <tech.icon className="text-lg" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <a 
            href="#projects" 
            className="text-zinc-400 dark:text-zinc-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300"
            aria-label="Scroll down to projects"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </div>
      </section>

      <ProjectsSection />
    </div>
  );
}