"use client"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import Hero from "@/components/hero"
import FAQ from "@/components/faq";
import Bara from "@/components/h1Bara";
import Sobre from "@/components/sobre/sobre";

import { Figurinha01 } from "@/components/figurinhas/figurinha01";
import { Figurinha02 } from "@/components/figurinhas/figurinha02";
import { Figurinha03 } from "@/components/figurinhas/figurinha03";

import AnimacaoLinha from "@/components/animações/linha/animaçãoLinha";
import { SobreCard } from "@/components/cardSobre/cardSobre";

import IntroAnimation from "@/components/introAnimation";

export default function Home() {

  return (
    <div className="flex w-full relative z-0">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <div className="bg-primary centralizar w-full h-screen py-10 overflow-hidden sticky top-0">
          <div className="centralizar flex-col transition-all duration-700 w-md text-wrap">
            <Bara />
            <div className="h-[25rem]">
              
            </div>
          </div>
          <div className="static rounded-inherit">
            <Figurinha01 />
            <Figurinha02 />
            <Figurinha03 />
          </div>
        </div>
        <section className="sticky top-0 w-full bg-secondary z-10 mt-40">
          <Sobre />
          <div className="">
            <Hero />
          </div>
          <FAQ />
          <AnimacaoLinha />
        </section>
      </main>
    </div>
  );
}
