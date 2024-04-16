'use client'
import Image from "next/image"
import Carousel from "@/components/carousel"
import { useState } from "react"


const customPadding = 'p-12 md:p-14 lg:p-36 lg:px-60'

export default function HeaderDestination({ destination }) {
    const [selected, setSelected] = useState(destination?.places[0])
    return (<section className="w-full h-auto">
        <div className="relative w-full h-72 md:h-[500px] lg:min-h-screen bg-red-200">
            <div className="absolute z-20 w-full bg-black h-full left-0 opacity-40"></div>
            <Image
                className="h-52"
                alt="Prueba"
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
                            <button key={index} onClick={() => { setSelected(place) }} className={`${selected.name == place.name && 'bg-purple-700 text-white'} hover:bg-purple-800 hover:text-white bg-white p-2 px-4 lg:py-4 lg:px-9 rounded-t-xl lg:rounded-t-2xl cursor-pointer`}>
                                <h3 className="text-xs md:text-sm">{place.name}</h3>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        {selected && (
            <div className="w-full space-y-6 flex flex-col md:flex-row p-12 md:p-14 lg:p-36 lg:px-60 md:space-x-8 lg:space-x-16">
                <div className="relative md:w-1/2 min-h-52 md:min-h-72 ">
                    <Image
                        className="rounded-xl"
                        src={selected?.img?.md}
                        fill
                        sizes="100%"
                    ></Image>
                </div>
                <p className="md:w-1/2 text-xs lg:text-sm">{selected.description}</p>
            </div>
        )}
        {selected.activities?.length > 0 && (
            <div className="flex flex-col">
                <h2 className="px-40 py-8 text-2xl uppercase font-extrabold">Actividades Turísticas</h2>
                <div className="w-full lg:px-40">
                    <Carousel items={selected.activities} />

                </div>
            </div>
        )}
        {selected.gastronomies?.length > 0 && (
            <div className="flex flex-col">
                <h2 className="px-40 py-8 text-2xl uppercase font-extrabold">Gastronomía</h2>
                <div className="w-full lg:px-40">
                    <Carousel items={selected.gastronomies} />

                </div>
            </div>
        )}

        {selected.hotels?.length > 0 && (
            <div className="flex flex-col">
                <h2 className="px-40 py-8 text-2xl uppercase font-extrabold">Hoteles</h2>
                <div className="w-full lg:px-40">
                    <Carousel items={selected.hotels} />

                </div>
            </div>
        )}
        {selected.seasons?.length > 0 && (
            <div className={`flex flex-col ${customPadding}`}>
                <h2 className="py-8 text-2xl uppercase font-extrabold">Temporadas</h2>
                <div className="w-full flex flex-col">
                    {selected.seasons?.map((season, index) => (
                        <div className={` ${season.position == 'left' ? 'self-start' : 'self-end'} w-1/2 text-${season.position} `}>
                            <h1 className="text-xl ">{season.name}</h1>
                            <p>{season.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        )}
    </section>

    )
}