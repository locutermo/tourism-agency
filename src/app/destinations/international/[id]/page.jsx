import { getInternationalDestination } from '@/lib/agency'
import { notFound } from 'next/navigation'
import HeaderDestination from '@/components/header-destination'
export async function generateMetadata({params}) {
    const destination = await getInternationalDestination(params.id);
    if (!destination) return notFound();

    const places = destination.places.reduce( (acc, current) => acc + `ofertas para ${current.name}, `, "")
    return {
        title: destination?.seo?.title || destination.name,
        description: destination?.seo?.description || destination.description,
        keywords: `vuelos a ${destination.name}, ofertas imperdibles, paquetes turísticos en ${destination.name},${places} ofertas para ${destination.name}, agencia de viajes en lima, agencia de viajes`,
        openGraph: {
            title:destination?.seo?.title || destination.name,
            description:destination?.seo?.description || destination.description,
            images: [destination.img?.sm],
          }
    };
}


async function Page({ params }) {

    const destination = await getInternationalDestination(params.id)

    if (!destination) {
        return notFound()
    }

    return (<HeaderDestination destination={destination}/>)
}

export default Page