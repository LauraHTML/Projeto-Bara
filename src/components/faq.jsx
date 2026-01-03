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
      "É um instrumento de letramento e aprendizado para educadores e alunos a fim de perguntaar a presença do racismo na sociedade.",
  },
  {
    pergunta: "Para quem é o projeto?",
    resposta:
      "Para educadores que buscam transmitir o poder transformador",
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
    <div className="bg-primary min-h-auto w-full flex items-center justify-center px-6 py-12">
      <div className="w-full">

        <div className="mt-6 w-full grid gap-x-10 py-7 px-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
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
                <AccordionContent className="text-base text-accent-foreground text-pretty">
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
