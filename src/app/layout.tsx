import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
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
      <body className={inter.className}>
        <header className="flex flex-row content-center justify-between px-5 py-2  h-20 mx-8">
          <div className="p-2 h-100 w-20">
          <Link href="/">
            <Image 
              src={"https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg"}
              alt="Picture of the author"
              width={50}
              height={50}

            />
          </Link>

          </div>
          <div className="flex flex-wrap p-2 justify-center space-x-2">
            <Link href="/tours">
              <Image src={"./profileicon.svg"} width={20} height={20} alt="Ìcono de perfil"/>
            </Link>
          </div>
        </header>
        <section className="m-10 mx-20">
          {children}
        </section>
     
      </body>
    </html>
  );
}
