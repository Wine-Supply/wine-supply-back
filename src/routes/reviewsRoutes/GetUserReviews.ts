import { Router } from "express";
import getUserReviews from "../../controllers/GetUserReviews";

const router = Router()

router.get("/", async (req, res) => {
    const { user_id } = req.body

    //console.log(user_id);

    try {
        const review = await getUserReviews(user_id);
        if (!review) res.status(404).send("User has not reviews")

        res.send(review)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

export default router