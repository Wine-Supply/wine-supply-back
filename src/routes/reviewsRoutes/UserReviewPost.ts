import { Router } from "express";
import checkUserReviews from "../../controllers/ReviewsControllers/CheckUserReviews";
import postReview from "../../controllers/ReviewsControllers/PostReview";

const router = Router()


router.get("/", async (req, res) => {
    const { user_id, wine_id, comment, rating } = req.body

    const review = await checkUserReviews(user_id, wine_id);

    console.log(review.length)
    if (review.length > 0) {
        return res.status(400).send("You already have a review for this wine")
    }

    const validate = user_id && wine_id && comment && rating ? true : false;

    if (!validate) return res.status(400).send(`Missing data!`);

    try {
        const newReview = await postReview(user_id, wine_id, comment, rating)
        res.status(200).send(`Review posted successfully!`)

    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

export default router;