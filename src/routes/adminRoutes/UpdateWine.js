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

	try{
		let result;
		if (req.files?.images) {
			//* Destruir imagen
			const destroy = await destroyImg(imageID);
			console.log(destroy);
			//* Subir nueva imagen
			result = await upLoadImg(req.files.images.tempFilePath);
			await fs.unlink(req.files.images.tempFilePath);
	
			querys.images = [
				result.secure_url, //Direccion de la imagen
				result.public_id, //Id de la imagen
			];
		}
	
		const noEmptyQuerys = checkEmptyQuery(querys);
	
		if (noEmptyQuerys) {
			const updateWine = await Wine.findByIdAndUpdate(_id, querys)
			console.log(updateWine)
			res.send(updateWine);
		}
	}
	catch (error){
		console.log(error);
		res.status(400).send("Update no possible", error)
	}

});

export default router;
