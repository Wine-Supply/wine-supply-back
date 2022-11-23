import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	// _id: ObjectId,
	name: {type: String, required: true},
	lastName: {type: String, required: true},
	userName: {type: String, required: true, unique: true},
  email: {type: String, required: true},
	isAdmin: {type: Boolean, default: false, required: true},
  isActive: {type: Boolean, default: true, required: true},
	phone: {type: String, required: true}, //* Los numeros de tel tienen "-" y a veces "()"
	hashedPass:{type: String, required: true},
	//TODO autenticación de terceros
	membership_id: [
		{ isMember: { type: Boolean, required: true} },
		{type: mongoose.Types.ObjectId, ref:"Membership", required: true},
	],
	adress:
		[
			{type: mongoose.Types.ObjectId, ref:"Adress", required: true},
			{type: mongoose.Types.ObjectId, ref:"Adress", required: false},
			{type: mongoose.Types.ObjectId, ref:"Adress", required: false}
		], //* array limit = 3
  review_id: [
    {type: mongoose.Types.ObjectId, ref:"Review"}
  ]
});

const UserModel = mongoose.model('User',UserSchema);
export default UserModel;