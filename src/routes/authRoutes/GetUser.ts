import { Router } from "express"
import User from "../../models/User"
const router = Router()

//* /getuser/

router.get("/", async(req: any, res, next) => {
    
    const userId = req.user._id;
    let user;
    try {
        user = await User.findById(userId, "-hashedPass")
    } catch(error) {
        return res.send("error")
    }
    if (!user) {
        return res.status(400).send("User not found!")
    }
    return res.status(200).json({id: user._id, name: user.name, email: user.email})
})

//


export default router