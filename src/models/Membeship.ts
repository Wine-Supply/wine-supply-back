import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembershipSchema = new Schema ({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    isPremium: { type: Boolean, required: true}
}, { timestamps: true })

const MembershipModel = mongoose.model('Membership', MembershipSchema);
export default MembershipModel;