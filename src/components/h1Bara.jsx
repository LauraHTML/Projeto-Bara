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
      { scale: 3, opacity: 0 },  // começa grande
      {
        scale: 1,                // reduz até caber no site
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      }
    );


  }, { scope: container });

  return (
    <div
      ref={container}
      className="flex items-center justify-center bg-primary"
    >
      <div ref={titleRef} id="h1Bara">
        <Image
          src="/h1-bara.png"
          alt="Logo Bara"
          height={300}
          width={600}
        />
      </div>
    </div>
  );
}
