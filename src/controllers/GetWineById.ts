import WineModel from "../models/Wine";

const getWineById = async(id: string)=> {

  try{
    const wine = await WineModel.findById(id);
    return wine;
  }
  catch (error: any) {
    throw new Error( error );
  }

};



export default getWineById;