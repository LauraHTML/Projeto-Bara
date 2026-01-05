//materiais
import { Canetinha } from "./adesivos/adesivoCanetinhas";
import { Lapis } from "./adesivos/adesivoLapis";

//adesivos
import { Oficina } from "./adesivos/adesivoOficina";
import { PoderAdesivo } from "./adesivos/adesivoPoder";
import { PoderAdesivo02 } from "./adesivos/adesivoPoder02";
import { Oficina02 } from "./adesivos/adesivoOficina02";
import { PoderAdesivo03 } from "./adesivos/adesivoPoder03";
//linhas decorativas
import { Linhazinha03 } from "./adesivos/linhazinha03";
import { Linhazinha02 } from "./adesivos/linhazinha02";
import { Linhazinha01 } from "./adesivos/linhazinha01";

import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <section className="centralizar md:h-[60rem] h-screen flex-row w-full relative overflow-hidden">
        <div className="w-full h-[60rem] max-w-6xl bg-[url(/papel-dobrado.jpg)] bg-cover md:bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center shadow-xl p-4">
          <Lapis />
          <div className="md:w-lg w-xs max-w-[30rem] text-center">
            {/* <Image src="/educacao.png" width={500} height={500} alt="O design e a educação para escolas antirracistas" /> */}
            <p className="fonte-titulo text-2xl md:text-3xl font-bold text-accent"> Bará é um projeto que investiga como o design pode atuar como ferramenta de transformação social na educação infantil, com foco na construção de práticas antirracistas. A partir do Pensamento de Design, o projeto propõe uma oficina lúdica aplicada em contexto escolar, convidando crianças e educadores a refletirem sobre identidade, diversidade e convivência desde os primeiros anos de formação.</p>
          </div>
          <div className="">
            <Canetinha />
            <Oficina />
            <PoderAdesivo />
            <PoderAdesivo02 />
            <PoderAdesivo03 />
            <Oficina02 />
            <Linhazinha01 />
            <Linhazinha02 />
            <Linhazinha03 />
          </div>

        </div>
      </section>
    </>
  );
}