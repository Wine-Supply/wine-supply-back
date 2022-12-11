import { Router } from "express"
import CheckWines from "../../../controllers/CheckForExistingWine"
import postWine from "../../../controllers/PostWine"
import upLoadImg from "../../../controllers/Cloudinary"
import fs from "fs-extra"

const router = Router()

//* /admin/wine


router.post("/", async(req, res) => {
    //console.log(req.body)
    
  let { name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, strain, stock, price, images1 } =
  req.body;

  
  let existingWines = await CheckWines(name, brand, cropYear, volume)
  if ( existingWines.length ) return res.send("Vino ya esxiste en la DB!");
  

  // let result;
  // if(images){
  //   result = await upLoadImg(images.tempFilePath, "Wines")
  //   await fs.unlink(images.tempFilePath)
  // }
  // else {
  //   console.log("No image to upload")
  // }


  //TODO actualizar para poder updatear la imagen. Modelo abajo
  //?? ECHO

  let images = [ images1 //result.secure_url, //Direccion de la imagen
  //           result.public_id //Id de la imagen
  ]

  const validate =
    name && brand && description && type && body && cropYear && origin && zone && volume && alcoholVolume && rating && strain && stock && price && images
      ? true
      : false;


if (!validate) return res.status(400).send(`Missing data!`);

  try {
      
      const newWine = await postWine(name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, stock, price )
      console.log('llego')
      res.status(200).send(`${newWine.name} wine created successfully!`)

  } catch (error) {
      res.status(400).send(error.message);
  }
})



export default router