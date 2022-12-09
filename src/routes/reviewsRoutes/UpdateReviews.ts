import { Router } from "express";
import putReview from "../../controllers/ReviewsControllers/PutReview";
import updateRatings from "../../controllers/ReviewsControllers/Updaterating";

const router = Router()


router.put("/", async (req, res) => {
	const { review_id, wine_id, comment, rating } = req.body

	if (typeof comment !== "string" || typeof rating !== "number") return res.status(400).send("Invalid data")
	if (rating < 0 || rating > 5) return res.status(400).send("Number")

	const validate = review_id && comment && rating ? true : false;

	if (!validate) return res.status(400).send(`Missing data!`);

	try {
		const newReview = await putReview(review_id, comment, rating) || null;

		const update = await updateRatings(wine_id) || null;

		if(newReview! || update) res.status(400).json({message: `Somenthing went wrong!`});

		res.status(200).json({message: `Review edited successfully!`});

	} catch (error: any) {
		res.status(400).json(error.message);
	}
})

export default router;