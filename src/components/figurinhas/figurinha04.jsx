import Image from "next/image";

export function Figurinha04() {
    return(<>
    <div className="absolute rounded-inherit top-100 bottom-0 lg:right-30 md:right-20 right-60 min-[500px]:max-[728px]:right-4">
        <Image src={"/adesivos-h1/adesivos4-h1.png"} width={240} height={240} alt="Adesivo oficina" /> 
    </div>
    </>)
}