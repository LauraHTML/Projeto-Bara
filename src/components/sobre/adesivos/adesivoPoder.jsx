import Image from "next/image";

export function PoderAdesivo() {
    return(<>
    <div className="absolute rounded-inherit top-160 lg:top-130 right-5 md:right-13 lg:left-90">
    <div className="h-40 w-40 md:h-auto md:w-auto p-4">
        <Image src="/adesivos-poderes/poder-raio.png" width={150} height={70} alt="Adesivo de superpoder raio" />
    </div>
    </div>
    </>)
}