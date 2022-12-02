
// address = req.body
// {country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault}

const postAddress = async(user: any, address: any, query: any)=>{

    if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

  // si el nuevo address a postear, isDefault es true, entonces debo cambiar a false el que estaba previamente en true
  // enviar por query el index del que debo cambiar a false.
  // ejemplo: /address/update?index=0&false=1

    if(query.false){
      let f = parseInt(query.false) 
      user.address[f].isDefault = false
    }

    user.address.push(address)
    const updatedUser= await user.save()

   console.log("updatedUser", updatedUser);
  
  return updatedUser.address
}

export default postAddress;