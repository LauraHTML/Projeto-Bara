import Image from "next/image";

export function Figurinha02() {
    return(<>
    <div className="md:h-auto md:w-auto w-35 h-40 absolute rounded-inherit top-20 bottom-0 lg:right-40 md:right-40 min-[500px]:max-[728px]:right-5">
        <Image src={"/adesivos-h1/adesivos2-h1.png"} width={230} height={230} alt="Adesivo oficina" /> 
    </div>
    </>)
}