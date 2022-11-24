import {v2 as cloudinary} from "cloudinary"
import { config } from "dotenv";
config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_API_KEY, 
    api_secret:  process.env.CLOUD_SECRET,
    secure: true
  });


const upLoadImg = async(img: any) => {
    try {
        return await cloudinary.uploader.upload(img, {folder: "Wines"});
    }
    catch (err){
        console.log("Upload image fail");
        console.log(err);
    }
}

export default upLoadImg;