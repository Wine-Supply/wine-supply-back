import User from "../../models/User"

// -------------------UPDATE & POST ADDRESS
// address = req.body
//const { country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault} = address

// mandan por query la posicion del address a cambiar
// ejemplo: /address/update?index=0   --> voy a modificar el que este en el indice 0


const updateAddress = async(user: any, address: any, query: any)=>{

  // si isDefault es true, entonces debo cambiar a false el que estaba previamente en true
  // enviar por query el index del que debo cambiar a false.
  // ejemplo: /address/update?index=0&false=1
  
  if(query.false){
    let f = parseInt(query.false) 
    user.address[f].isDefault = false
  }

  // por query me indican en que posicion esta el address que se va a actualizar
  let i = parseInt(query.index)
  
  user.address[i] = address;

  await user.save()

  return user
}

export default updateAddress;