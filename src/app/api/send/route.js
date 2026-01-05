import { EmailTemplate } from "@/components/templateEmail/email"
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) { 
  try {
    //Pegar os dados enviados
    const body = await request.json();
    
    const { firstName, emailUser, message } = body;

    //Validar dados
    if (!firstName || !emailUser || !message) {
      console.log('Dados inválidos');
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' }, 
        { status: 400 }
      );}

    console.log('Enviando email:');
    const { data, error } = await resend.emails.send({
      from: 'Bará <onboarding@resend.dev>',
      to: 'laura.senai03@gmail.com',
      subject: 'Nova mensagem de contato da Oficina Bará',
      react: EmailTemplate({ firstName, message, emailUser}),
    });

    if (error) {
      console.error('Erro do Resend:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    console.log('Email enviado com sucesso!');
    return NextResponse.json({ data });
    
  } catch (error) {
    console.error('Erro capturado:', error);
    return NextResponse.json(
      { error: error.message || 'Erro desconhecido' }, 
      { status: 500 }
    );
  }
}