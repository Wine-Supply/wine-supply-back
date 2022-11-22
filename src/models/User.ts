import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	// _id: ObjectId,
	name: {type: String, require: true},
	lastName: {type: String, require: true},
	isAdmin: {type: Boolean, require: true}, 
	phone: {type: String, require: true}, //* Los numeros de tel tienen "-" y a veces "()"
	hashedPass:{type: String, require: true},
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
		] //* array limit = 3
});

const UserModel = mongoose.model('User',UserSchema);
export default UserModel;