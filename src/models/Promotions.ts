import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PromotionSchema = new Schema({
    wine_id: {type: mongoose.Types.ObjectId, ref:"Wine", required: true},
    name: { type: String, maxLength: 25, required: true, trim: true },
    description: { type: String, maxLength: 200, required: true, trim: true },
    discount_rate: {type: Number, default: 0, min:0, max:99},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    isActive: {type: Boolean, default: true},
}, { timestamps: true })

const PromotionModel = mongoose.model('Promotion', PromotionSchema);
export default PromotionModel;