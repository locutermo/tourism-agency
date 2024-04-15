import Link from "next/link"
import Image from "next/image"
export default async function Header(params) {

  return (
    <header className="absolute z-50 w-full h-12  md:h-20">
      <div className="absolute z-20 w-full bg-purple-900 h-full left-0 opacity-20"></div>
      <div className="absolute lg:px-40 w-full z-30 h-full">
        <div className="flex justify-between h-full items-center  md:justify-between w-full  lg:px-32 md:px-16 sm:px-16 px-4 z-40">
          <NavLink name="Contacto" url="/contact" />
          <NavLink name="Destinos Internacionales" url="/contact" />

          <Link href="/" className="relative w-10 h-10">
            <Image
              src={"https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg"}                            
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
    <Link href={url} className="hidden md:flex ">
      <span className="text-xs lg:text-sm font-bold text-white text-center">{name}</span>
    </Link>)
}