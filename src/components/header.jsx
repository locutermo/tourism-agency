import Link from "next/link"
import Image from "next/image"
export default async function Header(params) {

  return (
    <header className="absolute z-50 w-full h-12  self-center  md:h-20">
      <div className="absolute lg:px-40 w-full z-30 h-full">
        <div className="flex justify-between h-full items-center  md:justify-between w-full  lg:px-32 md:px-16 sm:px-16 px-4 z-40">
          <NavLink name="Contacto" url="/contact" />
          <NavLink name="Destinos Internacionales" url="/contact" />

          <Link href="/" className=" w-8 h-8 md:w-[199.82px] md:h-[35.83px] relative ">
            <Image
              src={"/logo_3.png"}
              className="hidden md:block"
              alt="Logo de Ruta Mundial"
              sizes="100%"
              fill
            />
            <Image
              className="md:hidden"
              src={"/imagotipo.svg"}
              alt="Logo de Ruta Mundial"
              sizes="100%"
              fill
            />
          </Link>

          <NavLink name="Destinos Nacionales" url="/contact" />
          <NavLink name="Nosotros" url="/contact" />
        </div>
      </div>
    </header>
  )

}

const NavLink = ({ name, url }) => {
  return (
    <Link href={url} className="hidden lg:flex ">
      <span className="text-xs lg:text-sm font-bold text-white text-center">{name}</span>
    </Link>)
}