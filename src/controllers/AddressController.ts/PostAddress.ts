
// address = req.body
// {addressNum, country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault}

const postAddress = async(user: any, address: any, query: any)=>{

    if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

    if(query.false){
      let f = parseInt(query.false) 
      user.address[f].isDefault = false
    }

    user.address.push(address)
    const updatedUser= await user.save()

   console.log("updatedUser", updatedUser);
  
  return updatedUser
}

export default postAddress;