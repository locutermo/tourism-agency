import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/header'
import Footer from '@/components/footer'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import SessionWrapper from "@/components/SessionWrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agencia de Turismo",
  description: "...",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
  
}>) {

  return (
    <SessionWrapper>
    <html lang="es" dir="ltr">
      <body  className={`${inter.className} body-group  flex flex-col w-full  `}>
          <Header/>
          <main className="[&>*]:lg:px-32 [&>*]:md:px-16 [&>*]:sm:px-16 [&>*]:px-4 [&>*]:py-8">
            {children}
          </main>
          <Footer/>
        <SpeedInsights/>
        <Analytics />
      </body>   
    </html>
    </SessionWrapper>
      
  );
}
