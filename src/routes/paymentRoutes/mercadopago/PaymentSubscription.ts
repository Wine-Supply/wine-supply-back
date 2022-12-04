import { Router } from "express";
const mercadopago = require("mercadopago");
import { config } from "dotenv";
import PaymentSubCreate from "../../../controllers/PaymentsControllers/PaymentSubCreate";
config();
const router = Router()

//* /paymentsubs/

router.post("/", async (req:any, res) => {    
    const {name, lastName, phone, _id} = req.user
    let id = _id.toString()
    let address1;
    for (const address of req.user.address) {
        if (address.isDefault === true) {
            address1 = address
        }
    }
    if (!address1) {
        return res.status(400).send("Address not found!")
    }
    const {country, stateName, cityName, postalCode, streetName, streetNumber, floor, Apartment} = address1
    if (req.sub_type) {
        const id: string = req.sub_type
        let subscription = await PaymentSubCreate(id)
        res.status(200).send(subscription.data.init_point)
    }
})
export default router;