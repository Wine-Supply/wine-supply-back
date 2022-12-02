import {v2 as cloudinary} from "cloudinary"
import { config } from "dotenv";
config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_API_KEY, 
    api_secret:  process.env.CLOUD_SECRET,
    secure: true
  });


const upLoadImg = async(img: any, destiny: string) => {
    //console.log(img);
    //console.log(destiny);
    
    
    try {
        return await cloudinary.uploader.upload(img, {folder: destiny});
    }
    catch (err){
        console.log("Upload image fail");
        console.log(err);
    }
}

export default upLoadImg;