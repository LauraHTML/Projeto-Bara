import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function AplicacaoEscola() {
    return (<>
        <div className="h-fit w-full bg-accent centralizar flex-col gap-3 py-10">
            <Image src={"/titulos/design-educacao.png"} alt="Design + educação" height={400} width={600} className="-2xl" />
            {/* <h1 className="text-2xl font-bold text-secondary">Ensinar exige curiosidade</h1> */}
            <p className="fonte-titulo text-2xl text-center text-secondary font-bold">Veja como aplicar a oficina em sua sala de aula</p>
            <Button variant="CTA" size={"lg"}>
                <Link href={"/baraNaSuaEscola"}>
                    Quero aplicar
                </Link>
            </Button>
            <div className="flex flex-col items-center gap-4 h-2xl w-auto rounded-2xl relative m-4">
                <div className=" hidden md:flex md:flex-row gap-5">
                    <div className="lg:absolute z-10 lg:-bottom-10 lg:-left-60">
                        <Image src={"/fotos/foto-tras.png"} alt="foto da turma" height={150} width={200} className="rounded-xl" />
                    </div>
                    <div className="lg:absolute z-10 -top-10 -right-60">
                        <Image src={"/fotos/meninos-desenho.png"} alt="foto da turma" height={250} width={200} className="rounded-xl" />
                    </div>
                </div>
                <Image src={"/fotos/foto-turma-1.jpg"} alt="foto da turma" height={400} width={600} className="hidden md:block rounded-2xl" />
                <div className="relative md:hidden">
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem>
                                <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                                    <img
                                        src={"/fotos/foto-tras.png"}
                                        alt="Foto da turma"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                                    <img
                                        src={"/fotos/meninos-desenho.png"}
                                        alt="Foto dos alunos desenhando na oficina"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="flex items-center justify-center bg-white rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96">
                                    <img
                                        src={"/fotos/foto-turma-1.jpg"}
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
        </div>

    </>)
}