import {buildFilePath,extractData} from '../../util'

export async function GET(request, {params} ) {

    const filePath = buildFilePath('data','tours.json')
    const id = params.id
    const data = extractData(filePath)
    const tour = data.find(tour => tour.id == id)
    console.log(tour)
    return Response.json({ 
        body: tour,
        status: 200,
    })


}