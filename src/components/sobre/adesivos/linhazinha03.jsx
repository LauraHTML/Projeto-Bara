
import Image from "next/image";

export function Linhazinha03() {
    return(<>
    <div className="absolute rounded-inherit md:top-180 md:right-60 lg:top-180 lg:left-140 hidden md:block">
    <div className="h-auto w-auto p-4">
        <Image src="/linhazinha03.svg" width={120} height={70} alt="Adesivo de linha" />
    </div>
    </div>
    </>)
}
