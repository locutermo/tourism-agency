import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agencia de Turismo",
  description: "...",
};



export default function RootLayout({
  children,...restProps
}: Readonly<{
  children: React.ReactNode;
  restProps?: any
}>) {

  return (
    <html lang="es">
      <body className={`${inter.className} mt-2 flex flex-col space-y-8  `}>
        <Header/>
        <main className="lg:mx-32 md:mx-16 sm:mx-16 mx-4">
          {children}
        </main>
        <Footer/>
        </body>   
    </html>
      
  );
}
