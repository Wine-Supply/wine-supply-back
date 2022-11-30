import { Router } from "express";
import postShoppingCart from "../../controllers/PostShoppingCart";


const router = Router()


router.post('/' , async ( req ,res )=>{
    const { user_id , wineList } = req.body;

    try{
        const newShoppCart = await postShoppingCart( user_id , wineList)
        res.status(200).send(newShoppCart)
    }catch(e){
        res.status(400).send(e)
    }

})

export default router;