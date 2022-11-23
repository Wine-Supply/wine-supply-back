import { Router } from "express";
import filterWines from '../../controllers/FilterWines'

const router = Router()

//* /wines/filters

router.get("/", (req, res) => {
  try {
      console.log("soy ruta '/wines/filters'")
      res.send("checking")
  } catch (error: any) {
      throw new Error( error );
  }
})



export default router