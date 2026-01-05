"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function ClientWrapper({children}){
    const [isLoading, setIsLoading] = useState(true);
    const [progresso, setProgresso] = useState(0);

    useEffect(()=>{
        const loaderVisto = sessionStorage.getItem('viuLoader')
        if(loaderVisto){
            setIsLoading(false);
        }
        else{
            const temporizador = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('viuLoader','true');
            }, 4000)
            return () => clearTimeout(temporizador);
        }
    },[])

    return(<>
    {isLoading && (
        <div className="fixed flex-col centralizar inset-0 z-9999">
           <div className='h-screen w-full bg-accent centralizar flex flex-col fixed inset-0 z-9999'>
           
                 <Image src={"/preloader.gif"} height={150} width={440} alt={"Gif de carregamento"} />
                 <h1 className='fonte-titulo text-xl'>Carregando</h1>
               </div>
        </div>
    )}
    <div className={isLoading ? "hidden" : "relative"}>
        {children}
    </div>
    </>)
}