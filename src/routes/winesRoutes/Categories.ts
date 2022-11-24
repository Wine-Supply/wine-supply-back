import { Router, Request, Response} from "express";
import Wine from "../../models/Wine";

const router = Router()

//* /wines/categories

router.get("/", async (req: Request, res: Response) => {
 
  try {
    
      const carmenereFiltered = await Wine.where({strain: "CARMENERE"}).limit(4).select("_id name brand type description cropYear strain volume images rating" ); 
      const cabernetFiltered = await Wine.where({strain: "CABERNET SAUVIGNON"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );
      const merlotFiltered = await Wine.where({strain: "MERLOT"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );
      const chardonnayFiltered = await Wine.where({strain: "CHARDONNAY"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );
      const syrahFiltered = await Wine.where({strain: "SYRAH"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );
      const pinotNoirFiltered = await Wine.where({strain: "PINOT NOIR"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );
      const nebbioloFiltered = await Wine.where({strain: "NEBBIOLO"}).limit(4).select("_id name brand type description cropYear strain volume images rating" );

      const categoriesArray = [carmenereFiltered,cabernetFiltered,merlotFiltered,chardonnayFiltered,syrahFiltered,pinotNoirFiltered,nebbioloFiltered].flat()

      return res.send(categoriesArray);
    

  } catch (error: any) {

    res.status(400).send(error.message)
  }
});



export default router