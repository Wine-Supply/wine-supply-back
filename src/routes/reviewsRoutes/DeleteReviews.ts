import { Router } from "express";
import deleteReview from "../../controllers/ReviewsControllers/DeleteReview";
const router = Router()

router.get("/", async (req, res) => {
    const { user_id, wine_id } = req.body

    try {
        const review = await deleteReview(user_id, wine_id)
        if(!review) return res.status(404).send("No review to delete");
        res.status(200).send(`Review deleted successfully!`)

    } catch (error: any) {
        res.status(400).send(error.message);
    }

    
})

export default router;