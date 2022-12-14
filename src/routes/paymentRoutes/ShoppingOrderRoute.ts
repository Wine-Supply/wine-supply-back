import { Router } from "express";
const mercadopago = require('mercadopago')
import ShoppingOder from "../../models/ShoppingOrder"
import postOrder from "../../controllers/PaymentsControllers/PostOrder";

const router = Router()

// */ /createorder

router.get("/", async (req, res) => {

    try {
		const response = req.query; // id - orderShopId (es de mercado pago)
		const orderShopId = response.merchant_order_id;
		const data = await mercadopago.merchant_orders.findById(orderShopId);
		postOrder(response, data)
		
		return res.redirect('https://exquisite-brigadeiros-cc493c.netlify.app/');

	} catch (error) {
		console.log(error)
		return res.status(400).send("Couldn't generate order!")
	}

})

export default router;
