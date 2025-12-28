import Image from "next/image";

export function Lapis() {
    return(<>
    <div className="absolute rounded-inherit hidden lg:top-130 lg:right-120 lg:rotate-20 md:top-30">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivoLapis.png" width={280} height={250} alt="Adesivo de lápis" />
    </div>
    </div>
    </>)
}