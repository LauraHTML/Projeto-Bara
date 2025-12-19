import Image from "next/image";

export function PoderAdesivo() {
    return(<>
    <div className="absolute rounded-inherit top-90 left-70">
    <div className="h-auto w-auto p-4">
        <Image src="/adesivos-poderes/poder-raio.png" width={150} height={70} alt="Adesivo de sujeira de lápis" />
    </div>
    </div>
    </>)
}