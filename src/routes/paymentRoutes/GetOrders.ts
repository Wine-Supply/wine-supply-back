import { Router } from "express";
import User from '../../models/User'
const router = Router()

//* /getorders/

router.get("/", async (req: any, res) => {
    const userId = req.user._id;
    try {
        let user : any = await User.findById(userId, 'order').populate('order');
        if (user?.order.length > 0 ) {
            return res.status(200).json(user?.order)
        }
        return res.status(300).send( 'No shopping orders present!' )

    } catch (err) {
        console.log(err)
    }

})

export default router;