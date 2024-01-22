import fs from 'fs'
import path from 'path'

export async function POST(req, res) {

        const email = req.body.email
        const feedbackText = req.body.feedbackText

        const newFeedback = {
            id: new Date().toISOString(),
            email,
            text: feedbackText,
        }

        const filePath = path.join(process.cwd(),'data','feedback.json')
        const data = JSON.parse(fs.readFileSync(filePath))
        data.push(newFeedback)
        fs.writeFileSync(filePath, JSON.stringify(data))
        res.status(201).json({message:"Success!",feedback: newFeedback})
}
