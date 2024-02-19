import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agencia de Turismo",
  description: "...",
};



export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
  
}>) {

  return (
    <html lang="es">
      <body className={`${inter.className} mt-2 flex flex-col space-y-8  `}>
        <Header/>
        <main className="lg:mx-32 md:mx-16 sm:mx-16 mx-4">
          {children}
        </main>
        <Footer/>
        <SpeedInsights/>
        <Analytics />

      </body>   
    </html>
      
  );
}
