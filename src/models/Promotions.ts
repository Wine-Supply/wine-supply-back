import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    name: { type: String, trim: true },
    description: String,
    discount_rate: {type: Number, default: 1},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true}
})

const PromotionModel = mongoose.model('Promotion', PromotionSchema);
export default PromotionModel;