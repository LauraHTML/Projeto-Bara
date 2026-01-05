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
        <div className="w-full h-[45rem] max-w-5xl bg-[url(/papel-dobrado-horizontal.jpg)] bg-cover md:bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center shadow-xl p-4">
          <Lapis />
          <div className="md:w-3xl w-xs text-center text-wrap balance">
            {/* <Image src="/educacao.png" width={500} height={500} alt="O design e a educação para escolas antirracistas" /> */}
            <p className="fonte-titulo text-2xl md:text-2xl font-light text-foreground"> Bará é um projeto que investiga como o design pode atuar como ferramenta de transformação social na&nbsp;educação infantil, com foco na construção de práticas antirracistas. A partir do&nbsp;Pensamento de Design, o&nbsp;projeto propõe uma oficina lúdica aplicada em contexto escolar<span className="hidden md:block">, convidando crianças e educadores a refletirem sobre identidade, diversidade e convivência desde os primeiros anos de formação.</span></p>
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