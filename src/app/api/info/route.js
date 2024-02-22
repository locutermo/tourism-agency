import {getActivityCategories} from '../service'
export async function GET(req, res) {

    const data = await getActivityCategories();

    return Response.json({ 
        body: data,
        status: 200
    })




}