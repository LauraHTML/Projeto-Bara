import Image from "next/image";
import { ArrowDown } from "lucide-react"

export function SobreCard({ titulo, descricao, margemTitulo, corFundo, fotinho, corBorda }) {
    return (<>
        <div className="flex flex-col md:flex-row w-fit transition duration-300 hover:-translate-y-1 hover:scale-100">
            <div className="card-sobre w-fit z-11">
                <div className={`${corFundo} p-4 pb-0 w-fit flex flex-row gap-4 items-center ${margemTitulo}`}>
                    <h1 className="text-2xl font-bold">{titulo}</h1>
                </div>

                <div className={`${corFundo} p-0 rounded-2xl w-full sm:w-sm md:1/2 lg:max-w-full text-balance h-70 relative overflow-hidden`}>
                    <p className="absolute w-md p-5 pb-0 z-10 text-xl">{descricao}</p>
                    <div className="absolute -bottom-10 -right-10 z-0 opacity-80 pointer-events-none">
                        <Image src={fotinho} width={200} height={200} alt="Adinkra" />
                    </div>
                </div>
            </div>
        </div>

    </>)
}