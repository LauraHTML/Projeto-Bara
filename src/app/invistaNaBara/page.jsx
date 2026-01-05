export const metadata = {
  title: "Invista na Bará",
};

import Image from "next/image";
import Link from "next/link";

import FAQ from "@/components/faq";
import { Button } from "@/components/ui/button";

export default function InvistaNaBara(){
    return(<>
    <main className="flex min-h-screen w-full flex-col centralizar items-start md:items-center overflow-hidden bg-secondary p-4">
        <header className="w-lg p-4 text-center text-background flex flex-col gap-4">
            <h1 className="text-4xl">Invista na Bará</h1>
            <p>Existem algumas formas que você pode apoiar a Bará. Entre em contato conosco para saber mais</p>
            <Link href={"/contato"}>
            <Button>Entre em contato</Button>
            </Link>
            
        </header>

        <div class="card">
            {/* <h2>Sobre o Projeto</h2>
            <div class="sobre-projeto">
                <p>Nosso projeto visa revolucionar a educação nas escolas públicas através da tecnologia e metodologias inovadoras de ensino. Com foco no desenvolvimento integral dos alunos, buscamos proporcionar recursos modernos, capacitação de professores e infraestrutura adequada para preparar os estudantes para os desafios do século XXI.</p>
            </div> */}
        </div>

        

    </main>
    
    </>)
}