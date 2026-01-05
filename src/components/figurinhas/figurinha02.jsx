"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";

export function Figurinha02() {

const titleRef = useRef(null);
  useGSAP(() => {
    gsap.to(titleRef.current, {
        rotation: "-30",    
        duration: 1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.5
    });

  });

    return(<>
    <div ref={titleRef} className="md:h-auto md:w-auto w-35 h-40 -rotate-10 absolute rounded-inherit top-20 bottom-0 lg:right-40 md:right-40 min-[500px]:max-[728px]:right-5">
        <Image src={"/adesivos-h1/adesivos2-h1.png"} width={230} height={230} alt="Adesivo oficina" /> 
    </div>
    </>)
}