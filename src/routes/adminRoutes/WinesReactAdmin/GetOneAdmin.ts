import { Router } from "express";
import getWineById from "../../../controllers/GetWineById"

const router = Router()

router.get("/:id", async (req, res) => {

  let { id }  = req.params;
  console.log(id)

  try {
    let wine = await getWineById(id);
    let newwine = {...wine, id: wine?._id}
    res.status(200).send(newwine);
  }
  catch (error: any) {
    throw new Error( error );
  }
});



export default router;