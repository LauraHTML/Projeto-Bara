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
      <section className="centralizar md:h-lvh h-fit flex-row w-full mt-5 relative overflow-hidden">
        <div className="aspect-550/720 w-full max-w-6xl bg-[url(/papel.png)] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center p-12 shadow-xl">
          <Lapis />
          <div className="md:w-90 w-40 max-w-[30rem] text-center">
            {/* <Image src="/educacao.png" width={500} height={500} alt="O design e a educação para escolas antirracistas" /> */}
            <h1 className="text-sm md:text-4xl font-bold text-accent">Bará é uma palavra vinda do Iorubá idioma proveniente da Africa Ocidental.</h1>
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