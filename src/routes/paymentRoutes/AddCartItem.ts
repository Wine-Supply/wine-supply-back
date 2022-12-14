import { Router } from "express";
import Wine from '../../models/Wine'
import User from '../../models/User'
const router = Router()

//* /addcartitem/

router.post("/", async (req: any, res) => {
    const userId = req.user._id;
    const wines = JSON.parse(req.headers.items)
    // let listWines = wines.map((e:any) => {
        //     return {
            try {
            //         id: e._id,
            //         name: e.name,
            //         img: e.img,
            //         descriptions: e.descriptions,
            //         price: e.price,
            //         rating: e.rating,
            //         cuantity: e.cuantity
            //     }
            let user = await User.findOneAndUpdate(
                    { _id: userId }, 
                    { $set: { shopping_cart: wines } }
                );
            user?.save()
                return res.status(200).send("wines added!")
        } catch (err) {
            console.log(err)
            return res.status(403).send("Can't add wines to cart!")
        }}
        )
            //     let updatedUser = req.user
            //     updatedUser.shopping_cart = listWines
            //     updatedUser.save()

export default router;