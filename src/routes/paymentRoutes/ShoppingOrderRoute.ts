import { Router } from "express";
const mercadopago = require('mercadopago')
import ShoppingOder from "../../models/ShoppingOrder"
import postOrder from "../../controllers/PaymentsControllers/PostOrder";

const router = Router()

// */ /createorder

router.get("/", async (req, res) => {

    const response = req.query;
	const orderShopId = response.merchant_order_id;
	// // console.log('ID DE LA ORDEN:', orderShopId)
	const data = await mercadopago.merchant_orders.findById(orderShopId);
    postOrder(response, data)
	
	// ORDEN DE COMPRA QUE ME EMITE MERCADO PAGO
	res.send(data);

})

export default router;