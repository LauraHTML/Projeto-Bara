export const metadata = {
  title: "Contato", 
};

export default function Teste(){
    return(<>
    <main className="relative">
      {/* Seção 1 */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-zinc-800 text-white z-10">
        <h1 className="text-4xl font-bold">Seção 1 (Fica parada)</h1>
      </section>

      {/* Seção 2 */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-blue-600 text-white z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-bold">Seção 2 (Cobre a anterior)</h1>
      </section>

      {/* Seção 3 */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-emerald-500 text-white z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
        <h1 className="text-4xl font-bold">Seção 3 (Cobre a azul)</h1>
      </section>
      
      {/* Footer (Normal, rola junto com a última) */}
      <footer className="relative z-40 bg-black text-white p-10">
        <p>Fim do site</p>
      </footer>
    </main>
    </>)
}