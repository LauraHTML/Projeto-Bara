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
      tamanho: "650"
    },
    {
      id: 2,
      caminho: "/fotos/foto-turma-2.png",
      altImagem: "Fotos da turma participante da oficina Bará",
      tamanho: "650"
    },
    {
      id: 3,
      caminho: "/fotos/desenhos-etapas-02.png",
      altImagem: "Desenho da etapa dois desenhado por uma aluna",
      tamanho: "650"
    },
    {
      id: 4,
      caminho: "/fotos/desenhos-etapas-01.png",
      altImagem: "Desenho da etapa um desenhado por uma aluna",
      tamanho: "650"
    },
    {
      id: 5,
      caminho: "/fotos/criancas-desenhando.png",
      altImagem: "Crianças desenhando na oficina",
      tamanho: "250"
    }
  ]

  return (
    <div className="w-full flex items-center justify-center py-8 sm:py-12 md:py-16 px-4">
      <div className="flex flex-col items-center justify-center gap-3 sm:gap-7 mt-20 md:m-0">
        <h1 className="fonte-titulo text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-secondary text-wrap">Resultados da oficina</h1>
        <div className="w-6xl md:max-w-xl">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {imagens.map((imagem) => (
                <CarouselItem key={imagem.id}>
                  <Card className="bg-transparent border-0 p-2 sm:p-3">
                    <CardContent className="flex items-center justify-center p-2 sm:p-4 md:p-6">
                      <Image
                        src={imagem.caminho}
                        width={imagem.tamanho}
                        height={300}
                        alt={imagem.altImagem}
                        className="w-xl h-auto md:h-90 max-h-96 object-contain"
                        priority={imagem.id === 1}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn("h-2.5 w-2.5 sm:h-3.5 sm:w-3.5 rounded-full border-2 transition-all", {
                "bg-primary border-primary": current === index + 1,
                "border-gray-300 hover:border-gray-400": current !== index + 1,
              })}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
