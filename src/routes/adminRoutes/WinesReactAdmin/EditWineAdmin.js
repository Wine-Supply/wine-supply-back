import { Router } from "express";
// import getWineById from "../../controllers/GetWineById";
import Wine from "../../../models/Wine";
import destroyImg from "../../../controllers/CloudinaryDestroy";
import checkEmptyQuery from "../../../controllers/CheckEmptyQuery";
import upLoadImg from "../../../controllers/Cloudinary";
import fs from "fs-extra";

const router = Router();

router.put("/:id", async (req, res) => {
	const { id } = req.body;
	// let {  imageID } = req.body;
	console.log(req.body)
	try {
		let wine = await Wine.findById(id);
		let result;

		if (!wine) {
			return res.status(404).send("Wine not found!");
		}
			for (const property in req.body) {
				if (property === "isActive") {
					wine.isActive = req.body[property]
				}
				if (wine[property] && property !== "_id" && property !== '$__' && property !== '$isNew' && property !== 'isActive') {
					wine[property] = req.body[property];
				}
			}

		// if (req.files?.images && imageID) {
		// 	//* Destruir imagen vieja
		// 	const destroy = await destroyImg(imageID);
		// 	//console.log("destroy", destroy);
		// 	//* Subir nueva imagen
		// 	result = await upLoadImg(req.files.images.tempFilePath, "Wines");
		// 	await fs.unlink(req.files.images.tempFilePath);

		// 	wine.images = [
		// 		result.secure_url, //Direccion de la imagen
		// 		result.public_id //Id de la imagen
		// 	];
		// } else {
		// 	console.log("Image or old ImageID not provided");
		// }

		// const noEmptyQuerys = checkEmptyQuery(querys);

		if (wine) {
			let updateWine = await Wine.findByIdAndUpdate(id, wine);
			updateWine = {...updateWine, id: updateWine._id}
			res.send(updateWine);
		}
	} catch (error) {
		console.log(error);
		res.status(400).send("Update no possible", error);
	}
});

export default router;