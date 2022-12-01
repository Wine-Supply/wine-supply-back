import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // _id: ObjectId,
  name: {type: String, required: true, minLength: 1, maxLength: 25, trim: true},
  lastName: {type: String, required: true, minLength: 1, maxLength: 25, trim: true },
  userName: {type: String, required: true, minLength: 3, maxLength: 15, trim: true },
  email: {type: String, required: true, unique: true, minLength: 8,  maxLength: 50, trim: true },
  hashedPass:{type: String, required: true},
  date_of_birth:{type : Date, required: false},
  phone: {type: String, minLength: 6, maxLength: 15, trim: true}, //* Los numeros de tel tienen "-" y a veces "()"
  avatar:{type: String, required: false},
  isAdmin: {type: String, default: "no"},
  isActive: {type: Boolean, default: true},
	//TODO autenticación de terceros
  membership_id: [
		{ isMember: { type: Boolean, default: false} },
		{type: mongoose.Types.ObjectId, ref:"Membership"},
	],
  address: [
      // {isDefault, country, stateName, cityName, postalcode, streetName, streetNumber: String, floor:String, Apartment:String},
      // {isDefault, country, region, city, postalcode, addressLine1, addressLine2},
      // {isDefault, country, region, city, postalcode, addressLine1, addressLine2}
			{type: mongoose.Types.ObjectId, ref:"Address"},
			{type: mongoose.Types.ObjectId, ref:"Address"},
			{type: mongoose.Types.ObjectId, ref:"Address"}
		], //* array limit = 3
  review_id: [
    {type: mongoose.Types.ObjectId, ref:"Review"}
  ],
  shopping_cart: [{type: mongoose.Types.ObjectId, ref:"Wine"}],
  order: [{type: mongoose.Types.ObjectId, ref:"ShoppingOrder"}],
  whishList: [{type: mongoose.Types.ObjectId, ref:"Wine"}]
}, { timestamps: true });


/* PULIR EL REQUERIMIENTO TENIENDO EN CUENTA SIGNUP (A FUTURO)*/


const UserModel = mongoose.model('User',UserSchema);
export default UserModel;