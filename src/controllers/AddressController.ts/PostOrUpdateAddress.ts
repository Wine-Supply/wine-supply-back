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
  
  console.log('address.addressNum = ', address.addressNum);
  const checkIndex = user.address.indexOf(address.addressNum)
  // console.log("checkIndex ", checkIndex );
  
  if(checkIndex >= 0) {
    console.log('entre en >= 0');
    
    user.address.splice(checkIndex, 1, address)
    const updatedUser= await user.save()
    console.log('updated user 1x = ', updatedUser);
    
  } else {
    console.log('entre al else');

    if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");
    
    user.address.push(address)
    const updatedUser= await user.save()
    console.log('updatedUser 2x = ', updatedUser);
    
  }
  const getUser: any = await User.findById(user._id).select("address")
  
  console.log("updatedUser", getUser);
  
  return getUser
}

export default updateOrPostAddress;