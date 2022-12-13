import { Router } from "express";
import User from '../../models/User'
const router = Router()

//* /getcart/

router.get("/", async (req: any, res) => {
    const userId = req.user._id;
    try {
        let user : any = await User.findById(userId, 'shopping_cart').populate('shopping_cart');
        if (user?.shopping_cart.length > 0 ) {
            return res.status(200).json(user?.shopping_cart)
        }
        return res.status(300).send( 'No items in the shopping cart!' )

    } catch (error: any) {
        res.status(400).json(error.message);
    }

})

export default router;