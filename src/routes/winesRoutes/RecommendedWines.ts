import { Router } from "express";
import getRecommendedWines from "../../controllers/RecommendedWines"


const router = Router()

//* /wines/recomendados


router.get("/", async(req, res) => {
  try {
    const wineRecommended = await getRecommendedWines(); 
    if(wineRecommended){
      res.send(wineRecommended);
    }
    else{
      res.status(400).json({message:"Not wines find"});
    }
  }catch (error : any) {
      res.status(500).send(error.message)
  }
})



export default router