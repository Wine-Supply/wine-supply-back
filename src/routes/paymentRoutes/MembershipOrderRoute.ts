import { Router } from "express";
const mercadopago = require('mercadopago')
import ShoppingOder from "../../models/ShoppingOrder"
import postMembershipOrder from "../../controllers/PaymentsControllers/PostMembershipOrder";

const router = Router()

// *  /membership

router.post("/", async (req, res) => {

    const response = req.query;
	  const orderShopId = response.merchant_order_id;
	  const data = await mercadopago.merchant_orders.findById(orderShopId);
    postMembershipOrder(response, data)
	
	res.send(data);

})

export default router;