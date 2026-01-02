export const metadata = {
  title: "Bara na sua escola",
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
        <div className="flex flex-col items-start gap-3 w-md">
          <Image src={"/educacao-luta.png"} alt="foto da turma" height={500} width={500} className="rounded-2xl" />
          <p className="ml-10 p-3">A oficina Bará propõe uma abordagem prática e interativa  para a aplicação do Pensamento de Design no meio educacional debatendo o antirracismo</p>
        </div>
        <div className="mt-10">
          <Image src={"/fotos/foto-turma-1.png"} alt="foto da turma" height={400} width={600} className="rounded-2xl" />
        </div>
      </section>


      <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row gap-10">
        <div className="w-full max-w-2xl flex flex-col gap-6 items-center">

          <div className="flex flex-col items-center text-center">
            <h1 className="fonte-titulo text-2xl font-bold text-secondary">Método duplo diamante</h1>
            <p>Conheça sobre a estratégia de design principal para o desenvolvimento da oficina</p>
          </div>
          <Tabs defaultValue="descobrir" className="w-full">
            <TabsList >
              <TabsTrigger value="descobrir">Descobrir</TabsTrigger>
              <TabsTrigger value="definir">Definir</TabsTrigger>
              <TabsTrigger value="desenvolver">Desenvolver</TabsTrigger>
              <TabsTrigger value="entregar">Entregar</TabsTrigger>
            </TabsList>

            <TabsContent value="descobrir" className="w-full">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <CardDescription>etapa 1</CardDescription>
                  <CardTitle>Descobrir</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="h-xl py-3 z-20">
                    <p className="text-xl">
                      O objetivo dessa etapa é a construção da base do projeto através da pesquisa e compreensão do problema apresentado.
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
                  <div className="h-xl py-3 z-20">
                    <p className="text-xl text-wrap">
                      Atenção à caminhos
                      específicos e
                      estratégicos tornando
                      claro o que deve ser
                      resolvido.
                    </p>
                  </div>
                  <div className="absolute bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                    <Image src={"/desenho-curva.png"} width={700} height={700} alt="Desenho curva" className="opacity-50" />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="desenvolver">
              <Card>
                <CardHeader>
                  <CardDescription>
                    etapa 3
                  </CardDescription>
                  <CardTitle>Desenvolver</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="py-3 z-20">
                    <p className="text-xl">
                      Geração de soluções
                      e ideias através de
                      estratégias de criação.
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
              <Card>
                <CardHeader>
                  <CardDescription>
                    etapa 4
                  </CardDescription>
                  <CardTitle>Entregar</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="bg--foreground h-xl py-3 z-20">
                    <p className="text-xl">
                      Compartilhamento
                      das descobertas e
                      apresentação das
                      soluções criadas.
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
      <section className="w-full min-h-full flex-col centralizar md:flex-row m-4 gap-10 ">
          <MateriaisGraficos />
      </section>
      <section className="w-full min-h-full flex flex-col items-center justify-center md:flex-row gap-10 ">
        <div className="bg-[url(/textura-papel.png)] bg-cover sm:contain bg-center bg-no-repeat sm:w-6xl w-[40rem] h-[40rem] relative m-4">
          <CarrosselComPaginacao />
        </div>
      </section>

    </main>
  </>)
}