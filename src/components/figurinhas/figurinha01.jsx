import Image from "next/image";

export function Figurinha01() {
    return(<>
    <div className="absolute rounded-inherit top-10 right-10 bottom-0 shadow-lg hidden md:block">
        <Image src={"/adesivos-h1/adesivos-h1.png"} width={250} height={250} alt="Adesivo oficina" /> 
    </div>
    </>)
}