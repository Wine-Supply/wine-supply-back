import { Router, Request, Response} from "express";
import Wine from "../../models/Wine"

const router = Router()

//* /wines/filters

// req.query = name // brand // type // body // cropYear // origin // zone // volume // strain


router.get("/", async (req: Request, res: Response) => {
  try {
    const querys = req.query; 
    if(!querys || querys === undefined) {throw new Error("Please select a filter") };
    
    const filteredWines = await Wine.find(querys);
    
    console.log("filteredWines:", filteredWines);

    res.send(filteredWines);
    
  } catch (error: any) {
    console.log("error en la ruta /wines/filters")
    res.status(400).send(error.message)
  }
});



export default router