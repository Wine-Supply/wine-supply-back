const router = require("express").Router()
import updateUser from '../../controllers/UpdateUser'
import upLoadImg from "../../controllers/Cloudinary";
import destroyImg from "../../controllers/CloudinaryDestroy";
import fs from "fs-extra";

//* /user/update

router.put("/", async(req, res) => {
  const { imageID } = req.body;

  try {
    const user = req.user;
    //console.log("user", user);
    if(!user.isActive) throw new Error("Inactive user, do you want to recover it?");
    if (!user) { return res.status(404).send("User not found!") };

    if (Object.keys(req.body).length) {

      //!!Update Image
      if (req.files?.image && imageID) { //* Preguta si hay imagen
        const destroy = await destroyImg(imageID); //* Elimina imagen anterior
        result = await upLoadImg(req.files.images.tempFilePath, "Users"); //* Guarda imagen y devuelve rutas
        await fs.unlink(req.files.images.tempFilePath); //* Elimina imagen vieja
  
        req.body.image = [ //* Coloca rutas en la propieda imagen
          result.secure_url, //Direccion de la imagen
          result.public_id, //Id de la imagen
        ];
      }
      else {
        console.log("Image or old ImageID not provided");
      }
      //!!Update Image END

      
      const updatedUser = await updateUser(user, req.body)

      return res.status(200).send(updatedUser)
    } 
    return res.status(400).send({error:"No parameters sent for update"})
    
    } catch(error) {
        return res.status(400).send({error: error.message})
    }
});


export default router