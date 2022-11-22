import mongoose from 'mongoose';
const { model , Schema } = mongoose;


const ShoppingOrderSchema = new Schema({
    user_id: {type : mongoose.Types.ObjectId , ref: "User" , required : true },
    user_addres_id : {type : mongoose.Types.ObjectId , ref:"Adress" , required : true  },
    orderDate : {type : Date , default : Date.now },
    payment : { type : Number }, 
    shippingMethod : {type: String }, 
    orderTotal : {type : Number }, 
    orderStatus : { type : Number}
})

const ShoppingOrder = model('ShoppingOrder' , ShoppingOrderSchema)

export default ShoppingOrder;


