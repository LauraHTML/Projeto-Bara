"use client";
import { useState, useEffect } from "react";

import Loader from "../loader";

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
            <Loader />
        </div>
    )}
    <div className={isLoading ? "hidden" : "relative"}>
        {children}
    </div>
    </>)
}