import {getTourDetail} from '../../service'
export async function GET(request, {params} ){

    
    const id = params.id
    const data = await getTourDetail(id);
    return Response.json({ 
        body: data,
        status: 200
    })




}