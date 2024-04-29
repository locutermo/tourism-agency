import { getNationalDestinations } from '@/lib/agency'
import { FlipCard } from '@/components/flip-card'
import Link from 'next/link'
export default async function NationalSection({ ...restProps }) {
    const destinations = await getNationalDestinations(['national-destinations'])

    return <section className="py-8 pb-20 px-4 md:px-20 xl:px-[10%] flex z-50 flex-col w-full">
        <h3 className="text-xl font-bold md:text-3xl text-center pt-14 text-[#4563ff] uppercase">Destinos Nacionales</h3>
        <p className="text-sm md:text-base text-center pb-14 py-4">Embárcate en una aventura por los increíbles destinos nacionales que el Perú tiene para ofrecerte</p>
        <div className="gap-4 mt-8 lg:gap-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
            {destinations?.map((destination, index) => (
                <FlipCard size={"md"} key={destination._id} {...destination} />
            ))}
        </div>
    </section>
}

