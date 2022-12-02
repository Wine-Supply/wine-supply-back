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
        // Aca es donde sea cual sea el pago, me va postear a esta url que le mando
        // notification_url : 'http://localhost:3001/notificar'
    };
        
    const pruebaMercadoPago = await mercadopago.preferences.create(preference);
    // Me trae toda la informacion de la compra
    // res.send(pruebaMercadoPago.body)
    res.send(`<a href="${pruebaMercadoPago.body.init_point}">PAGAR</a>`)


})
export default router;
/*






app.get('/' , (req,res)=> {
    res.send('Prueba MERCADO PAGO')
})

app.get('/success' , (req , res)=>{
    res.send('Compra exitosa')
})

app.get('/notificar' , (req , res)=>{
    console.log('notificar')
    res.send('Notificar')
})



app.get('/generar' , async  (req,res)=>{
    // Crea un objeto de preferencia
    let preference = {
        back_urls : {
            success : 'http://localhost:3001/success'
        },
        // Aca iria mis productos 
        items: [
        {
            title: "Producto1",
            unit_price: 120,
            quantity: 1,
            currency_id: "ARS" //Tipo de moneda en el cual va estar
        },
        {
            title : "Producto2",
            unit_price : 140,
            quantity : 1,
            currency_id : "ARS"
        },
        {
            title : "Producto3",
            unit_price : 100,
            quantity : 1,
            currency_id : "ARS"
        }
        ],
        // Aca es donde sea cual sea el pago, me va postear a esta url que le mando
        notification_url : 'http://localhost:3001/notificar'
    };
    
    const pruebaMercadoPago = await mercadopago.preferences.create(preference);

    // Me trae toda la informacion de la compra
    // res.send(pruebaMercadoPago.body)
    res.send(`<a href="${pruebaMercadoPago.body.init_point}">PAGAR</a>`)
})


// Servidor
app.listen(3001 , ()=>{
    console.log('Listen on port 3001')
})

*/