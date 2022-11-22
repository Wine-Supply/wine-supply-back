import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdressSchema = new Schema({
    ifDefault: { type: Boolean, require: true },
    country: { type: String, require: true },
    region: { type: String, require: true },
    city: { type: String, require: true },
    postalCode: { type: String, require: true },
    adressLine1: { type: String, require: true },
    adressLine2: { type: String, require: true },
    adressNumber: { type: String, require: true },
    floor: { type: Number, require: false },
    flatNumber: { type: Number, require: false },
})

const AdressModel = mongoose.model('Adress', AdressSchema);
export default AdressModel;