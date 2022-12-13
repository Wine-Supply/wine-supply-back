import { Router } from "express";
import Wine from '../../models/Wine'
import User from '../../models/User'
const router = Router()

//* /addcartitem/

router.post("/", async (req: any, res) => {
    const userId = req.user._id;
    const wineid = req.headers.wineid
    try {
        let wine = await Wine.findById(wineid)
        req.user.shopping_cart.push(wine)
        let user = await User.findOneAndUpdate(
            { _id: userId }, 
            { $push: { shopping_cart: wine } }
        );
        user?.save()

    } catch (error: any) {
        res.status(400).json(error.message);
    }

})

export default router;