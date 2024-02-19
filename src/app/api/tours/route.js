import clientPromise from "../../lib/mongodb";

export async function GET(req, res) {


    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
 
        const data = await db
            .collection("tours")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
 
        return Response.json({ 
            body: data,
            status: 200
        })


    } catch (e) {
        console.error(e);
    }

  


}