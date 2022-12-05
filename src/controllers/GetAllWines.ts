import WineModel from "../models/Wine";

const getAllWines = async()=> {

  try {
    const wine = await WineModel.find({isActive: true});
    return wine;
  }
  catch (error: any) {
    throw new Error( error );
  }

};
export default getAllWines;