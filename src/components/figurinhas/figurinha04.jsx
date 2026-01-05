"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";

export function Figurinha04() {

    const titleRef = useRef(null);
  useGSAP(() => {
    gsap.to(titleRef.current, {
        rotation: "+=20",    
        duration: 0.9,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });

  });

    return(<>
    <div ref={titleRef} className="absolute md:h-auto md:w-auto w-35 h-40 rounded-inherit top-100 bottom-0 lg:right-30 md:right-20 right-3 min-[500px]:max-[728px]:right-4">
        <Image src={"/adesivos-h1/adesivos4-h1.png"} width={240} height={240} alt="Adesivo oficina" /> 
    </div>
    </>)
}