import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";

const router = Router()

//* /wines/search

router.get("/", async (req: Request, res: Response) => {

  const {name} = req.query; 
 
  try {
    if (name) {
      const filteredWines = await Wine.where({name: {$regex:'.*' + name + '.*', $options: 'i'}}).select("_id name brand type description cropYear volume images rating" ); 
      if(filteredWines.length === 0) {throw new Error("No matches found")}
      return res.send(filteredWines);
    }
    return res.send("No se enviaron datos por query");
  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router