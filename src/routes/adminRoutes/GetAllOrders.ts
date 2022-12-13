import { Router } from "express"
import ShoppingOrder from "../../models/ShoppingOrder"
const router = Router()

//* /getorders/

router.get("/", async(req: any, res, next) => {
    
    try {
        let orders = await ShoppingOrder.find({}).populate('items')
        let sales: Array<object> = []
        for (let order of orders) {
            sales.push(order.items)
        }

        res.status(200).json({orders, sales})
    } catch(error) {
        res.status(400).send(error)
    }
})

//


export default router