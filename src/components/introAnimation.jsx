"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function IntroAnimation() {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Anima o nome surgindo
    tl.from(textRef.current, {
      x:0,
      opacity: 0,
      duration: 1,
      scale: 3,
      ease: "power3.out"
    });

    // Pequeno brilho / destaque
    tl.to(textRef.current, {
        x:0,
      scale: 1,
      duration: 2,
      ease: "power2.out"
    });

    // Volta ao normal suavemente
    tl.to(textRef.current, {
        x:0,
      scale: 1,
      duration: 2,
      ease: "power3.out"
    });
  });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <h1
        ref={textRef}
        className="text-primary text-6xl font-bold"
      >
        Meu Site
      </h1>
    </div>
  );
}
