import { Button } from "@/components"
import Image from "next/image"
import ItinerarySteps from "@/components/itinerary-steps"
import FloatingButton from "@/components/floating-button"
export default async function Page({ params }) {
    const tour = await getTour(params.id)
    return (
        <div className="space-y-7">
            <section className="flex flex-col">
                <span>AVENTURA</span>
                <h1 className='text-2xl font-bold'>{tour.body?.title}</h1>
                <div className="grid grid-cols-12 grid-rows-2 gap-2 h-80 my-6">
                    <div className="relative  md:col-span-8 col-span-12 row-span-2 rounded-lg">
                        <FloatingButton position={"top-left"}>
                            Ver las 8 fotos
                        </FloatingButton>
                        <Image
                            src={tour.body?.url}
                            className="rounded-sm"
                            alt="Card Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="sm:flex hidden col-span-4 row-span-1 bg-gray-200">
                        <div className="relative w-full h-full">
                            <FloatingButton position={"top-right"} className="flex flex-row">
                                Añadir a favoritos
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>

                            </FloatingButton>
                            <Image
                                className="rounded-sm"
                                src={tour.body?.url}
                                alt="Card Background"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>

                    </div>
                    <div className="sm:flex hidden lg:col-span-2 col-span-4  row-span-1">
                        <div className="relative w-full h-full">

                            <Image
                                className="rounded-sm"
                                src={tour.body?.url}
                                alt="Card Background"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                    <div className="sm:flex hidden lg:col-span-2 lg:row-span-1 ">
                        <div className="relative w-full h-full">
                            <Image
                                className="rounded-sm"
                                src={tour.body?.url}
                                alt="Card Background"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row space-x-8">
                    <p className="text-gray-700 text-xs w-full md:w-2/3">{tour.body?.about}</p>
                    <div className="w-1/3 text-right md:flex flex-row justify-between items-center hidden">
                        <div className="text-left">
                            <p className="text-xs text-gray-700">Desde</p>
                            <h2 className="font-bold md:text-xl text-xs">{tour.body?.currency} {tour.body?.price}</h2>
                            <p className="text-xs text-gray-700">por persona</p>
                        </div>
                        <Button>Ver disponibilidad</Button>
                    </div>
                </div>
            </section>

            <div className="grid md:grid-cols-2 md:space-x-8 md:space-y-0 space-y-4" >
                <section>
                    <h2 className='font-bold text-lg mb-4'>Información general</h2>
                    <ul className="space-y-4">
                        {tour.body?.general_information?.map((item, index) => (
                            <li key={index} className="space-y-2">
                                <div className="flex flex-row space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                                    </svg>
                                    <p className='text-sm font-boler'>{item.title}</p>
                                </div>
                                <p className="text-xs text-gray-500">{item.description}</p>

                            </li>
                        ))}
                    </ul>
                </section>
                <section >
                    <h2 className='font-bold text-lg mb-4'>Tu experiencia</h2>
                    <ItinerarySteps steps={tour?.body?.itinerary_steps}/>
                </section>
            </div>


        </div>
    )
}




async function getTour(id) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tours/${id}`, {
        headers: {
            'Content-Type': 'application/json;charset=iso-8859-1'
        },
        next: {
            tags: ['info'],
            revalidate: 60
        }
    })
    return res.json()
}