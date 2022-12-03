import { Router } from "express"
import User from '../../models/User'
const router = Router()


//* /getmembership

router.get("/", async(req: any, res, next) => {
    
    try {

      const user = req.user

      if ( !user ) { return res.status(400).send("User not found!") }
      if (!user.isActive ) { return res.status(303).send("Inactive user, do you want to recover it?") }
      
      const userMembership:any = await User.find({_id: user._id, isActive: true }).select("membership_id").populate('Membership').select("-user_id");

      if ( userMembership.isActive ) {
        return res.status(200).send(userMembership) 
      } else {
        res.status(200).send("Membresia inactiva")
      }
    } catch(error:any) {
      return res.status(400).send({error: error.message})
    }
})



export default router