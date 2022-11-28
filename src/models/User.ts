import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	// _id: ObjectId,
	name: {type: String},
	lastName: {type: String},
	userName: {type: String},
  	email: {type: String},
	isAdmin: {type: Boolean, default: false},
  	isActive: {type: Boolean, default: false},
	phone: {type: String}, //* Los numeros de tel tienen "-" y a veces "()"
	hashedPass:{type: String},
	//TODO autenticación de terceros
	membership_id: [
		{ isMember: { type: Boolean} },
		{type: mongoose.Types.ObjectId, ref:"Membership"},
	],
	adress:
		[
			{type: mongoose.Types.ObjectId, ref:"Adress"},
			{type: mongoose.Types.ObjectId, ref:"Adress"},
			{type: mongoose.Types.ObjectId, ref:"Adress"}
		], //* array limit = 3
  review_id: [
    {type: mongoose.Types.ObjectId, ref:"Review"}
  ]
});


/* PULIR EL REQUERIMIENTO TENIENDO EN CUENTA SIGNUP (A FUTURO)*/


const UserModel = mongoose.model('User',UserSchema);
export default UserModel;