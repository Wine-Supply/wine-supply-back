import { Router } from "express";
import getWineReviews from "../../controllers/ReviewsControllers/GetWineReviews";

const router = Router()

router.get("/:wine_id", async (req, res) => {
	const { wine_id } = req.params

	try {
		const review = await getWineReviews(wine_id) || null;
		
		if (!review) res.status(404).json({message:"Wine has not reviews"});

		res.status(200).json(review);
	}
	catch (error) {
		res.status(400).send(error);
	}

})

export default router