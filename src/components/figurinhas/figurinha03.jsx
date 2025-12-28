import Image from "next/image";

export function Figurinha03() {
    return(<>
    <div className="md:h-auto md:w-auto w-35 h-40 absolute rounded-inherit top-90 md:left-20 left-6 min-[1100px]:max-[595px]:left-20 bottom-0">
        <Image src={"/rostinhos/adesivo-oficina01.png"} width={250} height={250} alt="Adesivo oficina" /> 
    </div>
    </>)
}