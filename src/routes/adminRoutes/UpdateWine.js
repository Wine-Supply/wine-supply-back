import { Router } from "express";
// import getWineById from "../../controllers/GetWineById";
import Wine from "../../models/Wine";
import destroyImg from "../../controllers/CloudinaryDestroy";
import checkEmptyQuery from "../../controllers/CheckEmptyQuery";
import upLoadImg from "../../controllers/Cloudinary";
import fs from "fs-extra";

const router = Router();

router.put("/", async (req, res) => {
  const querys = req.body;
  const { _id, imageID } = req.body;

  //*Obtener vino
  //console.log(querys)

  try {
    const wine = await Wine.findById(_id);
    let result;

    if (!wine) {
      return res.status(404).send("Wine not found!");
    }
    if (Object.keys(req.body).length) {
      for (const property in querys) {
        wine[property] = req.body[property];
      }
    }

    if (req.files?.images && imageID) {
      //* Destruir imagen vieja
      const destroy = await destroyImg(imageID);
      //console.log("destroy", destroy);
      //* Subir nueva imagen
      result = await upLoadImg(req.files.images.tempFilePath, "Wines");
      await fs.unlink(req.files.images.tempFilePath);

      wine.images = [
        result.secure_url, //Direccion de la imagen
        result.public_id, //Id de la imagen
      ];
    }
    else {
      console.log("Image or old ImageID not provided");
    }

    const noEmptyQuerys = checkEmptyQuery(querys);

    if (noEmptyQuerys) {
      const updateWine = await Wine.findByIdAndUpdate(_id, wine);
     // console.log(updateWine);
      res.send(updateWine);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send("Update no possible", error);
  }
});

export default router;
