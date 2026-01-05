
import Image from "next/image";

export function Linhazinha02() {
    return(<>
    <div className="absolute rounded-inherit top-90 right-50 hidden lg:block">
    <div className="h-auto w-auto p-4">
        <Image src="/linhazinha02.svg" width={120} height={70} alt="Adesivo de linha" />
    </div>
    </div>
    </>)
}