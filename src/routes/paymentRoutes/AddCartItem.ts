import { Router } from "express";
import Wine from '../../models/Wine'
import User from '../../models/User'
const router = Router()

//* /addcartitem/

router.post("/", async (req: any, res) => {
    const userId = req.user._id;
    const wines = req.body
    try {
        req.user.shopping_cart = wines
        req.user?.save()
        return res.status(200).send("wines added!")
        // let user = await User.findOneAndUpdate(
        //     { _id: userId }, 
        //     { $push: { shopping_cart: wines } }
        // );
    } catch (err) {
        console.log(err)
        return res.status(403).send("Can't add wines to cart!")
    }

})

export default router;