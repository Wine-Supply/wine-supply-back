import User from "../../models/User";
import mongoose from "mongoose";

const resetCart = async (_id: string) => {
    try {
        let user: any = await User.findById(_id)
        user.shopping_cart = []
        user.save()
    } catch(err) {
        console.log(err);
        
    }

}

export default resetCart