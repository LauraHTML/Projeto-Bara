"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

export default function Bara({ onFinish }) {

  return (
    <div
      className="flex items-center justify-center bg-primary h-[40rem] overflow-hidden"
    >
      <div id="h1Bara" className=" flex flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/h1Bara.png"
            alt="Logo Bara"
            height={500}
            width={600}
          />
          <h1 className="text-2xl font-bold text-accent text-center">O design e a educação para escolas antirracistas</h1>
        </div>
      </div>
    </div>
  );
}
