import mongoose from "mongoose"
import Wine from "../models/Wine"
// import Review from "../models/Review";




const postWine = async (name: string, brand: string, description: string, type: string, body: string, cropYear: number, origin: string, zone: string, volume: number, alcoholVolume: number, rating: number, images: Array<string>, strain: string, quantity: number, price: number) => {

    try {
        const newWine = new Wine(
            {
                name,
                brand,
                description,
                type,
                body,
                cropYear,
                origin,
                zone,
                volume,
                alcoholVolume,
                rating,
                images,
                strain,
                quantity,
                price,
                review_id: new mongoose.Types.ObjectId
            })
        const createdWine = await newWine.save()

        return createdWine

    } catch (error: any) {
        console.log(error);
    }
};



export default postWine;