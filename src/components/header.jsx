'use client'
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
export default function Header(params) {
  const [showBackground, setShowBackground] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const TOP_OFFSET = 10;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <header className={`z-50 w-full h-12 fixed self-center md:h-20 ${showBackground && " transition-colors bg-[#3245a4] duration-300"}`}>
      <div className="absolute lg:px-40 w-full z-30 h-full">
        <div className="flex justify-between h-full items-center  w-full  lg:px-32 md:px-16 sm:px-16 px-4 z-40">
          <NavLink name="Contacto" url="/contact" />
          <NavLink name="Destinos Internacionales" url="#international-destination" />

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

          <NavLink name="Destinos Nacionales" url="#national-destination" />
          <NavLink name="Nosotros" url="#aboutus" />
          <button onClick={e => { setShowInfo(!showInfo) }} className={`${!showBackground && 'hidden'} lg:hidden`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${showInfo && 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${!showInfo && ' hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </button>
        </div>
        <div className={`${(!showInfo || !showBackground) && 'hidden'} lg:hidden w-full py-4 h-auto sticky  transition-colors bg-[#3245a4] text-center duration-700 grid grid-cols-2 md:grid-cols-4 `}>
          <NavLink show name="Contacto" url="/contact" />
          <NavLink show name="Nosotros" url="#aboutus" />
          <NavLink show name="Destinos Internacionales" url="#international-destination" />
          <NavLink show name="Destinos Nacionales" url="#national-destination" />
          
        </div>
      </div>
    </header>
  )

}

const NavLink = ({ name, url, show }) => {
  return (
    <Link href={url} className={`${show ? 'block' : ' hidden lg:flex'} `}>
      <span className="text-xs lg:text-sm font-bold text-white text-center">{name}</span>
    </Link>)
}