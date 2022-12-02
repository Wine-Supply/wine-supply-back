import {v2 as cloudinary} from "cloudinary"
import { config } from "dotenv";
config();

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key:  process.env.CLOUD_API_KEY, 
    api_secret:  process.env.CLOUD_SECRET,
    secure: true
  });


const destroyImg = async(id: string) => {
    try {
        if(id !== "v1669934892"){
            const destroy = await cloudinary.uploader.destroy(id)
            return destroy;
        }
        else{
            return "This image cannot be destroy"
        }
    }
    catch (err){
        console.log("Img not found");
        console.log(err);
    }
}

export default destroyImg;