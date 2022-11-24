import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";
import checkEmptyQuery from "../../controllers/CheckEmptyQuery"

const router = Router()

//* /wines/filters

router.get("/", async (req: Request, res: Response) => {

  const querys = req.query; 
 
  try {

   const noEmptyQuerys = checkEmptyQuery(querys);
 
   if (noEmptyQuerys) {
    const filteredWines = await Wine.find(querys).select("_id name brand type description cropYear strain volume images rating" );
    // console.log("filteredWines:", filteredWines);
    res.send(filteredWines);
   }

  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router