import {getAgencyInformation} from '../service'
export async function GET(req, res) {

    const data = await getAgencyInformation();

    return Response.json({ 
        body: data,
        status: 200
    })




}