import { getNationalDestinations } from '@/lib/agency'
import { FlipCard } from '@/components/flip-card'
import Link from 'next/link'
export default async function NationalSection({ ...restProps }) {
    const destinations = await getNationalDestinations(['national-destinations'])

    return <section id="national-destination" className="py-8 pb-20 px-4 md:px-20 xl:px-[10%] flex z-10 flex-col w-full justify-center lg:min-h-screen">
        <h2 className="text-xl font-bold md:text-3xl lg:text-4xl text-center pt-14 text-secondary uppercase">Destinos Nacionales</h2>
        <h3 className="text-sm md:text-base text-center pb-14 py-4 text-primary">Embárcate en una aventura por los increíbles destinos nacionales que el Perú tiene para ofrecerte</h3>
        <div className="gap-4 mt-8 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {destinations?.map((destination, index) => (
                <FlipCard size={"md"} key={destination._id} {...destination} />
            ))}
        </div>
    </section>
}


