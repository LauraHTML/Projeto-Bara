"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    pergunta: "O que é Bara?",
    resposta:
      "Bará é um projeto que investiga o uso do design como ferramenta de transformação social na educação infantil, com foco na construção de práticas antirracistas. A partir da metodologia do Design Thinking, foi desenvolvida uma oficina estruturada nas etapas de descobrir, definir, desenvolver e entregar, que utiliza atividades lúdicas, recursos visuais e a construção de personagens para abordar temas como identidade, diversidade e convivência de forma acessível às crianças.",
  },
  {
    pergunta: "Para quem é o projeto?",
    resposta:
      "O projeto é direcionado a professores da educação infantil que buscam apoio prático para trabalhar a educação antirracista em sala de aula, oferecendo materiais, referências e metodologias que facilitam a aplicação da Lei 10.639/03 no cotidiano escolar. Para os alunos, o projeto cria experiências educativas acessíveis, lúdicas e significativas, que valorizam a cultura afro-brasileira e estimulam o diálogo, a empatia e o pensamento crítico desde a infância.",
  },
  {
    pergunta: <Link href={"/invistaNaBara"}>Invista na Bará</Link>,
    resposta:
      "",
  }
];

const FAQ = () => {
  const [value, setValue] = useState();

  return (
    <div className="bg-primary min-h-auto flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">

        <div className="mt-6 w-full grid gap-x-10 py-7 px-10">
          <Accordion
            type="single"
            collapsible
            className="w-xs md:w-xl lg:w-3xl"
            value={value}
            onValueChange={setValue}>
            {faq.slice(0, 5).map(({ pergunta, resposta }, index) => (
              <AccordionItem key={pergunta} value={`pergunta-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg text-accent-foreground"
                    )}>
                    <p>{pergunta}</p>
                    <PlusIcon
                      className="h-5 w-5 shrink-0 text-accent-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-accent-foreground text-pretty py-6">
                 <p>{resposta}</p> 
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </div>
    </div>
  );
};

export default FAQ;
