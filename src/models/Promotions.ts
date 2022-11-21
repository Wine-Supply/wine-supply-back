import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    name: String,
    description: String,
    discount_rate: Number,
    startDate: Date,
    endDate: Date
})

const PromotionModel = mongoose.model('Promotion', PromotionSchema);
export default PromotionModel;