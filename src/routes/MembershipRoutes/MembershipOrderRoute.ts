import { Router } from "express";
const mercadopago = require('mercadopago')
import postOrderMembership from "../../controllers/MembershipControllers/PostOrderMembership";
import postMembership from '../../controllers/MembershipControllers/PostMembership';
import axios from "axios";
import { config } from "dotenv";
config();


const router = Router()

// *  /membershipcreateorder
// VerifyUserToken

router.post("/", async (req:any, res:any) => {
  console.log("Hello World");
  
  try {

    const user = req.query.user_id;
		//console.log("user", user);
		if (!user.isActive) {return res.status(303).send("Inactive user, do you want to recover it?") };
		if (!user) { return res.status(404).send("User not found!") };
    const response = req.query;
    console.log("response", response);

	  // const orderShopId = response.merchant_order_id;
    // console.log("orderShopId", orderShopId);
	  // const data = await mercadopago.merchant_orders.findById(orderShopId);
    // console.log("date", data);

    // const preapproval_id = req.query.preapproval_id
    // const data = axios.get(`https://api.mercadopago.com/preapproval/${preapproval_id}`, {headers: {
    //   'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN_MP,
    //   'Content-Type': 'application/json'
    // }})
    
    // postOrderMembership(response, data);
    const data = {reason: "hola", auto_recurring: {transaction_amount:1} }
    const newMembership = postMembership(user, data);
	
	  res.send(newMembership);

  } catch(error: any) {
    return res.status(400).send({error: error.message})
  }

})

export default router;

// RUTA GET A MERCADO PAGO:
// https://api.mercadopago.com/preapproval/8aef053a850b370b0185122195ef036b
 /* 
 {
	"id": "8aef053a850b370b0185122195ef036b",
	"payer_id": 1255770637,
	"payer_email": "",
	"back_url": "https://wine-supply-back-production.up.railway.app/membershipcreateorder?user_id=638a2febe2216a9de26a31ad",
	"collector_id": 1252815768,
	"application_id": 3215219968691559,
	"status": "authorized",
	"reason": "Wine Club (Regular Subscription)",
	"date_created": "2022-12-14T15:34:29.101-04:00",
	"last_modified": "2022-12-14T15:38:09.582-04:00",
	"init_point": "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_id=8aef053a850b370b0185122195ef036b",
	"preapproval_plan_id": "2c938084850b39e201851221331303c2",
	"auto_recurring": {
		"frequency": 1,
		"frequency_type": "months",
		"transaction_amount": 40.00,
		"currency_id": "ARS",
		"start_date": "2022-12-14T15:34:29.102-04:00",
		"billing_day": 10,
		"billing_day_proportional": false,
		"has_billing_day": true,
		"free_trial": null
	},
	"summarized": {
		"quotas": null,
		"charged_quantity": 1,
		"pending_charge_quantity": null,
		"charged_amount": 40.00,
		"pending_charge_amount": null,
		"semaphore": "green",
		"last_charged_date": "2022-12-14T15:35:07.494-04:00",
		"last_charged_amount": 40.00
	},
	"next_payment_date": "2023-01-10T15:34:29.000-04:00",
	"payment_method_id": "account_money",
	"first_invoice_offset": null
}
 */