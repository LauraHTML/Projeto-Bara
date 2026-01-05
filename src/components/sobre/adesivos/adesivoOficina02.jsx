import Image from "next/image";

export function Oficina02() {
    return(<>
    <div className="absolute rounded-inherit lg:right-90 top-0 lg:top-20 -rotate-30 md:top-10 md:right-30 right-0">
    <div className="h-30 w-30 md:h-auto md:w-auto">
        <Image src="/adesivos-h1/adesivos5-h1.png" width={200} height={200} alt="Adesivo de personagem da oficina" />
    </div>
    </div>
    </>)
}