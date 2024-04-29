import { getNationalDestinations, getInternationalDestinations } from '@/lib/agency';
import { MetadataRoute } from 'next';

type Route = {
    url: string;
    lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const routesMap = ['esnna'].map((route) => ({
        url: `${baseUrl}/${route}`,
        lastModified: new Date().toISOString()
    }));

    const internationalDestinations = getInternationalDestinations().then((destinations) =>
        destinations.map((destination:any) => ({
            url: `${baseUrl}/destinations/international/${destination._id}`,
            lastModified: new Date().toISOString()
        }))
    );

    const nationalDestinations = getInternationalDestinations().then((destinations) =>
        destinations.map((destination:any) => ({
            url: `${baseUrl}/destinations/national/${destination._id}`,
            lastModified: new Date().toISOString()
        }))
    );
 
    let fetchedRoutes: Route[] = [];

    try {
        fetchedRoutes = (await Promise.all([internationalDestinations, nationalDestinations])).flat();
    } catch (error) {
        throw JSON.stringify(error, null, 2);
    }

    return [...routesMap, ...fetchedRoutes];
}