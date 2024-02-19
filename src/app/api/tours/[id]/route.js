import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export async function GET(request, {params} ) {

    const id = params.id
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("tours")
            .findOne({ _id: new ObjectId(id) })
        
        return Response.json({ 
            body: data,
            status: 200
        })


    } catch (e) {
        console.error(e);
    }


}