export const metadata = {
  title: "Contato",
  description: "Entre em contato conosco para saber mais sobre o Projeto Bará e nossas oficinas nas escolas.",  
};

import ContatoForm from "@/components/contatoForm/contatoForm";

export default function Contato() {

  return (
  <div className="min-h-screen bg-secondary p-4 sm:p-8">
      <ContatoForm />
  </div>
  );
}