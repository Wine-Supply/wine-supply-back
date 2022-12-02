import { Router } from "express"
import User from "../../models/User"
const router = Router()

//* /getuser/

router.get("/", async(req: any, res, next) => {
    
    try {
      
      if (!req.user) {
        return res.status(400).send("User not found!")
      }
      if(!req.user.isActive) throw new Error("Inactive user, do you want to recover it?");
      
      return res.status(200).send(req.user)
      
    } catch(error) {
        return res.send("error")
    }
})

//


export default router