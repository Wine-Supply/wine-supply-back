import {Router} from 'express';
const mercadopago = require("mercadopago");
const router = Router();


// Ruta de prueba
router.get('/' , async (req,res)=>{
	const response = await req.query;
	
	const orderShopId = response.merchant_order_id;
	// console.log('ID DE LA ORDEN:', orderShopId)
	const orderShopp = await mercadopago.merchant_orders.findById(orderShopId);
	
	// ORDEN DE COMPRA QUE ME EMITE MERCADO PAGO
	res.send(orderShopp);
})

export default router;