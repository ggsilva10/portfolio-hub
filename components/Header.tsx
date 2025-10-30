import Link from 'next/link';

export const Header = () => {
  return (
    // <header> é uma tag semântica de HTML para cabeçalhos
    // 'w-full': Largura 100%
    // 'bg-zinc-900': Cor de fundo cinza escuro
    // 'text-white': Cor do texto branca
    // 'p-4': Padding (espaçamento interno)
    <header className="w-full bg-zinc-900 text-white p-4">
      
      {/* 'container': Centraliza o conteúdo e define uma largura máxima
        'mx-auto': Margem automática no eixo X (centraliza)
        'flex': Ativa o Flexbox
        'justify-between': Alinha os itens filhos com espaço entre eles
        'items-center': Alinha os itens filhos no centro verticalmente
      */}
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Nosso "Logo" ou Nome */}
        <Link href="/" className="text-xl font-bold">
          Meu Portfólio
        </Link>

        {/* Links de Navegação */}
        {/* 'flex', 'gap-4': Itens flexíveis com um espaçamento entre eles */}
        <nav className="flex gap-4">
          
          {/* Link: Componente do Next.js para navegação rápida (sem recarregar a página)
              'hover:text-emerald-400': Muda a cor do texto no hover
          */}
          <Link href="/" className="hover:text-emerald-400">
            Home
          </Link>
          <Link href="/roadmap" className="hover:text-emerald-400">
            Roadmap
          </Link>
        </nav>
      </div>
    </header>
  );
};