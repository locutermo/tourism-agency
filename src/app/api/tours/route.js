import { getAgencyTours } from "../service";
export async function GET(req, res) {

    const data = await getAgencyTours();
    return Response.json({ 
        body: data,
        status: 200
    })




}