import { getInternationalDestinations } from '@/lib/agency'
import {DestinationCard} from '@/components/destination-card'
import Link from 'next/link'
export default async function InternationalSection({ ...restProps }) {
    const destinations = await getInternationalDestinations(['international-destinations'])

    return <section id='international-destination' className="py-8 px-4 md:px-20 xl:px-[10%] flex z-10 flex-col w-full justify-center lg:min-h-screen bg-slate-100">
        <h3 className="text-xl font-bold md:text-3xl text-center pt-14 text-[#4563ff] uppercase">Destinos internacionales</h3>
        <h2 className="text-center pb-14 py-4">Explora el mundo con nuestra agencia de viajes y descubre destinos extraordinarios con nuestros paquetes personalizados</h2>
        <div className="gap-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {destinations?.map((destination, index) => (
                <Link href={`/destinations/international/${destination._id}`} key={destination._id}>
                    <DestinationCard key={destination._id} {...restProps} {...destination} />
                </Link>
            ))}
        </div>
    </section>
}


