import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export const getActivityCategories = async () => {
    try {


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
    try {


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
    try {
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

export const getInternationalDestinations = async () => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("international-destination")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getInternationalDestination = async (id) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("international-destination")
            .findOne({ _id: new ObjectId(id) })
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getNationalDestinations = async () => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("national-destination")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}


export const getNationalDestination = async (id) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("national-destination")
            .findOne({ _id: new ObjectId(id) })
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getOpinions = async () => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("opinions")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const getPromotions = async () => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const data = await db
            .collection("promotions")
            .find({})
            .sort({ metacritic: -1 })
            .toArray();
        return data;
    } catch (e) {
        console.error(e);
        return null
    }
}

export const createClaim = async (newClaim) => {
    try {
        const client = await clientPromise;
        const db = client.db(process.env.MONGODB_DATABASE);
        const result = await db.collection("claims").insertOne(newClaim);
        return result;
    } catch (e) {
        console.error(e);
        return null;
    }
}