"use client"

// export const metadata = {
//   title: "Contato",
// };

import { useState } from 'react';
import { Button } from "../../components/ui/button";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "../../components/ui/field";

import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { ArrowRight, PhoneCall, Clock4,Send, Mail, MessageSquare, Sparkles, UserRound } from "lucide-react";

export default function Contato() {
  const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: formData.get('name'),
                    message: formData.get('message'),
                    emailUser: formData.get('emailUser')
                }),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };


  return (
   <div className="min-h-screen bg-secondary p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center">
          <div className="text-5xl font-bold text-white mb-3">
            <h1 className='fonte-titulo'>Entre em Contato</h1>
            <p className="text-xl text-white font-normal">
            Deseja aplicar o projeto na sua escola, tem dúvidas, sugestões ou quer apoiar financeiramente? Entre em contato:
          </p>
          </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div className="space-y-2">
                    <FieldLabel className={"flex items-center text-lg font-semibold text-gray-700 mb-2"} htmlFor="name">
                      <UserRound className="w-5 h-5 mr-2 text-primary" />
                      Nome:</FieldLabel>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome"
                        required
                        className="bg-background"
                    />
                </div>              

                <div>
                    <FieldLabel htmlFor="email" className={"flex items-center text-lg font-semibold text-gray-700 mb-2"}>
                      <Mail className="w-5 h-5 mr-2 text-primary" />
                      Seu email:</FieldLabel>
                    <Input
                        id="emailUser"
                        name="emailUser"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="bg-background"
                    />
                </div>

                <div>
                    <FieldLabel htmlFor="message" className={"flex items-center text-lg font-semibold text-gray-700 mb-2"}>
                      <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                      Mensagem:</FieldLabel>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="Sua mensagem..."
                        required
                        rows="5"
                        className="resize-none md:resize-y bg-background shadow-lg h-45 w-full wrap-break-word" 
                    />
                </div>

                <Button type="submit" disabled={loading}>{loading ? 'Enviando...' : 'Enviar Mensagem'}</Button>
                {status === 'success' && (<p style={{ color: 'green' }}>✓ Email enviado com sucesso!</p>)}

                {status === 'error' && (<p style={{ color: 'red' }}>✗ Erro ao enviar email. Tente novamente.</p>)}
            </form>
          </div>

        </div>
        </div>
  );
}