import Image from "next/image";

export function Caneta() {
    return(<>
    
    <div className="absolute rounded-inherit top-70 right-90 hidden lg:block">
    <div className="h-auto w-auto p-4">
        <Image src="/caneta.png" width={200} height={200} alt="Adesivo de caneta" />
    </div>
    </div>
    </>)
}