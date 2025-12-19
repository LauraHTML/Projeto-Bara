import Image from "next/image";

export function Oficina02() {
    return(<>
    <div className="absolute rounded-inherit top-0 right-100 -rotate-50">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivo-oficina02.png" width={200} height={200} alt="Adesivo de sujeira de lápis" />
    </div>
    </div>
    </>)
}