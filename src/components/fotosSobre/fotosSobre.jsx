import Image from "next/image";

export function FotosSobre({margem, caminhoFoto, alt, altura, largura}) {
    return (<>
    <div className="flex flex-row w-fit h-60 ml-70 rotate-10">
        <Image src={"/fotos/criancas-desenhando.png"} width={150} height={100} alt="Foto das crianças desenhando na oficina" className="-rotate-20" />
        <Image src={"/fotos/foto-tras.png"} width={200} height={150} alt="Foto da turma participante da oficina" className="rotate-5" />
        <Image src={"/fotos/foto-turma-2.png"} width={200} height={150} alt="Foto da turma participante da oficina" className="rotate-10" />
    </div>
    </>)
}