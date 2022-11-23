import { Router } from "express";
import postWine from "../../controllers/PostWine"

const router = Router()

//* /admin/post

router.get("/", (req, res) => {
  try {
      console.log("soy la ruta /admin/post")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})



export default router