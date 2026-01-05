"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";

export function Figurinha01() {

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
    <div ref={titleRef} className="absolute md:h-auto md:w-auto w-35 h-40 rounded-inherit top-4 left-4 bottom-0 shadow-lg md:block">
        <Image src={"/adesivos-h1/adesivos-h1.png"} width={250} height={250} alt="Adesivo oficina" /> 
    </div>
    </>)
}