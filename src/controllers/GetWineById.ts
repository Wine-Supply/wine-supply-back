import WineModel from "../models/Wine";

const getWineById = async(id: string)=> {

  try{
    const wine = await WineModel.findById(id);
   if(!wine) return null;
   else return wine 
  }
  catch (error: any) {
    throw new Error( error );
  }

};



export default getWineById;