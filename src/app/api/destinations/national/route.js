import { getNationalDestinations } from "../../service";
export async function GET(req, res) {


    const data = await getNationalDestinations();
    return Response.json({ 
        body: data,
        status: 200
    })




}