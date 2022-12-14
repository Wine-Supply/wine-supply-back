import { Router } from "express";
const mercadopago = require("mercadopago");
import { config } from "dotenv";
import PaymentCreate from "../../../controllers/PaymentsControllers/PaymentCreate";
import mongoose from "mongoose"
config();
const router = Router()

//* /payment/


mercadopago.configure({
    access_token: process.env.ACCESS_TOKEN_MP,
  });



router.post("/", async (req:any, res) => {
    const {_id} = req.user
    let id = _id.toString()
    let address1;
    // for (const address of req.user.address) {
    //     if (address.isDefault === true) {
    //         address1 = address
    //     }
    // }
    // if (!address1) {
    //     return res.status(400).send("Address not found!")
    // }

    try {
        if (req.item){
            const item: any = req.item
            let items = await PaymentCreate(item)
            let preference = {
                auto_return: 'approved',
                back_urls : {
                    success : `http://localhost:3001/createorder?user_id=${id}`
                },
                items
                // notification_url : 'http://localhost:3001/notificar'
            }
            const pruebaMercadoPago = await mercadopago.preferences.create(preference);
            return res.send(pruebaMercadoPago.body.init_point)}
        if (req.body) {
            console.log(req.user)
            const cart: any = req.user.shopping_cart
            let items = await PaymentCreate(cart)
            let preference = {
                auto_return: 'approved',
                back_urls : {
                    success : `http://localhost:3001/createorder?user_id=${id}`
                },
                items
                // notification_url : 'http://localhost:3001/notificar'
            };
            const pruebaMercadoPago = await mercadopago.preferences.create(preference);
            return res.send(pruebaMercadoPago.body.init_point)}
    } catch (error) {
        console.log(error)
        return res.status(400).send('Error in payment creation!')
    }
    res.status(300).send('No items received!')
})
export default router;
