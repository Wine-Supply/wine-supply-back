const router = require("express").Router();
import updateUser from "../../controllers/UpdateUser";
import upLoadImg from "../../controllers/Cloudinary";
import destroyImg from "../../controllers/CloudinaryDestroy";
import fs from "fs-extra";

//* /user/update

router.put("/", async (req, res) => {
	const { avatarID } = req.body;

	try {
		const user = req.user;
		//console.log("user", user);
		if (!user) {
			return res.status(404).send("User not found!");
		}
		if (!user.isActive) {
				const updatedUser = await updateUser(user, req.body);

				return res.status(200).send(updatedUser);
			} else
				return res
					.status(303)
					.send("Inactive user, do you want to recover it?");
				}
				catch (error) {
				   return res.status(400).send({ error: error.message });
			   }


		// if (Object.keys(req.body).length) {
		// 	//!!Update Avatar
		// 	if (req.files?.image && avatarID) {
		// 		//* Preguta si hay imagen y ID para el procedimiento
		// 		const destroy = await destroyImg(avatarID); //* Elimina imagen anterior
		// 		result = await upLoadImg(req.files.images.tempFilePath, "Users"); //* Guarda imagen folder "Users" y devuelve info
		// 		await fs.unlink(req.files.images.tempFilePath); //* Elimina imagen del servidor de Node.js

		// 		req.body.avatar = [
		// 			//* Coloca rutas en la propieda imagen
		// 			result.secure_url, //Direccion de la imagen
		// 			result.public_id //Id de la imagen
		// 		];
		// 	} else {
		// 		console.log("Image or old-avatarID not provided");
		// 	}
		// 	//!!Update Image END

		// 	const updatedUser = await updateUser(user, req.body);

		// 	return res.status(200).send(updatedUser);
		// }
		// return res.status(400).send({ error: "No parameters sent for update" });
});

export default router;
