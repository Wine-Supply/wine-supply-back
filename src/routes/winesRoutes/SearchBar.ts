import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";

const router = Router()

//* /wines/search

router.get("/", async (req: Request, res: Response) => {

  const {input} = req.query; 
  const regexContainInsensitive= {$regex:'.*' + input + '.*', $options: 'i'}
  const filters = {
    $or:[
      {name: regexContainInsensitive},
      {strain: regexContainInsensitive},
      {brand: regexContainInsensitive},
      {type: regexContainInsensitive},
    ]
  }


  try {
    if (input) {
      const filteredWines = await Wine.find(filters).select("_id name brand type description cropYear strain volume images rating" ); 
      if(filteredWines.length === 0) {throw new Error("No matches found")}
      return res.send(filteredWines);
    }
    return res.send("No se enviaron datos por query");
  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router