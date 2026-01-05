"use client";
import { useState, useEffect } from "react";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselResultado";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function CarrosselComPaginacao() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const imagens = [
    {
      id: 1,
      caminho: "/fotos/sala-de-aula.png",
      altImagem: "Fotos da turma participante da oficina Bará",
      tamanho: "550"
    },
    {
      id: 2,
      caminho: "/fotos/foto-turma-2.png",
      altImagem: "Fotos da turma participante da oficina Bará",
      tamanho: "550"
    },
    {
      id: 3,
      caminho: "/fotos/desenhos-etapas-02.png",
      altImagem: "Desenho da etapa dois desenhado por uma aluna",
      tamanho: "550"
    },
    {
      id: 4,
      caminho: "/fotos/desenhos-etapas-01.png",
      altImagem: "Desenho da etapa um desenhado por uma aluna",
      tamanho: "550"
    },
    {
      id: 5,
      caminho: "/fotos/criancas-desenhando.png",
      altImagem: "Crianças desenhando na oficina",
      tamanho: "550"
    }
  ]

  return (
    <div className="mx-auto max-w-xl absolute md:top-40 top-10 left-70 md:left-40 flex flex-col items-center justify-center gap-3 sm:gap-7">
      <h1 className="fonte-titulo text-center md:text-6xl text-4xl font-bold text-secondary">Resultados da oficina</h1>
      <Carousel setApi={setApi} className="md:w-xl w-100">
        <CarouselContent>
          {imagens.map((imagem) => (
            <CarouselItem key={imagem.id}>
              <Card className={"bg-transparent p-3 w-full h-fit"}>
                <CardContent className="flex h-30 items-center justify-center p-6">
                  <Image src={imagem.caminho} width={imagem.tamanho} height={imagem.tamanho} alt={imagem.altImagem} className="" />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn("h-3.5 w-3.5 rounded-full border-2", {
              "border-primary": current === index + 1,
            })}
          />
        ))}
      </div>
    </div>
  );
}
