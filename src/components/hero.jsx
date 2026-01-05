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

        <div className="bg-accent rounded-3xl p-8 md:p-4 max-w-4xl w-full">
            {/* Texto */}
            <div className="mb-8">
              <p className="text-gray-900 text-base md:text-lg leading-relaxed m-4 text-wrap balance">
                A Lei 10.639/03 estabelece a obrigatoriedade do ensino da história e da cultura afro-brasileira, porém sua efetivação ainda é limitada por lacunas na educação infantil. Nesse contexto, o design pode atuar como um recurso de mediação pedagógica, auxiliando na organização de conteúdos, na criação de suportes visuais acessíveis e na tradução de temas históricos, culturais e raciais em práticas educativas.
              </p>
            </div>

            {/* Carrossel */}
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                      <img 
                        src={"/fotos/criancas-desenhando.png"} 
                        alt="Foto das crianças desenhando na oficina"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                      <img 
                        src={"/fotos/sala-de-aula.png"}
                        alt="Foto das crianças na sala de aula"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                      <img 
                        src={"/fotos/meninos-desenho.png"} 
                        alt="Foto das meninos desenhando na oficina"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80" />
                <CarouselNext className="right-2 bg-white/80" />
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
