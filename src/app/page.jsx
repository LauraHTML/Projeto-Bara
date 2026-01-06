"use client"
import { useState, useEffect } from 'react';

import Image from "next/image";
import Hero from "@/components/hero"
import FAQ from "@/components/faq";
import Bara from "@/components/h1Bara";
import Sobre from "@/components/sobre/sobre";
import AplicacaoEscola from '@/components/aplicacao/aplicacao';
import Loader from '@/components/loader';
import Teste from '@/components/teste/teste';

import { Figurinha01 } from "@/components/figurinhas/figurinha01";
import { Figurinha02 } from "@/components/figurinhas/figurinha02";
import { Figurinha03 } from "@/components/figurinhas/figurinha03";
import { Figurinha04 } from "@/components/figurinhas/figurinha04";

import AnimacaoLinha from "@/components/animações/animaçãoLinha"

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center sm:items-start overflow-hidden">
        <div className="bg-primary centralizar w-full h-full overflow-visible sticky top-0 z-10">
          <div className="h-[30rem] md:h-screen centralizar flex-col transition-all duration-700 text-wrap overflow-hidden mt-10 w-full">
            <Bara />
          </div>
          <div className="static rounded-inherit shadow-2xl">
            <Figurinha01 />
          </div>
          <div className="static rounded-inherit">
            <Figurinha02 />
          </div>
          <div className="static rounded-inherit">
            <Figurinha03 />
          </div>
          <div className="static rounded-inherit">
            <Figurinha04 />
          </div>
        </div>
        <section className="flex flex-col gap-10 sticky top-0 w-full bg-secondary z-20">
          <Hero />
          <Sobre />
          <AplicacaoEscola />
        </section>
        <section className='bg-primary w-full flex items-center justify-center px-4'>
          <FAQ />
        </section>
      </main>
    </>
  );
}
