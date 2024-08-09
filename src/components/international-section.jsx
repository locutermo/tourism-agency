import { getInternationalDestinations } from '@/lib/agency'
import { DestinationCard } from '@/components/destination-card'
import Link from 'next/link'
import Section from '@/components/section'

export default async function InternationalSection({ ...restProps }) {
    const destinations = await getInternationalDestinations(['international-destinations'])

    return <Section id="international-destination"
        title="Destinos Internacionales"
        description="Explora el mundo con nuestra agencia de viajes y descubre destinos extraordinarios con nuestros paquetes personalizados">

        <div className="gap-4 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {destinations?.map((destination) => (
                <Link href={`/destinations/international/${destination._id}`} key={destination._id}>
                    <DestinationCard key={destination._id} {...restProps} {...destination} />
                </Link>
            ))}
        </div>
    </Section>
}


