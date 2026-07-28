"use client"

import { useState, useEffect } from 'react';
import { FieldGroup, Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { UserRoundPen, Target } from "lucide-react";

export function ModalInicial() {
    //aberto
    const [aberto, setAberto] = useState(true);
    useEffect(() => {
        // Verifica se o usuário já viu o modal
        const jaViu = localStorage.getItem('modalVisto');
        if (!jaViu) {
            setAberto(true);
          localStorage.setItem('aberto', 'true'); // Marca como visto
        //   if (aberto) return null
        }
      }, []);


    return (
        <div>
           {aberto &&
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-titulo"
        >
            {/* Fundo borrado + escurecido */}
            <div
                className="absolute inset-0 bg-black/40 backdrop-blur-md"
                aria-hidden="true"
            />
            {/* Conteúdo do modal */}
            <div className="relative z-10 w-full max-w-sm rounded-xl border border-border bg-background p-6 shadow-xl">
                <h2 id="modal-titulo" className="sr-only">
                    Configuração inicial
                </h2>
                <form>
                    <FieldGroup className="w-full">
                        <Field>
                            <FieldLabel htmlFor="nome-input">Seu nome:</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    required
                                    id="nome-input"
                                    type="text"
                                    placeholder="Insira seu nome..."
                                />
                                <InputGroupAddon align="inline-end">
                                    <UserRoundPen />
                                </InputGroupAddon>
                            </InputGroup>
                            <FieldDescription>
                                Ele vai ser utilizado na interface para se dirigir a você
                            </FieldDescription>
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="objetivo-input">Seu objetivo:</FieldLabel>
                            <InputGroup>
                                <InputGroupInput
                                    id="objetivo-input"
                                    type="text"
                                    required
                                    placeholder="Insira seu objetivo..."
                                />
                                <InputGroupAddon align="inline-end">
                                    <Target />
                                </InputGroupAddon>
                            </InputGroup>
                            <FieldDescription>
                                Aqui você pode digitar o seu objetivo com a sua seção de estudos
                            </FieldDescription>
                        </Field>
                        <Field>
                            <Button type="submit">
                                Iniciar estudos
                            </Button>
                        </Field>
                    </FieldGroup>
                </form>

            </div>
        </div>} 
        </div>
        
        
    )
}
