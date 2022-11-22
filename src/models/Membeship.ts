import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembershipSchema = new Schema ({
    name: { type: String, required: true },
    price: { type: Boolean, required: true },
    isPremium: { type: Boolean, required: true}
})

const MembershipModel = mongoose.model('Membership', MembershipSchema);
export default MembershipModel;