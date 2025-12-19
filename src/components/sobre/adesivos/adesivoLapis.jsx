import Image from "next/image";

export function Lapis() {
    return(<>
    <div className="absolute rounded-inherit top-130 right-120 rotate-20">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivoLapis.png" width={280} height={250} alt="Adesivo de lápis" />
    </div>
    </div>
    </>)
}