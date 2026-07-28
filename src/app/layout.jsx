import localFont from 'next/font/local';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Toaster } from "sonner"

import ClientWrapper from '@/components/clientWrapper/clientWrapper';
// teste
const helvetica = localFont({
  src: './fonts/Helvetica.ttf',
  variable: "--font-helvetica",
  weight: "500",
})

const ruina = localFont({
  src: './fonts/Ruina.ttf',
  variable: "--font-ruina",
  weight: "100",
})

const helveticaBold = localFont({
  src: './fonts/Helvetica.ttf',
  variable: "--font-helvetica-bold",
  weight: "500",
})

export const metadata = {
  title: {
    default: "Projeto Bará",
    template: "%s | Bará",
  },
  verification: {
    google: 'uivpAWlCCxXr5E_xD52nhHivh0P7_OzCbMynuiaDqEI',
  },
  
  description: "Bará é um projeto que investiga como o design pode atuar como ferramenta de transformação social na educação infantil, com foco na construção de práticas antirracistas. A partir do Pensamento de Design, o projeto propõe uma oficina lúdica aplicada em contexto escolar, convidando crianças e educadores a refletirem sobre identidade, diversidade e convivência desde os primeiros anos de formação.",
  keywords: ["Oficina escola", "Antirracismo", "Design", "Projeto Bará", "Ensinagem"],
  authors: [{ name: "Luiza Sampaio Neves", url: "https://www.linkedin.com/in/luiza-sampaio-0808/" }],
  openGraph: {
    title: "Conheça o Projeto Bará",
    description: "O design trabalhando o antirracismo nas escolas através de oficinas criativas.",
    url: "https://projetobara.vercel.app",
    siteName: "Projeto Bará",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logotipo-bara.png",
        width: 1200,
        height: 630,
        alt: "Preview do Projeto Bará",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Bará",
    description: "Bará-educação antirracista nas escolas através do design.",
    images: ["/logotipo-bara.png"],
  },
  icons: {
    icon: "/icone-bara.ico",
    shortcut: "/logotipo-bara.png",
    apple: "/logotipo-bara.png",
  },
};

export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${helvetica.className} ${helveticaBold.className} ${ruina.className} antialiased`}
      >
          <Navbar />
          {children}
          <Toaster />
          <Footer />
      </body>
    </html>
  );
}
