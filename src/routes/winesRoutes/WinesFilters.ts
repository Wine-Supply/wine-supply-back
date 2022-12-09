import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";

const router = Router()

//* /wines/filters

router.get("/", async (req: Request, res: Response) => {

  const querys = req.query; 
 
  try {

   if (Object.keys(querys).length === 0) {  return res.status(400).send("Please select a filter option") }
 
    const filteredWines = await Wine.find(querys).select("_id name brand type description cropYear strain volume images rating price" );
    // console.log("filteredWines:", filteredWines)
    if (filteredWines.length === 0) { return res.status(200).send("No hay vinos para mostrar")}
    return res.status(200).send(filteredWines);

  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router