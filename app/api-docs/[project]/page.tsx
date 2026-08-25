"use client";

import SwaggerUI from "swagger-ui-react";
// @ts-expect-error: A biblioteca não exporta os tipos do CSS, mas o bundler do Next.js resolve
import "swagger-ui-react/swagger-ui.css";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ApiDocsPage() {
  const params = useParams();
  const projectName = params.project as string;

  // Monta a URL apontando para a sua pasta public/docs
  const swaggerUrl = `/docs/${projectName}.json`;

  return (
    <div className="min-h-screen bg-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <Link 
          href="/#roadmap" 
          className="inline-block text-emerald-600 font-medium hover:underline mb-8"
        >
          &larr; Voltar para o Roadmap
        </Link>

        {/* O container precisa de fundo branco senão o Swagger fica ilegível no Dark Mode */}
        <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden border border-gray-200">
          <SwaggerUI url={swaggerUrl} />
        </div>

      </div>
    </div>
  );
}