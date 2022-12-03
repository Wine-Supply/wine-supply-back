import { Router } from "express";
const mercadopago = require('mercadopago')
import postOrder from "../../controllers/PaymentsControllers/PostOrder";
import postMembership from '../../controllers/Membership controllers/PostMembership'


const router = Router()

// *  /membership

router.post("/", async (req, res) => {
  try {

    const response = req.query;
	  const orderShopId = response.merchant_order_id;
	  const data = await mercadopago.merchant_orders.findById(orderShopId);
    postOrder(response, data)
    postMembership(response,data)
	
	  res.send(data);

  } catch(error: any) {
    return res.status(400).send({error: error.message})
  }

})

export default router;