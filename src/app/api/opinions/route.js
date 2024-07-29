import { getOpinions } from "../service";
export async function GET(req, res) {

    const data = await getOpinions();
    return Response.json({ 
        body: data,
        status: 200
    })




}