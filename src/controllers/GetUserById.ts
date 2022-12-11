import UserModel from "../models/User";

const getUserById = async(id: string)=> {

  try{
    const user = await UserModel.findById(id);
    return user;
  }
  catch (error: any) {
    throw new Error( error );
  }

};



export default getUserById;