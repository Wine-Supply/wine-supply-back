import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const WineSchema = new Schema({
    // _id: ObjectId,
    name: {type:String, required: true},
    brand:{ type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true},
    body: {type: String, required: true},
    cropYear: {type: Number, required: true},
    origin: {type: String, required: true},
    zone: {type: String, required: true},
    volume: {type: Number, required: true},
    alcoholVolume: {type: Number, required: true},
    rating: Number,
    images:{type: [String], required: true},
    strain: {type: String, required: true},
    stock: {type: Number, required: true},
    price: {type: Number, required: true},
    review_id: [
      { type: mongoose.Types.ObjectId, ref:"Review" }
    ],
    isActive: {type:Boolean, default: true}
})

const WineModel = mongoose.model('Wine', WineSchema);
export default WineModel;