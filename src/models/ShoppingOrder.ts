import mongoose from 'mongoose';
const { model , Schema } = mongoose;


const ShoppingOrderSchema = new Schema({
    user_id: {type : mongoose.Types.ObjectId , ref: "User" , required : true },
    user_address_id : {type : mongoose.Types.ObjectId , ref:"Address" , required : true  },
    orderDate : {type : Date , default : Date.now },
    payment : { type : Number , trim: true}, 
    shippingMethod : {type: String, trim: true }, 
    orderTotal : {type : Number, trim: true }, 
    orderStatus : { type : Number, trim: true },
}, { timestamps: true });

const ShoppingOrder = model('ShoppingOrder' , ShoppingOrderSchema)

export default ShoppingOrder;


