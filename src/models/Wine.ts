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
    rating: Number, //TODO logica de ratings
    images:{type: [String], required: true},
    strain: {type: String, required: true}
})

const WineModel = mongoose.model('Wine', WineSchema);
export default WineModel;