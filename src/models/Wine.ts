import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const WineSchema = new Schema({
    // _id: ObjectId,
    name: String,
    description: String,
    type: String,
    body: String,
    cropYear: Number,
    origin: String,
    volume: Number,
    alcoholVolume: Number,
    rating: Number,
    images:[String],
    strain: String
})

const WineModel = mongoose.model('Wine', WineSchema);
export default WineModel;