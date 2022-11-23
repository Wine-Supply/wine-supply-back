import { Router } from "express";
import  getAllWines  from '../../controllers/GetAllWines';
import filterAllWines from "../../controllers/FilterAllWines"

const router = Router()

//* /wines


router.get("/", async (req, res) => {

  try {
    const wines = await getAllWines();
    const fWines= filterAllWines(wines);
    res.send(fWines);
  } 
  catch (error: any) {
    throw new Error( error );
  }

});



export default router;