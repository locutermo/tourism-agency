import { getInternationalDestinations } from "../../service";
export async function GET(req, res) {


    const data = await getInternationalDestinations();
    return Response.json({ 
        body: data,
        status: 200
    })




}