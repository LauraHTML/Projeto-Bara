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
      <div id="h1Bara" className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/titulos/barah1.png"
            alt="Bará - O design e a educação para escolas antirracistas"
            height={700}
            width={800}
          />
        </div>
      </div>
    </div>
  );
}
