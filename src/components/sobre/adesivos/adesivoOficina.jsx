
import Image from "next/image";

export function Oficina() {
    return(<>
    <div className="absolute rounded-inherit top-70 lg:top-90 lg:left-40 left-0 md:top-120">
    <div className="h-40 w-40 md:h-auto md:w-auto p-4">
        <Image src="/adesivo-oficina01.png" width={250} height={250} alt="Adesivo de personagem da oficina" />
    </div>
    </div>
    </>)
}