import {buildFilePath,extractData} from '../util'

export async function GET(req, res) {

    const filePath = buildFilePath('data','info.json')
    const data = extractData(filePath)

    return Response.json({ 
        body: data,
        status: 200
    })


}