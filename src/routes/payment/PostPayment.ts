import { Router } from "express"
import paymentMercadoPago from '../../controllers/PaymentControllers/PaymentMercadoPago'

const router = Router();


router.get('/' , async (req , res)=>{
	const mercadoPago =await paymentMercadoPago()
	
	try{
		// res.send(mercadoPago)
		res.send(`<a href="${mercadoPago.body.init_point}">PAGAR</a>`)
	}catch(e){
		res.status(404).send(e)
	}

})






export default router;