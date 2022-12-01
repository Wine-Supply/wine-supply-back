import User from "../../models/User"

// -------------------UPDATE & POST ADDRESS
// address = req.body
//const {addressNum, country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault} = address


const updateOrPostAddress = async(user: any, address: any)=>{

// address es OBJETO con todos los fields que pide mercadopago
  console.log("address", address);
  console.log("user", user);
  console.log("user.address", user.address);
  console.log("user.address.length",user.address.length);

  if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

  const checkIndex = user.address.indexOf(address.addressNum)
  if(checkIndex > 0) {
    user.address = user.address.splice(checkIndex, 1, {address})
    const updatedUser= await user.save()
  } else {
    user.address = user.address.push({address})
    const updatedUser= await user.save()
  }
  const getUser: any = await User.findById(user._id).select( "address")
  
  console.log("updatedUser", getUser.address[0]);
  
  return getUser
}

export default updateOrPostAddress;