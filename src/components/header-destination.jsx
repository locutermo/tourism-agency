'use client'
import Image from "next/image"
import Carousel from "@/components/carousel"
import { useState } from "react"
import { rgbDataURL } from '@/lib/util'

import WhatsappButton from '@/components/whatsapp-button'

const customPadding = 'p-12 md:p-14 lg:p-36 lg:px-60'

export default function HeaderDestination({ destination }) {
    const [selected, setSelected] = useState(destination?.places[0])
    return (<section className="w-full h-auto">
        <div className="relative w-full h-72 md:h-[500px] lg:min-h-screen ">
            <div className="absolute z-20 w-full bg-black  h-full left-0 opacity-40"></div>
            <Image
                placeholder="blur"
                blurDataURL={rgbDataURL(161, 177, 255)}
                className="h-52"
                alt={destination.name}
                style={{ objectFit: "cover" }}
                src={destination.img?.lg}
                fill
                sizes="100%"
            />
            <div className="absolute z-40 w-full h-full left-0">
                <div className="flex w-full md:w-2/3 lg:w-1/2 h-full px-8 md:px-20 lg:px-32 flex-col justify-center md:space-y-2">
                    <h1 className="text-white font-extrabold md:text-4xl lg:text-7xl">{destination.name}</h1>
                    <p className="text-white text-xs lg:text-sm">{destination.description}</p>
                </div>
            </div>
            {destination.places && (

                <div className="absolute z-40 w-full h-auto bottom-0 ">
                    <div className="flex justify-center space-x-2 md:space-x-6  w-full">
                        {destination.places?.map((place, index) => (
                            <button key={index} onClick={() => { setSelected(place) }} className={`${selected.name === place.name ? 'bg-white text-black' : 'bg-purple-900 text-white'} hover:bg-purple-600 hover:text-white p-2 px-4 lg:py-4 lg:px-9 rounded-t-xl lg:rounded-t-2xl cursor-pointer`}>
                                <h3 className="text-xs md:text-sm">{place.name}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>

        {selected && (
            <div className="w-full space-y-6 flex flex-col md:flex-row p-12 md:p-14 lg:p-36 lg:px-60 md:space-x-8 lg:space-x-16">
                <div className="border-4 rounded-xl  md:w-1/2 p-2 shadow-sm md:shadow-md lg:shadow-lg  shadow-[#4563ff]  w-full space-y-5 flex flex-col items-center">
                    <div className="relative w-full min-h-52 md:min-h-72 xl:h-[500px]">
                        <Image
                            placeholder="blur"
                            blurDataURL={rgbDataURL(161, 177, 255)}
                            className="rounded-xl"
                            alt={selected.nameç}
                            src={selected?.img?.md}
                            fill
                            sizes="100%"
                        ></Image>
                    </div>
                    <WhatsappButton number="941155491" className="text-secondary p-2" message={`Hola, me gustaría cotizar un paquete para ${selected.name}`}>Solicitar paquete aqui</WhatsappButton>
                </div>

                <p className="md:w-1/2 text-xs lg:text-base">{selected.description}</p>
            </div>
        )}

        {selected.hotels?.length > 0 && (
            <CarouselContainer title="Hoteles">
                <Carousel items={selected.hotels} />
            </CarouselContainer>
        )}

        {selected.activities?.length > 0 && (
            <CarouselContainer title="Actividades Turísticas">
                <Carousel items={selected.activities} />
            </CarouselContainer>
        )}
        {selected.gastronomies?.length > 0 && (
            <CarouselContainer title="Gastronomía">
                <Carousel items={selected.gastronomies} />
            </CarouselContainer>
        )}

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2400 800">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sssurf-grad">
                    <stop stopColor="hsl(208, 77%, 50%)" stopOpacity="1" offset="0%"></stop>
                    <stop stopColor="hsl(208, 74%, 93%)" stopOpacity="1" offset="100%"></stop>
                </linearGradient>
            </defs>
            <g fill="hsl(230, 55%, 40%)" transform="matrix(1,0,0,1,10.8282470703125,309.02282905578613)">
                <path d="M-10,10C33.75,12.291666666666666,114.58333333333334,26.625,200,21C285.41666666666663,15.375,316.66666666666663,-18.666666666666668,400,-17C483.33333333333337,-15.333333333333334,516.6666666666666,29.833333333333332,600,29C683.3333333333334,28.166666666666668,716.6666666666666,-21.208333333333332,800,-21C883.3333333333334,-20.791666666666668,916.6666666666666,30,1000,30C1083.3333333333333,30,1116.6666666666667,-21.416666666666668,1200,-21C1283.3333333333333,-20.583333333333332,1316.6666666666667,32.416666666666664,1400,32C1483.3333333333333,31.583333333333332,1516.6666666666667,-24.875,1600,-23C1683.3333333333333,-21.125,1716.6666666666667,39.958333333333336,1800,41C1883.3333333333333,42.041666666666664,1916.6666666666667,-16.958333333333332,2000,-18C2083.3333333333335,-19.041666666666668,2118.75,30.166666666666664,2200,36C2281.25,41.833333333333336,2296.25,-65.83333333333333,2390,10C2483.75,85.83333333333333,3252.0833333333335,214.58333333333331,2650,400C2047.9166666666665,585.4166666666667,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,35)" opacity="0.05"></path>
                <path d="M-10,10C33.75,12.291666666666666,114.58333333333334,26.625,200,21C285.41666666666663,15.375,316.66666666666663,-18.666666666666668,400,-17C483.33333333333337,-15.333333333333334,516.6666666666666,29.833333333333332,600,29C683.3333333333334,28.166666666666668,716.6666666666666,-21.208333333333332,800,-21C883.3333333333334,-20.791666666666668,916.6666666666666,30,1000,30C1083.3333333333333,30,1116.6666666666667,-21.416666666666668,1200,-21C1283.3333333333333,-20.583333333333332,1316.6666666666667,32.416666666666664,1400,32C1483.3333333333333,31.583333333333332,1516.6666666666667,-24.875,1600,-23C1683.3333333333333,-21.125,1716.6666666666667,39.958333333333336,1800,41C1883.3333333333333,42.041666666666664,1916.6666666666667,-16.958333333333332,2000,-18C2083.3333333333335,-19.041666666666668,2118.75,30.166666666666664,2200,36C2281.25,41.833333333333336,2296.25,-65.83333333333333,2390,10C2483.75,85.83333333333333,3252.0833333333335,214.58333333333331,2650,400C2047.9166666666665,585.4166666666667,156.25,795.8333333333334,-500,900" transform="matrix(1,0,0,1,0,70)" opacity="1.00"></path>
            </g>
        </svg>
        {selected.seasons?.length > 0 && (
            <div className={`flex flex-col ${customPadding} min-h-screen`}>

                <h2 className="py-8 text-xl md:text-2xl uppercase font-extrabold text-[#3245a4]">Temporadas</h2>
                <div className="w-full flex flex-col">
                    {selected.seasons?.map((season, index) => (
                        <div key={index} className={` ${season.position == 'left' ? 'md:self-start' : 'md:self-end'} md:w-1/2 md:text-${season.position} py-4`}>
                            <h1 className="text-md md:text-xl ">{season.name}</h1>
                            {getDescription(season.description)}
                        </div>
                    ))}

                </div>
            </div>
        )}
    </section>

    )
}

const getDescription = (text) => {
    if (text.includes("-")) {
        return (<ul>
            {text.split("-").filter(e => e != "").map((item, index) => (
                <li key={index} className="text-xs md:text-sm">
                    <p>{item}</p>
                </li>
            ))}
        </ul>)
    } else return <p className="text-xs md:text-sm">{text}</p>

}

const CarouselContainer = ({ children, title }) => {
    return <div className="flex flex-col">
        <h2 className="px-8 md:px-20 lg:px-40 py-8 text-base md:text-xl lg:text-2xl uppercase font-extrabold text-[#3245a4]">{title}</h2>
        <div className="w-full lg:px-40">
            {children}
        </div>
    </div>
}