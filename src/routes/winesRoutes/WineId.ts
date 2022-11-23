import { Router } from "express";
import getWineById from "../../controllers/GetWineById"

const router = Router()

router.get("/:id", async (req, res) => {

  let { id }  = req.params;

  try {
    const wine = await getWineById(id);
    res.send(wine);
  }
  catch (error: any) {
    throw new Error( error );
  }
});



export default router;