import Image from "next/image";

export function PoderAdesivo02() {
    return(<>
    <div className="absolute rounded-inherit lg:top-30 top-30 lg:left-70 left-10 md:top-20 md:left-30">
    <div className="h-30 w-30 md:h-auto md:w-auto p-4">
        <Image src="/adesivos-poderes/poder-coracao.png" width={150} height={70} alt="Adesivo de superpoder coração" />
    </div>
    </div>
    </>)
}