import { Router } from "express";
import getWineById from "../../controllers/GetWineById"

const router = Router()

//* /wine/:id

router.get("/", (req, res) => {
  try {
      console.log("soy la ruta /wine/:id")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})



export default router