import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AplicacaoEscola(){
    return(<>
    <div className="h-fit w-full bg-accent centralizar flex-col gap-3 py-10">
        <Image src={"/titulos/design-educacao.png"} alt="Design + educação" height={400}  width={600} className="-2xl" />
        {/* <h1 className="text-2xl font-bold text-secondary">Ensinar exige curiosidade</h1> */}
        <h1 className="text-2xl text-center text-secondary font-bold">Veja como aplicar a oficina em sua sala de aula</h1>
        <div className="flex flex-col items-center gap-4 h-2xl w-auto rounded-2xl relative m-4">
            <div className="flex flex-col md:flex-row gap-5">
                <div className="lg:absolute z-10 lg:-bottom-10 lg:-left-60">
                <Image src={"/fotos/foto-tras.png"} alt="foto da turma" height={150}  width={200} className="rounded-xl" />
                </div>
                <div className="lg:absolute z-10 -top-10 -right-60">
                <Image src={"/fotos/meninos-desenho.png"} alt="foto da turma" height={250}  width={200} className="rounded-xl" />
                </div>  
            </div>
                <Image src={"/fotos/foto-turma-1.png"} alt="foto da turma" height={400}  width={600} className="rounded-2xl" />
        </div>
        <Button>
            <Link href={"/baraNaSuaEscola"}>
            <p>Aplicação na sala de aula</p>
            </Link>
        </Button>
    </div>
    
    </>)
}