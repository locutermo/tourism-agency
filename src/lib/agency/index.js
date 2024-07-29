
const domain = process.env.NEXT_PUBLIC_SERVER_URL

export async function getTours(tags,revalidate){
    const res = await fetch(`${domain}/api/tours`,
        { next: { revalidate: revalidate || 3600,tags:tags||[] } });
    const data = await res.json();
    return data?.body
}

export async function getCategories(tags,revalidate){
    const res = await fetch(`${domain}/api/info`,
        { next: { revalidate: revalidate || 3600,tags:tags||[] } });
    const data = await res.json();
    return data?.body
}

export async function getTour(id){
    const res = await fetch(`${domain}/api/tours/${id}`,
    { next: { revalidate: 100,tags:[] } });
    const data = await res.json();
    return data?.body
}

export async function getInternationalDestinations(tags,revalidate){
    const res = await fetch(`${domain}/api/destinations/international`,
    { next: { revalidate: revalidate || 3600,tags:tags||[] } });
    const data = await res.json();
    return data?.body
}

export async function getInternationalDestination(id){
    const res = await fetch(`${domain}/api/destinations/international/${id}`,
    { next: { revalidate: 3600,tags:[] } });
    const data = await res.json();
    return data?.body
}

export async function getNationalDestinations(tags,revalidate){
    const res = await fetch(`${domain}/api/destinations/national`,
    { next: { revalidate: revalidate || 3600,tags:tags||[] } });
    const data = await res.json();
    return data?.body
}

export async function getNationalDestination(id){
    const res = await fetch(`${domain}/api/destinations/national/${id}`,
    { next: { revalidate: 3600,tags:[] } });
    const data = await res.json();
    return data?.body
}

export async function getOpinions(tags,revalidate){
    const res = await fetch(`${domain}/api/opinions`,
    { next: { revalidate: revalidate || 3600,tags:tags||[] } });
    const data = await res.json();
    return data?.body
}