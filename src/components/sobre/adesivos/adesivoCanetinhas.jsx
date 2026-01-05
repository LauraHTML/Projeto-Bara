import Image from "next/image";

export function Canetinha() {
    return(<>
    <div className="absolute rounded-inherit top-200 right-100 hidden lg:block">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivoCanetinha.png" width={280} height={100} alt="Adesivo de canetinha" />
    </div>
    </div>
    </>)
}