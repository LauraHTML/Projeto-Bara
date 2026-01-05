import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Hero() {
  return (
    <div className="h-fit flex flex-col justify-center items-center gap-4 mt-4 w-full">
      <div className="p-3 text-center centralizar flex-row">
        <h1 className="fonte-titulo text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-background">
          Design para a educação
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="flex flex-row md:flex-col w-fit">
          <Image src={"/rostinhos/menina.png"} width={130} height={130} alt="Rosto menina" className="ml-0 md:ml-10" />
          <Image src={"/rostinhos/menino.png"} width={120} height={130} alt="Rosto menino" />
          <Image src={"/rostinhos/rostinho.png"} width={130} height={130} alt="Rosto menina" className="ml-0 md:ml-10" />
        </div>

        <div className="bg-accent flex flex-col gap-6 md:gap-8 w-full md:w-5xl rounded-lg p-6 md:p-10 relative overflow-hidden" >
          <div className="w-full flex items-center">
            <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed z-20">
              A Lei 10.639/03 estabelece a obrigatoriedade do ensino da história e da cultura afro-brasileira, porém sua efetivação ainda é limitada por lacunas na educação infantil. Nesse contexto, o design pode atuar como um recurso de mediação pedagógica, auxiliando na organização de conteúdos, na criação de suportes visuais acessíveis e na tradução de temas históricos, culturais e raciais em práticas educativas.
            </p>
          </div>

          <div className="z-10 w-fit">
            <Carousel>
              <CarouselContent>
                <CarouselItem><Image src={"/fotos/criancas-desenhando.png"} width={550} height={500} alt="Foto das crianças desenhando na oficina" /></CarouselItem>
                <CarouselItem><Image src={"/fotos/sala-de-aula.png"} width={350} height={300} alt="Foto das crianças na sala de aula" /></CarouselItem>
                <CarouselItem><Image src={"/fotos/meninos-desenho.png"} width={350} height={300} alt="Foto das crianças desenhando na oficina" /></CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

        </div>

        <div className="hidden md:flex md:flex-col w-fit">
          <Image src={"/rostinhos/menina.png"} width={130} height={130} alt="Rosto menina" className="ml-0 md:mr-10" />
          <Image src={"/rostinhos/menino.png"} width={120} height={130} alt="Rosto menino" className="ml-0 md:ml-10" />
          <Image src={"/rostinhos/rostinho.png"} width={130} height={130} alt="Rosto menina" className="ml-0 md:mr-10" />
        </div>
      </div>
    </div>
  );
}
