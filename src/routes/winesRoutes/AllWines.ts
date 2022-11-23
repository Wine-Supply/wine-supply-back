import { Router } from "express";
import getAllWines from '../../controllers/GetAllWines'

const router = Router()

//* /wines


router.get("/", (req, res) => {
  try {
      console.log("soy ruta /wines")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})



export default router