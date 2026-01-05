"use client"

import React from "react";
import { Search, Target, Package, Sparkle, PaintBucket } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/cardEtapas"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carouselResultado"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@/components/ui/tabs"

import Image from "next/image"

// Dados das 4 etapas da oficina
const etapas = [
    {
        id: "preparacao",
        titulo: "Etapa 1",
        materiais: [
            { id: "1", nome: "Duplo diamante", icone: <Package className="h-6 w-6" />, imagem: "/materiais/duplo-diamante.png", altImagem: "Material da etapa 1, duplo diamante", tamanho: "250" },
            { id: "2", nome: "Adesivos de personagem", icone: <Package className="h-6 w-6" />, imagem: "/materiais/adesivo.png", altImagem: "Material da etapa 1, adesivos de personagem", tamanho: "150" },
            { id: "3", nome: "Kit lápis e canetas", icone: <Package className="h-6 w-6" />, imagem: "/materiais/canetas.png", altImagem: "Material da etapa 1, kit lápis e canetas", tamanho: "60" },//50
        ]
    },
    {
        id: "primer",
        titulo: "Etapa 2",
        materiais: [
            { id: "6", nome: "Duplo diamante", icone: <PaintBucket className="h-6 w-6" />, imagem: "/materiais/duplo-diamante.png", altImagem: "Material da etapa 2, duplo diamante", tamanho: "250" },//150
            { id: "7", nome: "Notas adesivas", icone: <Package className="h-6 w-6" />, imagem: "/materiais/notas-adesivas.png", altImagem: "Material da etapa 2, notas adesivas", tamanho: "150" },//150
            { id: "8", nome: "Canetas", icone: <Package className="h-6 w-6" />, imagem: "/materiais/canetas.png", altImagem: "Material da etapa 2, canetas", tamanho: "60" },
        ]
    },
    {
        id: "tinta",
        titulo: "Etapa 3",
        materiais: [
            { id: "10", nome: "Duplo diamante", icone: <PaintBucket className="h-6 w-6" />, imagem: "/materiais/duplo-diamante.png", altImagem: "Material da etapa 3, duplo diamante", tamanho: "250" },
            { id: "11", nome: "Adesivo de superpoder", icone: <Package className="h-6 w-6" />, imagem: "/materiais/poderes.png", altImagem: "Material da etapa 3, adesivos de superpoder", tamanho: "150" },
            { id: "12", nome: "Cartolina", icone: <Package className="h-6 w-6" />, imagem: "/materiais/cartolina.png", altImagem: "Material da etapa 3, cartolina", tamanho: "150" },
        ]
    },
]

export default function CardMateriais() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col items-center pb-8">
                    <h1 className="fonte-titulo text-2xl md:text-2xl font-bold text-center text-primary">
                        Materiais Necessários para a
                    </h1>
                    <Image src={"/titulos/oficina.png"} width={300} height={150} alt={"Oficina"} />
                    <p className="text-xl text-scondary text-center mx-auto">
                        Selecione a etapa da oficina para ver os materiais necessários
                    </p>
                </div>


                <Tabs defaultValue="preparacao" className="w-full">
                    <TabsList className="grid w-auto grid-cols-3 p-2 rounded-2xl bg-muted/50">
                        {etapas.map((etapa) => (
                            <TabsTrigger
                                key={etapa.id}
                                value={etapa.id}
                                className="rounded-xl"
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-1">
                                        {etapa.titulo.includes("1") ? <Search className="h-5 w-5" /> :
                                            etapa.titulo.includes("2") ? <Target className="h-5 w-5" /> :
                                                <Sparkle className="h-5 w-5" />}
                                    </div>
                                    <span className="text-sm font-medium">{etapa.titulo}</span>
                                </div>
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {etapas.map((etapa) => (
                        <TabsContent key={etapa.id} value={etapa.id} className="mt-8">
                            {/* Carrossel para mobile e tablet */}
                            <div className="lg:hidden">
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                    className="w-full max-w-4xl mx-auto"
                                >
                                    <CarouselContent className="-ml-2 md:-ml-4">
                                        {etapa.materiais.map((material) => (
                                            <CarouselItem
                                                key={material.id}
                                                className="basis-full sm:basis-1/2 md:basis-1/2 pl-2 md:pl-4"
                                            >
                                                <div className="flex flex-col h-full w-full">
                                                    <Card className="h-full w-full min-h-96 bg-card/80 backdrop-blur-sm shadow-xl items-center md:items-start hover:shadow-2xl hover:border-primary/30 border-0 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group flex flex-col">
                                                        <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors w-full text-center px-4 pt-4 flex-shrink-0">
                                                            {material.nome}
                                                        </CardTitle>
                                                        <CardContent className="p-4 centralizar flex-col w-full flex-1 overflow-hidden bg-accent rounded-xl min-h-64">
                                                            <Image src={material.imagem} width={material.tamanho} height={material.tamanho} alt={material.altImagem} className="max-w-full h-auto object-contain" />
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="h-14 w-14 bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl ml-4" />
                                    <CarouselNext className="h-14 w-14 bg-background/90 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl mr-4" />
                                </Carousel>
                            </div>

                            {/* Grid para desktop */}
                            <div className="hidden lg:grid lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                                {etapa.materiais.map((material) => (
                                    <Card key={material.id} className="h-full min-h-96 bg-card/80 backdrop-blur-sm shadow-xl items-center hover:shadow-2xl hover:border-primary/30 border-0 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 group flex flex-col">
                                        <CardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors w-full text-center px-4 pt-4 flex-shrink-0">
                                            {material.nome}
                                        </CardTitle>
                                        <CardContent className="p-4 centralizar flex-col flex-1 overflow-hidden bg-accent rounded-xl min-h-64">
                                            <Image src={material.imagem} width={material.tamanho} height={material.tamanho} alt={material.altImagem} className="max-w-full h-auto object-contain" />
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    )
}

