import fs from 'fs'
import path from 'path'

export function buildFilePath(dirname,filename){
    const filePath = path.join(process.cwd(),dirname,filename)
    return filePath
}

export function extractData(filePath){
    const data = JSON.parse(fs.readFileSync(filePath))
    return data
}