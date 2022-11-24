import { Router } from "express";
import getRecommendedWines from "../../controllers/RecommendedWines"


const router = Router()

//* /wines/recomendados


router.get("/", async(req, res) => {
  try {
    const wineRecommended = await getRecommendedWines()    
    res.send(wineRecommended)
  }catch (error : any) {
      res.status(400).send(error.message)
  }
})



export default router