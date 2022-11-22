import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ShoppingCartSchema = new Schema({
    user_id: {type: mongoose.Types.ObjectId, ref:"User", required: true},
    wineList: [{type: mongoose.Types.ObjectId, ref:"Wine"}]
})

const ShoppingCartModel = mongoose.model('ShoppingCart', ShoppingCartSchema);
export default ShoppingCartModel;