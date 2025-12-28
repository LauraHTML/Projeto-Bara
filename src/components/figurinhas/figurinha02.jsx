import Image from "next/image";

export function Figurinha02() {
    return(<>
    <div className="w-auto h-auto absolute rounded-inherit top-20 bottom-0 lg:left-30 md:left-20 left-60 min-[500px]:max-[728px]:left-5">
        <Image src={"/rostinhos/adesivoRosto02.png"} width={150} height={150} alt="Adesivo oficina" /> 
    </div>
    </>)
}