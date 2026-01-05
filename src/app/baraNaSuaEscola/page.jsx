export const metadata = {
  title: "Bara na sua escola",
  description: "Saiba como aplicar a oficina Bará na sua escola"
};

import Image from "next/image";
import { Metodo } from "@/components/metodoCard/metodo";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabsEtapas";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/cardEtapas"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import CardMateriais from "@/components/cardMateriais/cardMateriais";
import MateriaisGraficos from "@/components/materiaisGraficos/materiaisGraficos";
import CarrosselComPaginacao from "@/components/carrosselPag/carrosselPag";


export default function BaraNaSuaEscola() {
  return (<>
    <main className="relative overflow-hidden flex flex-col gap-5">
      <section className="min-h-screen w-full flex-col centralizar md:flex-row md:gap-10 gap-3">
        <div className="flex flex-col items-start gap-3 md:w-md w-full p-4">
          <h1 className="fonte-titulo text-5xl md:text-6xl text-primary">Educação e&nbsp;a&nbsp;luta antirracista</h1>
          {/* <Image src={"/titulos/educacao-luta.png"} alt="Educação e luta antirracista" height={500} width={500} className="rounded-2xl" /> */}
          <p className="p-0 md:p-3">A oficina Bará propõe uma abordagem prática&nbsp;e&nbsp;interativa para a aplicação do&nbsp;Pensamento&nbsp;de Design no meio educacional debatendo o&nbsp;antirracismo</p>
        </div>
        <div className="mt-10">
          <Image src={"/fotos/foto-turma-1.png"} alt="foto da turma" height={400} width={600} className="rounded-2xl" />
        </div>
      </section>


      <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row gap-10">
        <div className="w-full max-w-2xl flex flex-col gap-6 items-center">

          <div className="flex flex-col items-center text-center gap-5">
            <h1 className="fonte-titulo text-6xl font-bold text-primary">Método duplo diamante</h1>
            <p>Conheça sobre a estratégia de design principal para o desenvolvimento da oficina</p>
          </div>
          <Tabs defaultValue="oquee" className="w-full">
            <TabsList >
              <TabsTrigger value="oquee"><span className="block md:hidden">1-</span>O que é</TabsTrigger>
              <TabsTrigger value="descobrir"><span className="block md:hidden">2-</span>Descobrir</TabsTrigger>
              <TabsTrigger value="definir"><span className="block md:hidden">3-</span>Definir</TabsTrigger>
              <TabsTrigger value="desenvolver"><span className="block md:hidden">4-</span>Desenvolver</TabsTrigger>
              <TabsTrigger value="entregar"><span className="block md:hidden">5-</span>Entregar</TabsTrigger>
            </TabsList>

            <TabsContent value="oquee" className="w-full">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>introdução</CardDescription>
                  <CardTitle>Duplo Diamante</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="z-20">
                    <p className="">
                      O método do Duplo Diamante é uma estrutura do Pensamento de Design que&nbsp;organiza o processo de investigação e criação em momentos de abrir e fechar o pensamento, ajudando a compreender melhor um problema e a desenvolver soluções mais conscientes e adequadas à&nbsp;realidade.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="descobrir" className="w-full">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>etapa 1</CardDescription>
                  <CardTitle>Descobrir</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="py-3 z-20">
                    <p>
                      O objetivo dessa etapa é a construção da&nbsp;base do projeto através da pesquisa e&nbsp;compreensão do problema&nbsp;apresentado.
                    </p>
                  </div>
                  <div className="absolute bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                    <Image src={"/desenho-curva.png"} width={700} height={700} alt="Desenho curva" className="opacity-50" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="definir">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>
                    etapa 2
                  </CardDescription>
                  <CardTitle>Definir</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="py-3 z-20">
                    <p>
                      Atenção à caminhos específicos e&nbsp;estratégicos tornando claro o que deve ser resolvido.
                    </p>
                  </div>
                  <div className="absolute bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                    <Image src={"/desenho-curva.png"} width={700} height={700} alt="Desenho curva" className="opacity-50" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="desenvolver">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>
                    etapa 3
                  </CardDescription>
                  <CardTitle>Desenvolver</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="py-3 z-20">
                    <p>
                      Geração de soluções
                      e ideias através de
                      estratégias de&nbsp;criação.
                    </p>
                  </div>
                  <div className="absolute bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                    <Image src={"/desenho-curva.png"} width={700} height={700} alt="Desenho curva" className="opacity-50" />
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="entregar">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>
                    etapa 4
                  </CardDescription>
                  <CardTitle>Entregar</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="bg--foreground py-3 z-20">
                    <p>
                      Compartilhamento
                      das descobertas e
                      apresentação das&nbsp;soluções criadas.
                    </p>
                  </div>
                  <div className="absolute bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                    <Image src={"/desenho-curva.png"} width={700} height={700} alt="Desenho curva" className="opacity-50" />
                  </div>
                </CardContent>
                <CardFooter>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section>
        <CardMateriais />
      </section>
      <section className="w-full min-h-full flex-col centralizar md:flex-row gap-10 ">
        <MateriaisGraficos />
      </section>
      <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row gap-10 ">
        <div className="bg-[url(/textura-papel.png)] md:bg-cover contain bg-center bg-no-repeat w-6xl md:w-6xl relative m-4">
          <CarrosselComPaginacao />
        </div>
      </section>

    </main>
  </>)
}