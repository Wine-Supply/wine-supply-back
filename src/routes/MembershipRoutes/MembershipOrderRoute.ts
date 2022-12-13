import { Router } from "express";
const mercadopago = require('mercadopago')
import postOrder from "../../controllers/PaymentsControllers/PostOrder";
import postMembership from '../../controllers/MembershipControllers/PostMembership';


const router = Router()

// *  /membership

router.post("/", async (req:any, res:any) => {
  try {

    const user = req.user;
		//console.log("user", user);
		if (!user.isActive) {return res.status(303).send("Inactive user, do you want to recover it?") };
		if (!user) { return res.status(404).send("User not found!") };
    const response = req.query;
	  // const orderShopId = response.merchant_order_id;
	  // const data = await mercadopago.merchant_orders.findById(orderShopId);
    // postOrder(response, data);
    const newMembership = postMembership(response, user);
	
	  res.send(newMembership);

  } catch(error: any) {
    return res.status(400).send({error: error.message})
  }

})

export default router;