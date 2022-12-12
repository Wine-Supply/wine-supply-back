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
      const filteredWines = await Wine.find(filters).select("_id name brand type description cropYear strain volume images rating price" );
      if(filteredWines.length === 0) {
        res.status(404).json({message: "No matches found"})
      }
      else {
        res.send(filteredWines);
      }
    }
    return res.send("No data send by query");
  } 

  catch (error: any) {
    res.status(500).send(error.message)
  }

});



export default router