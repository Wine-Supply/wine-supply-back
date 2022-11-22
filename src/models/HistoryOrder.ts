import mongoose from "mongoose";
const { Schema , model } = mongoose;

const HistoryOrderScheme = new Schema({
    shoppingOrder_id : {type : mongoose.Types.ObjectId , ref: "ShoppingOrder" , required : true },
    user_id : {type : mongoose.Types.ObjectId , ref: "User" , required : true}
})

const HistoryOrder = model('HistoryOrder' , HistoryOrderScheme);

export default HistoryOrder;



