"use client";

import Link from 'next/link';
import { ThemeSwitch } from './ThemeSwitch';

export default function Header() {
  return (
    <header className="w-full bg-zinc-100 dark:bg-zinc-900 p-4 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
          Gustavo Gonçalves
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/roadmap" className="text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Roadmap
            </Link>
          </nav>
          <ThemeSwitch/>
        </div>
      </div>
    </header>
  );
}