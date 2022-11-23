import mongoose from "mongoose"
import Wine from "../models/Wine"
// import Review from "../models/Review";




const postWine = async (name: string, brand: string, description: string, type: string, body: string, cropYear: number, origin: string, zone: string, volume: number, alcoholVolume: number, rating: number, images: Array<string>, strain: string, stock: number, price: number) => {

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
                stock,
                price
            })
        const createdWine = await newWine.save()

        return createdWine
};



export default postWine;