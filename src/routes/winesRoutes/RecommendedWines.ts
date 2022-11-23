import { Router } from "express";
import getRecommendedWines from "../../controllers/RecommendedWines"


const router = Router()

//* /wines/recomendados


router.get("/", (req, res) => {
  try {
      console.log("soy ruta /wines/recomendados")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})



export default router