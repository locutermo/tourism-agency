import fs from 'fs'
import path from 'path'

export async function GET(req, res) {

    const filePath = path.join(process.cwd(),'data','tours.json')
    const data = JSON.parse(fs.readFileSync(filePath))

    return Response.json({
        body: data,
    })


}