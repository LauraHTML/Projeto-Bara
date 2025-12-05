import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Projeto Bará",
    template: "%s | Projeto Bará", // Em outras páginas, o título fica: "Contato | Projeto Bará"
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
        url: "/og-image.jpg", // Uma imagem que você coloca na pasta 'public'
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
    images: ["/og-image.jpg"], // Mesma imagem do Open Graph
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png", // Ícone para quando salvam o site na tela do iPhone
  },
};

export const viewport = {
  themeColor: '#000000', // Cor da barra do navegador no mobile
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
