import Image from "next/image"

export default function MateriaisGraficos(){
    return(<>

     <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row p-4 gap-10">
        <div className="w-full max-w-2xl flex flex-col gap-6 items-center">

          <div className="flex flex-col items-center text-center gap-5">
            <Image src={"/titulos/materiais-graficos.png"} width={600} height={400} alt={"Materiais gráficos"} className="max-w-full h-auto object-contain" />
            <h1 className="fonte-titulo text-2xl font-bold text-secondary">Os materiais gráficos são parte essenciais para a realização da oficina, com eles os alunos serão colocados em posição de designers.</h1>
            <h2 className="text-xl">Acesse os arquivos disponíveis para a impressão:</h2>
          </div>
          <div>
            <Image src={"/drive-oficina.png"} width={250} height={250} alt="QR code para acessar o drive da oficina" />
          </div>
        </div>
      </section>
    </>)
}