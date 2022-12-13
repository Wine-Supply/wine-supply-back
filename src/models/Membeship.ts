import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MembershipSchema = new Schema ({
    name: { type: String, required: true, enum:['Regular', 'Premium', 'Sommeliere']},
    price: { type: Number, required: true },
    user_id: {type: mongoose.Types.ObjectId, ref:"User", required: true},
    isActive: { type: Boolean, default: true }
}, { timestamps: true })

const MembershipModel = mongoose.model('Membership', MembershipSchema);
export default MembershipModel;