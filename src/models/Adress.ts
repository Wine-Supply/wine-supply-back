import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdressSchema = new Schema({
    ifDefault: { type: Boolean, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    adressLine1: { type: String, required: true },
    adressLine2: { type: String, required: true },
    adressNumber: { type: String, required: true },
    floor: { type: Number, required: false },
    flatNumber: { type: Number, required: false },
})

const AdressModel = mongoose.model('Adress', AdressSchema);
export default AdressModel;