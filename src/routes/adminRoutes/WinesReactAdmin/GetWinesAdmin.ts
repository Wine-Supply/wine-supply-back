import { Router } from "express";
import getAllWinesAdmin from "../../../controllers/ReactAdminControllers/GeatAllWinesAdmin";
import getWineById from "../../../controllers/GetWineById";

const router = Router()

//* /admin/wines


router.get("/", async (req, res) => {
  try {
    const wines = await getAllWinesAdmin();
    let total = wines.length
    res.header({'content-Range':  `wines 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
    return res.status(200).send(wines);
  } 
  catch (error: any) {
    return res.status(404).send('Cant get wines!')
  }

});



export default router;