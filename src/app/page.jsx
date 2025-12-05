"use client"
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

import Image from "next/image";
import Hero from "@/components/hero"
import FAQ from "@/components/faq";
import Bara from "@/components/h1Bara";
import Sobre from "@/components/sobre";

import { Figurinha01 } from "@/components/figurinhas/figurinha01";

import IntroAnimation from "@/components/introAnimation";

export default function Home() {
  const titleRef = useRef(null);

  useGSAP(() => {

    gsap.to(
      titleRef.current,
      {
        ease: "power3.out",
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
      }
    );


  });

  return (
    <div className="flex w-full">
      <main className="flex min-h-screen w-full flex-col items-center sm:items-start">
        <div className="bg-primary centralizar w-full h-screen overflow-hidden">
          <div className="centralizar flex-col transition-all duration-700 w-full shrunk">
              <Bara />
          <h1 className="opacity-0 translate-y-10" ref={titleRef} id="text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
        </div>
        <div className="static rounded-inherit">
          <Figurinha01 />
        </div>
        </div>
        <div className="">
          <Hero />
        </div>
        <Sobre />
        <FAQ />
      </main>
    </div>
  );
}
