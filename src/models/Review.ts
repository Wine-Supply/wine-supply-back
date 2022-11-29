import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    date: { type: Date, default: Date.now },
    comment: { type: String, maxLength: 200, trim: true },
    rating: {type: Number, min:1, max:5, required: true},
    user_id: {type: mongoose.Types.ObjectId, ref:"User", required: true},
    wine_id: {type: mongoose.Types.ObjectId, ref:"Wine", required: true},
    isActive: {type: Boolean, default: true},
}, { timestamps: true })


const ReviewModel = mongoose.model('Review', ReviewSchema);
export default ReviewModel;

