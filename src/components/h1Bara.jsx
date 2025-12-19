"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

export default function Bara({ onFinish }) {
  const container = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: onFinish, // Finaliza a animação e libera o site
    });

    // animação do título (reduzindo de tamanho)
    tl.fromTo(
      titleRef.current,
      { scale: 3, opacity: 1 },  // começa grande
      {
        scale: 1,                // reduz até caber no site
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
    // tl.to(
    //   container.current,

    // )


  }, { scope: container });
  
    useGSAP(() => {
  
      gsap.to(
        titleRef.current,
        {
          ease: "power3.out",
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1.4,
        }
      );
  
  
    });

  return (
    <div
      ref={container}
      className="flex items-center justify-center bg-primary h-[35rem]"
    >
      <div ref={titleRef} id="h1Bara" className="h-[25rem]">
        <Image
          src="/h1Bara.png"
          alt="Logo Bara"
          height={500}
          width={600}
        />
        <div className="h-3xl">
        <h1 className="opacity-0 translate-y-10 text-2xl text-center" ref={titleRef} id="text">Design e educação para escolas antirracistas</h1>
        </div>
      </div>
    </div>
  );
}
