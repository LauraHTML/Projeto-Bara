import Image from "next/image";

export function Canetinha() {
    return(<>
    <div className="absolute rounded-inherit top-120 right-150 rotate-50">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivoCanetinha.png" width={280} height={100} alt="Adesivo de canetinha" />
    </div>
    </div>
    </>)
}