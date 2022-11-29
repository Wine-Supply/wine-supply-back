import { Router } from "express"
import CheckWines from "../../controllers/CheckForExistingWine"
import postWine from "../../controllers/PostWine"
import upLoadImg from "../../controllers/Cloudinary"
import fs from "fs-extra"

const router = Router()

//* /admin/post


router.post("/", async(req, res) => {

  
  let { name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, stock, price } =
  req.body;

  
  let existingWines = await CheckWines(name, brand, cropYear, volume)
  if ( existingWines.length ) return res.send("Vino ya esxiste en la DB!");
  

  let result;
  if(req.files?.images){
    result = await upLoadImg(req.files.images.tempFilePath)
    await fs.unlink(req.files.images.tempFilePath)
  }
  else {
    res.status(400).send("No image to upload")
  }


  //TODO actualizar para poder updatear la imagen. Modelo abajo
  //?? ECHO

  images = [result.secure_url, //Direccion de la imagen
            result.public_id //Id de la imagen
  ]

  const validate =
    name && brand && description && type && body && cropYear && origin && zone && volume && alcoholVolume && rating && images && strain && stock && price
      ? true
      : false;


if (!validate) return res.status(400).send(`Missing data!`);

  try {
      const newWine = await postWine(name, brand, description, type, body, cropYear, origin, zone, volume, alcoholVolume, rating, images, strain, stock, price)

      res.status(200).send(`${newWine.name} wine created successfully!`)

  } catch (error) {
      res.status(400).send(error.message);
  }
})



export default router