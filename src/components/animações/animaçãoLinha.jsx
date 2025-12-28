"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Linha } from '@/components/animações/linhaXl';
import { LinhaMobile } from "@/components/animações/linhaMobile";
import { SobreCard } from '@/components/cardSobre/cardSobre';
import { FotosSobre, fotosSobre } from "@/components/fotosSobre/fotosSobre";

import Image from "next/image";

export default function AnimacaoLinha() {


    return (
        <div>
            <div className="relative w-full h-[60rem] md:h-[100rem] lg:h-[120rem] overflow-hidden flex flex-col">
                <Linha />
                <LinhaMobile />
                <div className="justify-center z-10 space-y-20 p-8 grid grid-cols-1 md:grid-cols-4 grid-rows-5">
                    <div className="sobre-card col-start-1 md:col-start-1 row-start-1 w-full h-40">
                        <SobreCard
                            corFundo={"bg-accent"}
                            titulo={"O que é a Bará?"}
                            margemTitulo={"mx-3"}
                            descricao={"É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade"}
                            fotinho={"/mata-masie.png"}
                            esquerdo={"hidden"}
                            direito={"hidden"}
                        />
                    </div>
                    <div className={"m-0 col-start-1 md:col-start-2 row-start-2 md:row-start-1 h-90"}>
                        <div className="flex md:flex-row w-fit h-60">
                            <Image src={"/fotos/foto-turma-2.png"} width={400} height={400} alt="Foto das crianças desenhando na oficina" className="-rotate-40" />
                            <Image src={"/fotos/meninos-desenho.png"} width={200} height={150} alt="Foto da turma participante da oficina" className="rotate-2" />
                        </div>
                    </div>


                    <div className={"m-0 col-start-1 md:col-start-2 row-start-2 md:row-start-3 h-70"}>
                        <div className="flex md:flex-row w-fit h-60">
                            <Image src={"/fotos/foto-turma-2.png"} width={400} height={400} alt="Foto das crianças desenhando na oficina" className="-rotate-40" />
                            <Image src={"/fotos/meninos-desenho.png"} width={200} height={150} alt="Foto da turma participante da oficina" className="rotate-2" />
                        </div>
                    </div>
                    <div className="sobre-card col-start-1 md:col-start-3 row-start-4 md:row-start-3 h-70 m-0">
                        <SobreCard
                            corFundo={"bg-primary"}
                            titulo={"Para quem é o projeto?"}
                            margemTitulo={"mx-3"}
                            descricao={"Para educadores que buscam transmitir o poder transformador"}
                            fotinho={"/aya-vermelho-2.png"}
                            esquerdo={"flex"}
                            direito={"flex"}
                        />
                    </div>

                    <div className="sobre-card w-fit col-start-1 md:col-start-2 row-start-5 md:row-start-5 h-70 m-0 md:mr-10">
                        <SobreCard
                            corFundo={"bg-accent"}
                            titulo={"Bará na sua escola"}
                            margemTitulo={"mx-3"}
                            descricao={"Veja como integrar esse projeto na sua escola"}
                            fotinho={"/mata-masie.png"}
                            esquerdo={"block"}
                            direito={"hidden"}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}