import { getNationalDestinations } from '@/lib/agency'
import { FlipCard } from '@/components/flip-card'
import Section from '@/components/section'

export default async function NationalSection({ ...restProps }) {
    const destinations = await getNationalDestinations(['national-destinations'])

    return <Section id="national-destination"
        title="Destinos nacionales"
        description="Embárcate en una aventura por los maravillosos destinos nacionales que Perú tiene para ofrecer. ¡Descubre lo mejor de nuestra tierra y vive experiencias inolvidables!">
        <div className="gap-4 mt-8 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {destinations?.map((destination, index) => (
                <FlipCard size={"md"} key={destination._id} {...destination} />
            ))}
        </div>
    </Section>
}


