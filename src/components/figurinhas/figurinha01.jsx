import Image from "next/image";

export function Figurinha01() {
    return(<>
    <div className="absolute md:h-auto md:w-auto w-35 h-40 rounded-inherit top-10 left-10 bottom-0 shadow-lg md:block">
        <Image src={"/adesivos-h1/adesivos-h1.png"} width={250} height={250} alt="Adesivo oficina" /> 
    </div>
    </>)
}