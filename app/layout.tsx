import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; 
import Header from '@/components/Header'; 
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gustavo Gonçalves | Portfolio',
  description: 'Full-Stack Developer focused on modern web solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${inter.className} 
        bg-white dark:bg-zinc-950 
        text-zinc-900 dark:text-zinc-50 
        flex flex-col min-h-screen transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header /> 
          
          <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-grow">
            {children}
          </main>
          
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}