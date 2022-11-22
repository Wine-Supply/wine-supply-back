import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembershipSchema = new Schema ({
    name: { type: String, require: true },
    price: { type: Boolean, require: true },
    isPremium: { type: Boolean, require: true}
})

const MembershipModel = mongoose.model('Membership', MembershipSchema);
export default MembershipModel;