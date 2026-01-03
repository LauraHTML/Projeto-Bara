import localFont from 'next/font/local';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ClientWrapper from '@/components/clientWrapper/clientWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  description: "Aqui você coloca um resumo atrativo de até 160 caracteres sobre o que é o Projeto Bará.",
  keywords: ["Oficina escola", "Antirracismo", "Design", "Projeto Bará", "Ensinagem"],
  authors: [{ name: "Luiza Sampaio Neves", url: "https://www.linkedin.com/in/luiza-sampaio-0808/" }],
  openGraph: {
    title: "Conheça o Projeto Bará",
    description: "Uma breve descrição que convence a pessoa a clicar no link.",
    url: "https://projetobara.vercel.app",
    siteName: "Projeto Bará",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Preview do Projeto Bará",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projeto Bará",
    description: "Descrição curta para o Twitter.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
