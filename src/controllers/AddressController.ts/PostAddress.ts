
// address = req.body
// {country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault}

const postAddress = async(user: any, address: any, query: any)=>{

    if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

  // ejemplo: /address/update?index=0
  
  // si la propiedad isDefault viene como true, entonces todas las anteriores se cambian a false, en el proximo paso, queda registrado el true
  if(address.isDefault){

    user.address.forEach( (el:any) => el.isDefault = false)

  }

    user.address.push(address)
    const updatedUser= await user.save()

  //  console.log("updatedUser", updatedUser);
  
  return updatedUser.address
}

export default postAddress;