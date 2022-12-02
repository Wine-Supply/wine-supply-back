import { Router } from "express";
import User from '../../models/User'
const router = Router()
import mongoose from "mongoose"
//* /getcart/

router.delete("/", async (req: any, res) => {
    const userId = req.user._id;
    const wineId = req.headers.wineid;
    if (req.user.shopping_cart.length > 0) {
        try {
            req.user.shopping_cart.pull(wineId);
            req.user.save();
            return res.status(200).send( 'Wine deleted!' )
            } catch(err) {
                console.log(err)
            }
    }
    return res.status(300).send( 'No items in the shopping cart!' )

})

export default router;