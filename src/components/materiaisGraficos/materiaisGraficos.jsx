import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MateriaisGraficos(){
    return(<>

     <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row p-4 pb-0 gap-10">
        <div className="w-full max-w-2xl flex flex-col gap-6 items-center">

          <div className="flex flex-col items-center text-center gap-5">
            <Image src={"/titulos/materiais-graficos.png"} width={600} height={400} alt={"Materiais gráficos"} className="max-w-full h-auto object-contain" />
            <p className="fonte-titulo text-2xl font-normal">Os materiais gráficos são parte essencial para&nbsp;a&nbsp;realização da oficina, com eles os alunos serão colocados em posição de&nbsp;designers.</p>
            <p className="text-xl">Acesse os arquivos disponíveis para a impressão:</p>
          </div>
          <div>
            <Link href={"https://drive.google.com/drive/folders/1W8phWaLBqueTx5SCivkmd18au2lSDDcc?usp=sharing"} target="_blank" rel="noopener noreferrer">
            <Button variant="CTA" size={"lg"}>Acessar arquivos</Button>
            </Link>
          </div>
        </div>
      </section>
    </>)
}