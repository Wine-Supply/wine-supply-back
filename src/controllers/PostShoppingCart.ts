import mongoose from "mongoose";
import ShoppingCartModel from "../models/ShoppingCart";



const postShoppingCart = async( user_id : string , wineList : Array<object>)=>{
    
    if(wineList.length < 1)throw new Error('The wine list cannot be empty')
    
    const newShoppCart = new ShoppingCartModel(
        user_id,
        wineList
    )
    
    const createdShopCart = await newShoppCart.save()

    return createdShopCart;
}

export default postShoppingCart;