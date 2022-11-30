import { Router } from "express";
import getWineReviews from "../../controllers/ReviewsControllers/GetWineReviews";

const router = Router()

router.get("/", async (req, res) => {
    const { wine_id } = req.body

    console.log(wine_id);
    
    try{
        const review = await getWineReviews(wine_id);
        
        
        res.send(review)
    }
    catch (error){
        res.status(400).send(error)
    }
})

export default router