import { getInternationalDestination } from '@/lib/agency'
import { notFound } from 'next/navigation'
import HeaderDestination from '@/components/header-destination'
export async function generateMetadata({
    params
}) {
    const destination = await getInternationalDestination(params.id);

    if (!destination) return notFound();

    return {
        title: destination?.seo?.title || destination.name,
        description: destination?.seo?.description || destination.description,
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