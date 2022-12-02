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

// address es OBJETO con todos los fields que pide mercadopago
  // console.log("address", address);
  // console.log("user", user);
  // console.log("user.address", user.address);
  // console.log("user.address.length",user.address.length);


  
  // console.log('address.addressNum = ', address.addressNum);
  // if(address.isDefault) {
  //   const findDefault = user.address.find( (el:any)  => el.isDefault === true)
  //   console.log("default before false", findDefault);
  //   findDefault.isDefault = false
  //   console.log("default after false", findDefault);
    
  // }


  // let findAddressToUpdate = user.address.forEach( (el:any)  => {
  //     if (el.addressNum === address.addressNum){
  //       el = address
  //     }
  //   })

  // //  findAddressToUpdate = address
  //  const updatedAddress = await user.save()

  // return updatedAddress


export default updateAddress;