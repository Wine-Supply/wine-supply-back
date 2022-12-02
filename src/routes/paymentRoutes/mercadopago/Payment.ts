import { Router } from "express";
import Wine from '../../../models/Wine'
import User from '../../../models/User'
const mercadopago = require("mercadopago");
import { config } from "dotenv";
import PaymentCreate from "../../../controllers/PaymentsControllers/PaymentCreate";
import mongoose from "mongoose"
config();
const router = Router()
mongoose.Types.ObjectId

//* /payment/


mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });



router.get("/", async (req:any, res) => {
    
    const cart = req.user.shopping_cart
    const {name, lastName, phone, _id} = req.user
    let id = _id.toString()

    let items = await PaymentCreate(req.headers.wineid, cart)
    let preference = {
        back_urls : {
            success : `http://localhost:3001/createorder?name=${name}&lastName=${lastName}&user_id=${id}`
        },
        items
        // notification_url : 'http://localhost:3001/notificar'
    };
        
    const pruebaMercadoPago = await mercadopago.preferences.create(preference);
    // res.send(pruebaMercadoPago.body)
    res.send(`<a href="${pruebaMercadoPago.body.init_point}">PAGAR</a>`)


})
export default router;