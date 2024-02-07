import { Button } from "@/components"
import Image from "next/image"

export default async function Page({ params }) {

    const tour = await getTour(params.id)
    return (
        <div className="space-y-7">
            <section className="flex flex-col">
                <span>AVENTURA</span>
                <h1 className='text-2xl font-bold'>{tour.body?.title}</h1>
                <div className="grid grid-cols-12 grid-rows-2 gap-2 h-80 my-6">
                    <div className="relative col-span-8 row-span-2 rounded-lg">
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
                    <div className="relative col-span-4 row-span-1">
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
                    <div className="relative lg:col-span-2 col-span-4  row-span-1">
                        <Image
                            className="rounded-sm"
                            src={tour.body?.url}
                            alt="Card Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="relative lg:col-span-2 lg:row-span-1 ">
                        <Image
                            className="rounded-sm"
                            src={tour.body?.url}
                            alt="Card Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                </div>
                <div className="flex flex-row space-x-8">
                    <p className="text-gray-700 text-xs w-2/3">{tour.body?.about}</p>
                    <div className="w-1/3 text-right flex flex-row justify-between items-center">
                        <div className="text-left">
                            <p className="text-xs text-gray-700">Desde</p>
                            <h2 className="font-bold text-xl">{tour.body?.currency} {tour.body?.price}</h2>
                            <p className="text-xs text-gray-700">por persona</p>
                        </div>
                        <Button>Ver disponibilidad</Button>
                    </div>
                </div>
            </section>
            <section>

            </section>

            <section>
                <h2 className='font-bold text-lg mb-4'>Información general</h2>
                <ul className="space-y-4">
                    {tour.body?.general_information?.map((item, index) => (
                        <li key={index} className="space-y-2">
                            <p className='text-sm font-boler'>{item.title}</p>
                            <p className="text-xs text-gray-500">{item.description}</p>

                        </li>
                    ))}
                </ul>
            </section>
            <section>
            </section>
        </div>
    )



}




export function FloatingButton({ children, position = "top-left", className, ...restProps }) {

    const positionStyle = position === 'top-left' ? 'top-4 left-4' : (
        position === 'top-right' ? 'top-4 right-4' : (
            position === 'bottom-right' ? 'bottom-4 right-4' : (
                position === 'bottom-left' ? 'bottom-4 left-4' : ''
            )
        )
    )

    return <button {...restProps} className={`absolute text-xs ${positionStyle} w-auto p-2 rounded-md h-8 bg-white z-20 ${className}`}>
        {children}
    </button>
}


async function getTour(id) {
    const res = await fetch(`http://localhost:3000/api/tours/${id}`, {
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