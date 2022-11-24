import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";

const router = Router()

//* /wines/categories

router.get("/", async (req: Request, res: Response) => {
 
  try {
    
      const redFilteredWines = await Wine.where("type").equals("red").limit(4).select("_id name brand type description cropYear volume images rating" ); 
      const whiteFilteredWines = await Wine.where("type").equals("white").limit(4).select("_id name brand type description cropYear volume images rating" ); 
      const categoriesArray = redFilteredWines.concat(whiteFilteredWines)

      return res.send(categoriesArray);
    

  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router