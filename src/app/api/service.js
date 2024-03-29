import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export const getActivityCategories = async () => {
    try{

    
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
 
        const data = await db
            .collection("categories")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}



export const getAgencyTours = async () => {
    try{

    
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
 
        const data = await db
            .collection("tours")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getTourDetail = async (id) => {
    try{
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("tours")
            .findOne({ _id: new ObjectId(id) })
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}