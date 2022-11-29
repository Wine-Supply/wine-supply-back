import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	// _id: ObjectId,
	name: {type: String, required: true, minLength: 1, maxLength: 25, trim: true},
	lastName: {type: String, required: true, minLength: 1, maxLength: 25, trim: true },
	userName: {type: String, required: true, minLength: 3, maxLength: 15, trim: true },
  email: {type: String, required: true, unique: true, minLength: 8,  maxLength: 50, trim: true },
	isAdmin: {type: Boolean, default: false},
  isActive: {type: Boolean, default: true},
	phone: {type: String, minLength: 6, maxLength: 15, trim: true}, //* Los numeros de tel tienen "-" y a veces "()"
	hashedPass:{type: String, required: true},
  avatar:{type: String, required: false},
	//TODO autenticación de terceros
	membership_id: [
		{ isMember: { type: Boolean, default: false} },
		{type: mongoose.Types.ObjectId, ref:"Membership"},
	],
	address:
		[
			{type: mongoose.Types.ObjectId, ref:"Address"},
			{type: mongoose.Types.ObjectId, ref:"Address"},
			{type: mongoose.Types.ObjectId, ref:"Address"}
		], //* array limit = 3
  review_id: [
    {type: mongoose.Types.ObjectId, ref:"Review"}
  ]
}, { timestamps: true });


/* PULIR EL REQUERIMIENTO TENIENDO EN CUENTA SIGNUP (A FUTURO)*/


const UserModel = mongoose.model('User',UserSchema);
export default UserModel;