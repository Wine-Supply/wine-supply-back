import User from "../../models/User"

// -------------------UPDATE & POST ADDRESS
// address = req.body
//const { country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault} = address

// mandan por query la posicion del address a cambiar
// ejemplo: /address/update?index=0   --> voy a modificar el que este en el indice 0

const updateAddress = async(user: any, address: any, query: any)=>{

  // si la propiedad isDefault viene como true, entonces todas las anteriores se cambian a false, en el proximo paso, queda registrado el true
  if(address.isDefault){

    user.address.forEach( (el:any) => el.isDefault = false)

  }

  // por query me indican en que posicion esta el address que se va a actualizar
  let i = parseInt(query.index)

  user.address[i] = address;

  await user.save()

  return user.address
}

export default updateAddress;