import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    ifDefault: { type: Boolean, required: true },
    country: { type: String, required: true , trim: true },
    region: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    postalCode: { type: String, required: true, trim: true },
    addressLine1: { type: String, required: true, trim: true },
    addressLine2: { type: String, required: false, trim: true },
    addressNumber: { type: String, required: true, trim: true },
    floor: { type: Number, required: false, trim: true },
    flatNumber: { type: Number, required: false, trim: true },
    isActive: {type: Boolean, default: true},
}, { timestamps: true })

const AddressModel = mongoose.model('Address', AddressSchema);
export default AddressModel;