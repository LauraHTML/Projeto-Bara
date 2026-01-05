"use client";

import Image from "next/image";

export default function Bara({ onFinish }) {

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex items-center justify-center w-full max-w-2xl">
        <Image
          src="/titulos/barah1.png"
          alt="Bará - O design e a educação para escolas antirracistas"
          height={1000}
          width={1400}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
