import mongoose from 'mongoose';
const { model , Schema } = mongoose;


const ShoppingOrderSchema = new Schema({
    user_id: {type: mongoose.Types.ObjectId , ref: "User" , required : true },
    user: {type: String, required : true },
    order_address: {type: String, trim: true, required : true },
    items: {type: [Object]},
    orderDate: {type: Date , default : Date.now },
    payment: { type: String},
    shippingMethod: {type: String, trim: true },
    orderTotal: {type: Number, trim: true },
    orderStatus: { type: Number, trim: true },
}, { timestamps: true });

const ShoppingOrder = model('ShoppingOrder' , ShoppingOrderSchema)

export default ShoppingOrder;


