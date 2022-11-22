import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const WineSchema = new Schema({
    // _id: ObjectId,
    name: {type:String, required: true},
    brand:{ type: String, require: true},
    description: {type: String, require: true},
    type: {type: String, require: true},
    body: {type: String, require: true},
    cropYear: {type: Number, require: true},
    origin: {type: String, require: true},
    zone: {type: String, require: true},
    volume: {type: Number, require: true},
    alcoholVolume: {type: Number, require: true},
    rating: Number, //TODO tabla de ratings
    images:{type: [String], require: true},
    strain: {type: String, require: true}
})

const WineModel = mongoose.model('Wine', WineSchema);
export default WineModel;