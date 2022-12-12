import { Router } from "express";
import  getAllWines  from '../../controllers/GetAllWines';
import filterAllWines from "../../controllers/FilterAllWines"

const router = Router()

//* /wines


router.get("/", async (req, res) => {

  try {
    const wines = await getAllWines();
    const fWines= filterAllWines(wines);

    if(fWines){
      res.send(fWines);
    }
    else{
      res.status(400).json({message:"Not wines find"});
    }
  } 
  catch (error: any) {
    res.status(500).json( {message: "Server error :c \n",error} );
  }

});



export default router;