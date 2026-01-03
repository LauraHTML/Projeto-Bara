import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

import Image from "next/image";

import { Logo } from "@/components/logo";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "Conheça",
        href: "/",
      },
      {
        title: "Aplique na sua escola",
        href: "/baraNaSuaEscola",
      },
      {
        title: "Fale Conosco",
        href: "/contato",
      },
      {
        title: "Invista",
        href: "/invistaNaBara",
      },
    ],
  }
];

const Footer = () => {
  return (
    <footer className="bg-primary overflow-hidden">
      <div className="max-w-(--breakpoint-xl) mx-auto relative">
        <div className="row-span-full xl:col-span-2 z-11">
          {/* Logo */}
          <Link href={"/"}>
          <Image className="z-11" src="/logotipo-bara.png" width={320} height={320} alt={"Logotipo Bará"} />
          </Link>
        </div>
        <Separator />
        <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0 ">
          {/* Copyright */}
          <div className="flex flex-col gap-4">

            {footerSections.map(({ title, links }) => (
              <div key={title} className="px-4 flex flex-row gap-4 z-11">
                <ul className="mt-6 space-y-4 flex flex-row gap-10">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link href={href} className="text-background hover:text-foreground">
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-5 text-background z-11">
            <Link href="#" target="_blank">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <DribbbleIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <TwitchIcon className="h-5 w-5" />
            </Link>
            <Link href="#" target="_blank">
              <GithubIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-3 -right-10 z-0 pointer-events-none mr-20 md:block hidden">
          <Image src={"/aya-vermelho-2.png"} width={220} height={220} alt="Adinkra" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
