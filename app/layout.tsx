import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer'; // 1. Importe o Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfólio de [Seu Nome]',
  description: 'Desenvolvedor Full-Stack em busca de desafios.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Adicionamos 'flex flex-col min-h-screen' ao body */}
      {/* Isso é um truque de flexbox para garantir que o Footer
          "grude" no fim da página, mesmo em páginas com pouco conteúdo. */}
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 flex flex-col min-h-screen`}>
        
        <Header />

        {/* 'flex-grow': Faz o conteúdo principal "empurrar" o footer para baixo */}
        <main className="container mx-auto py-8 flex-grow">
          {children}
        </main>
        
        <Footer /> {/* 2. Adicione o Footer aqui */}
      </body>
    </html>
  );
}