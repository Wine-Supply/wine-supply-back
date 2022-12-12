import { Router } from "express";
import getWineById from "../../controllers/GetWineById"

const router = Router()

router.get("/:id", async (req, res) => {

  let { id }  = req.params;

  try {
    const wine = await getWineById(id);
    console.log(wine);
      res.send(wine);
  }
  catch (error: any) {
    res.status(404).json({message: "Not wine find with the id:" + id})
  }
});



export default router;