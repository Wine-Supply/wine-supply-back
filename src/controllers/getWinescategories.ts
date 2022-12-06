import WineModel from "../models/Wine"
import getAllWines from "./GetAllWines"

const getWineCategories = async () => {

 const allWines:any = await WineModel.find({strain})



}

export default getWineCategories