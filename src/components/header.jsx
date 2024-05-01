'use client'
import React, { useState, useEffect } from "react"
import { usePathname } from 'next/navigation';

import Image from "next/image"
import Link from "next/link"
export default function Header(params) {
  const [showBackground, setShowBackground] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const TOP_OFFSET = 50;
  const pathname = usePathname();
  const isHome = pathname === "/"
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
    <header className={`sticky z-50 border-b-2 border-gray top-0 w-full h-12 self-center md:h-20 ${showBackground && " transition-colors bg-primary duration-700"}`}>
      <div className="w-full z-30 h-full">
        {/* Desktop */}
        <div className="hidden lg:flex justify-between h-full items-center  w-full  px-8 md:px-20 lg:px-32 z-40">




          <Link href="/" className=" w-8 h-8 md:w-[199.82px] md:h-[35.83px] relative ">
            <Image
              src={`${!showBackground ? '/logo_1.png' : '/logo_3.png'}`}
              className="hidden md:block"
              alt="Logo de Ruta Mundial"
              sizes="100%"
              fill
            />


          </Link>
          <div className="flex gap-8">
            <NavLink name="Destinos Internacionales" className={`${!isHome && 'hidden'}`} showBackground={showBackground} isHome url="#international-destination" />
            <NavLink name="Destinos Nacionales" className={`${!isHome && 'hidden'}`} url="#national-destination" isHome showBackground={showBackground} />
            <NavLink name="Nosotros" url="#aboutus" className={`${!isHome && 'hidden'}`} showBackground={showBackground} />
            <Link href="/" className="hidden lg:block">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${showBackground ? 'white' : 'blue'}`} className={`w-6 h-6 ${isHome && 'hidden'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
            </Link>
          </div>

        </div>
        {/* Mobile */}
        <div className="flex lg:hidden justify-between h-full items-center  w-full  lg:px-32 md:px-16 sm:px-16 px-4 z-40">
          <Link href="/" className="hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${showBackground ? 'white' : 'blue'}`} className={`w-6 h-6 ${isHome && 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </Link>

          <Link href="/" className=" w-8 h-8 md:w-[199.82px] md:h-[35.83px] relative ">
            <Image
              src={`${!showBackground ? '/logo_1.png' : '/logo_3.png'}`}
              className="hidden md:block"
              alt="Logo de Ruta Mundial"
              sizes="100%"
              fill
            />

            <Imagotipo fill={`${showBackground ? 'white' : "#4563ff"}`} width="25px" height="25px" className="md:hidden" />

          </Link>


          <div className={` lg:hidden`}>
            <svg onClick={e => { setShowInfo(!showInfo) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${(showInfo || !isHome) && 'hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <svg onClick={e => { setShowInfo(!showInfo) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className={`w-6 h-6 ${(!showInfo || !isHome) && ' hidden'}`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

            <Link href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={`${showBackground ? 'white' : 'blue'}`} className={`w-6 h-6 ${isHome && 'hidden'}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
              </svg>
            </Link>
          </div>

        </div>
        {/* Detail Mobile */}
        <div className={`${(!showInfo || !showBackground) && 'hidden'} lg:hidden w-full py-4 h-auto sticky  transition-colors bg-[#3245a4] text-center duration-700 grid grid-cols-2 md:grid-cols-4 `}>
          <NavLink show name="Contacto" url="/contact" showBackground />
          <NavLink show name="Nosotros" url="#aboutus" showBackground />
          <NavLink show name="Destinos Internacionales" url="#international-destination" showBackground />
          <NavLink show name="Destinos Nacionales" url="#national-destination" showBackground />

        </div>
      </div>
    </header>
  )

}

const NavLink = ({ name, url, className, showBackground }) => {

  return (
    <Link href={url} className={className} >
      <span className={`text-xs lg:text-sm hover:font-bold  ${showBackground ? 'text-white' : 'text-secondary'} text-center`}>{name}</span>
    </Link>)
}






const Imagotipo = ({ fill, stroke, height, width, className }) => {
  return (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className={className}
      width={width} height={height} viewBox="0 0 5782.000000 6688.000000"
      preserveAspectRatio="xMidYMid meet">

      <g transform="translate(0.000000,6688.000000) scale(0.100000,-0.100000)"
        fill={fill} stroke={stroke}>
        <path d="M6975 66859 c-2193 -135 -4185 -1212 -5501 -2975 -873 -1169 -1368
          -2540 -1454 -4028 -14 -243 -14 -31203 0 -31471 94 -1792 736 -3377 1892
          -4670 147 -165 465 -481 628 -625 1228 -1088 2817 -1782 4460 -1949 335 -35
          572 -44 940 -38 361 6 566 20 890 63 1282 169 2507 670 3549 1452 359 269 539
          429 1008 896 446 445 16993 17208 16993 17216 0 3 -2572 1588 -5715 3524
          -3143 1935 -5715 3521 -5715 3525 0 3 647 653 1438 1444 l1438 1437 6844
          -2265 c3765 -1246 6854 -2268 6866 -2271 17 -4 500 494 2837 2929 1549 1615
          2851 2966 2894 3004 429 377 921 608 1490 699 134 21 489 30 639 15 589 -59
          1141 -325 1569 -755 406 -409 657 -908 750 -1491 25 -155 31 -501 11 -668 -65
          -557 -286 -1057 -648 -1468 -40 -46 -1406 -1363 -3036 -2927 -1630 -1564
          -2965 -2849 -2968 -2856 -3 -8 3546 -10754 4440 -13442 l94 -281 -1443 -1443
          -1442 -1442 -3519 5716 c-1935 3144 -3522 5716 -3525 5716 -7 0 -14478 -15023
          -14631 -15190 -1003 -1091 -1826 -2345 -2408 -3671 -943 -2145 -1281 -4527
          -979 -6899 257 -2029 975 -3992 2091 -5714 973 -1504 2256 -2809 3716 -3785
          805 -537 1716 -1003 2622 -1341 1267 -472 2637 -748 4030 -809 825 -37 1926
          -13 2970 64 3896 288 7733 1380 11180 3185 3129 1637 5911 3812 8264 6461
          2077 2336 3765 5004 4989 7884 1310 3084 2073 6397 2247 9760 6 116 16 307 22
          425 16 302 24 31464 8 31790 -81 1668 -693 3246 -1754 4519 -1185 1422 -2823
          2362 -4631 2660 -172 28 -397 57 -660 83 -93 9 -4965 12 -21885 14 -11971 0
          -21823 -2 -21895 -7z"/>
      </g>
    </svg>
  )
}