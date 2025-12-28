import Image from "next/image";

export function PoderAdesivo03() {
    return(<>
    <div className="absolute rounded-inherit top-50 right-60 hidden lg:block">
    <div className="h-40 w-40 md:h-auto md:w-auto p-4">
        <Image src="/adesivos-poderes/poder-cerebro.png" width={150} height={70} alt="Adesivo superpoder cérebro" />
    </div>
    </div>
    </>)
}