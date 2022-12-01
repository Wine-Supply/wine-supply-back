import { Router } from "express";
import putReview from "../../controllers/ReviewsControllers/PutReview";

const router = Router()


router.get("/", async (req, res) => {
    const { review_id, comment, rating } = req.body
    
    if(typeof comment !== "string" || typeof rating !== "number") return res.status(400).send("Invalid data")
    if(rating < 0 || rating > 5) return res.status(400).send("Number")

    const validate = review_id && comment && rating ? true : false;

    if (!validate) return res.status(400).send(`Missing data!`);

    try {
        const newReview = await putReview( review_id, comment, rating)
        res.status(200).send(`Review edited successfully!`)

    } catch (error: any) {
        res.status(400).send(error.message);
    }
})

export default router;