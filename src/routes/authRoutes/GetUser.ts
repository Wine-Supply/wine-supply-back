import { Router } from "express"
import User from "../../models/User"
const router = Router()

//* /getuser/

router.get("/", async(req: any, res, next) => {
    
    const user = req.user
    try {
        return res.status(200).json({user})
    } catch(error) {
        return res.send("error")
    }
    if (!user) {
        return res.status(400).send("User not found!")
    }
})

//


export default router