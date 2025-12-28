
import Image from "next/image";

export function Linhazinha01() {
    return(<>
    <div className="absolute rounded-inherit top-5 left-120 hidden lg:block">
    <div className="h-auto w-auto p-4">
        <Image src="/linhazinha01.svg" width={250} height={270} alt="Adesivo de linha" />
    </div>
    </div>
    </>)
}