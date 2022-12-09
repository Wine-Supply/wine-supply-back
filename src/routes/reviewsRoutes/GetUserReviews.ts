import { Router } from "express";
import getUserReviews from "../../controllers/ReviewsControllers/GetUserReviews";

const router = Router()

router.get("/:user_id", async (req, res) => {
	const { user_id } = req.params

	//console.log(user_id);

	try {
		const review = await getUserReviews(user_id) || null;

		if (!review) res.status(404).json({message:"User has not reviews"});

		res.status(200).json(review);
	}
	catch (error:any) {
		res.status(400).json({message: error.message});
	}
})

export default router