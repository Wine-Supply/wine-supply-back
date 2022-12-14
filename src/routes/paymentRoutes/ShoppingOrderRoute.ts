import { Router } from "express";
const mercadopago = require('mercadopago')
import ShoppingOder from "../../models/ShoppingOrder"
import postOrder from "../../controllers/PaymentsControllers/PostOrder";
import UserModel from "../../models/User";

const router = Router()

// */ /createorder

router.get("/", async (req, res) => {

    try {
		const response = req.query; // id - orderShopId (es de mercado pago)
		const orderShopId = response.merchant_order_id;
		const data = await mercadopago.merchant_orders.findById(orderShopId);
		postOrder(response, data)
		
    const user:any = await UserModel.findById(response.user_id);
		return res.redirect(`https://effortless-lolly-5fd0a5.netlify.app/user/${user?.name}/profile`);
    //https://effortless-lolly-5fd0a5.netlify.app/
    // https://exquisite-brigadeiros-cc493c.netlify.app/
    // 'http://localhost:3000/home/products'

	} catch (error) {
		console.log(error)
		return res.status(400).send("Couldn't generate order!")
	}

})

export default router;
