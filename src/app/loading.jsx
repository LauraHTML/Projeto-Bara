"use client" // Necessário para usar hooks no Next.js (App Router)
import { useState, useEffect } from 'react';

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento ou espera a janela carregar
    const handleLoad = () => {
      // Pequeno timeout para garantir que a transição seja vista
      setTimeout(() => setIsLoading(false), 10000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* --- TELA DE CARREGAMENTO --- */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
             <p>ta carregando</p>
             <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-transparent border-white"></div>
        </div>
      )}

      {/* --- SEU CONTEÚDO PRINCIPAL --- */}
      <main className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        <h1>Bem-vindo ao meu site!</h1>
        <p>Conteúdo carregado.</p>
      </main>
    </>
  );
}