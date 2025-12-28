import { SobreCard } from '@/components/cardSobre/cardSobre';

import Image from "next/image";

export default function Teste() {


    return (
        <div className="centralizar flex-col lg:flex-row w-full h-auto gap-5 p-4 flex-wrap">

            <div className='div-card'>
            <SobreCard
             corFundo={"bg-accent"}
             titulo={"O que é a Bará?"}
             margemTitulo={"mx-3"}
             descricao={"É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade"}
             fotinho={"/mata-masie.png"}
             corBorda={"accent"}
             />
            </div>
                
            <div className='div-card'>
                <SobreCard
                corFundo={"bg-primary"}
                titulo={"Para quem é o projeto?"}
                margemTitulo={"mx-3"}
                descricao={"Para educadores que buscam transmitir o poder transformador"}
                fotinho={"/aya-vermelho-2.png"}
                corBorda={"primary"}
                />
            </div>
            <div className='div-card'>
                <SobreCard
                corFundo={"bg-accent"}
                titulo={"Bará na sua escola"}
                margemTitulo={"mx-3"}
                descricao={"Veja como integrar esse projeto na sua escola"}
                fotinho={"/mata-masie.png"}
                corBorda={"accent"}
                />
            </div>
           
            
        </div>
    )
}