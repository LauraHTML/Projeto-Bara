"use client";

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
    question: "O que é Bara?",
    answer:
      "É um instrumento de letramento e aprendizado para educadores e alunos a fim de questionar a presença do racismo na sociedade.",
  },
  {
    question: "Para quem é o projeto?",
    answer:
      "Para educadores que buscam transmitir o poder transformador",
  },
  {
    question: "Invista na Bará",
    answer:
      "We accept Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay, ensuring secure payment options for all customers.",
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
            {faq.slice(0, 5).map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`}>
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg text-accent-foreground"
                    )}>
                    <p>{question}</p>
                    <PlusIcon
                      className="h-5 w-5 shrink-0 text-accent-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-base text-accent-foreground text-pretty">
                 <p>{answer}</p> 
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
