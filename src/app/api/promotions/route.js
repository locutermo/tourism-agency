import { getPromotions } from "../service";
export async function GET(req, res) {

    const data = await getPromotions();
    return Response.json({ 
        body: data,
        status: 200
    })




}