import { Router } from "express";
const mercadopago = require('mercadopago')
import ShoppingOder from "../../models/ShoppingOrder"
import postOrder from "../../controllers/PaymentsControllers/PostOrder";

const router = Router()

// */ /createorder

router.get("/", async (req, res) => {

    const response = req.query;
	const orderShopId = response.merchant_order_id;
	const data = await mercadopago.merchant_orders.findById(orderShopId);
    postOrder(response, data)
	
	res.send(data);

})

export default router;