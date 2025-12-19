"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Linha } from '@/components/animações/linha/linha';
import { SobreCard } from '@/components/cardSobre/cardSobre'

export default function AnimacaoLinha() {

    //learn how this was made at https://www.youtube.com/watch?v=ersN5fk8py0 
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin, GSDevTools);

    gsap.defaults({ ease: "none" });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#svg",
                start: "top bottom",
                end: "bottom bottom",
                scrub: 1,
            }
        });
        tl.from(".linha", { drawSVG: "0", duration: 3 })
    }, {});

    return (
        <>
            <div className="relative w-full h-screen p-[2rem] overflow-hidden flex flex-col">
                <Linha />
                <div className="flex-1 cetralizar flex-col">
                <SobreCard titulo={"O que é a Bará?"} margemTitulo={"mx-3"} descricao={"É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade"}/>
                <SobreCard titulo={"Para quem é o projeto?"} margemTitulo={"mx-3"} descricao={"É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade"}/>
                <SobreCard titulo={"Bará na sua escola"} margemTitulo={"mx-3"} descricao={"É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade"}/>
            </div>
            </div>
        </>
    )
}