import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    wine_id: {type: mongoose.Types.ObjectId, ref:"Wine", required: true},
    name: { type: String, trim: true },
    description: String,
    discount_rate: {type: Number, default: 0, min:1, max:99},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true}
})

const PromotionModel = mongoose.model('Promotion', PromotionSchema);
export default PromotionModel;