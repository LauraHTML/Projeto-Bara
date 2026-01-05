"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";

export function Figurinha03() {

    const titleRef = useRef(null);
  useGSAP(() => {
    gsap.to(titleRef.current, {
        rotation: "-50",    
        duration: 0.8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });

  });

    return(<>
    <div ref={titleRef} className="md:h-auto md:w-auto w-35 h-40 absolute rounded-inherit md:left-50 hidden md:block min-[1100px]:max-[595px]:left-20 bottom-0 -rotate-20">
        <Image src={"/adesivos-h1/adesivos3-h1.png"} width={250} height={250} alt="Adesivo oficina" /> 
    </div>
    </>)
}