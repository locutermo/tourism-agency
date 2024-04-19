import { getInternationalDestinations } from '@/lib/agency'
import Image from 'next/image'
import Link from 'next/link'
export default async function InternationalSection({ ...restProps }) {
    const destinations = await getInternationalDestinations(['international-destinations'])

    return <section className="py-8 px-4 md:px-20 xl:px-[20%] flex z-50 flex-col w-full">
        <h3 className="text-xl font-bold md:text-3xl text-center py-10 text-[#3245a4]">Destinos internacionales</h3>
        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {destinations?.map((destination, index) => (
                <Link href={`/destinations/international/${destination._id}`} key={destination._id}>
                    <DestinationCard key={destination._id} {...restProps} {...destination} />
                </Link>
            ))}
        </div>
    </section>
}


const DestinationCard = ({name, img, flag }) => {
    return <div className="h-52 xl:h-64 w-full rounded-xl relative cursor-pointer">
        <Image src={img.sm} alt={`Foto de ${name}`} fill sizes='100%' className='rounded-xl ' />
        <div className="w-full rounded-xl absolute bg-black z-1 h-full opacity-20 text-center">
        </div>
        <div className="z-2 font-extrabold absolute w-full h-full p-8">
            <div className="flex items-center justify-center w-full h-full bg-yellow z-200">
                <h3 className="text-white text-center text-3xl">{name}</h3>
            </div>
        </div>
        {flag && (
            <div className="z-30 font-extrabold absolute w-10 h-10 m-2 lg:w-14 lg:h-14 lg:m-1 right-0">
                <Image src={flag}
                    alt={`Bandera de ${name}`}
                    sizes='100%'
                    fill
                />
            </div>
        )}

    </div>
}