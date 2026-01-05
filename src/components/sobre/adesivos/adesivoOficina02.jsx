import Image from "next/image";

export function Oficina02() {
    return(<>
    <div className="absolute rounded-inherit lg:right-70 top-0 lg:top-10 -rotate-50 md:top-10 md:right-30 right-0">
    <div className="h-30 w-30 md:h-auto md:w-auto">
        <Image src="/adesivo-oficina02.png" width={200} height={200} alt="Adesivo de personagem da oficina" />
    </div>
    </div>
    </>)
}