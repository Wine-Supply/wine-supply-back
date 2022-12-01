import Address from "../../models/Adress";
import User from "../../models/User"

// RUTAS CON ERRORES, REVISAR

const checkAddress = async (country:any, region:string, city:string, postalCode:string, addressLine1:string, addressLine2:string, addressNumber:string, floor:Number, flatNumber:Number) => {

  const regexCountryInsensitive = { $regex: '.*' + country + '.*', $options: 'i' }
  const regexRegionInsensitive = { $regex: '.*' + region + '.*', $options: 'i' }
  const regexCityInsensitive = { $regex: '.*' + city + '.*', $options: 'i' }
  const regexPostalCodeInsensitive = { $regex: '.*' + postalCode + '.*', $options: 'i' }
  const regexAddressLine1Insensitive = { $regex: '.*' + addressLine1 + '.*', $options: 'i' }
  const regexAddressLine2Insensitive = { $regex: '.*' + addressLine2 + '.*', $options: 'i' }
  const regexAddressNumberInsensitive = { $regex: '.*' + addressNumber + '.*', $options: 'i' }
  
  const filters = {
        $and: [
            { country: { regexCountryInsensitive } },
            { region: { regexRegionInsensitive } },
            { city: { regexCityInsensitive } },
            { postalCode: { regexPostalCodeInsensitive } },
            { addressLine1: { regexAddressLine1Insensitive } },
            { addressLine2: { regexAddressLine2Insensitive } },
            { addressNumber: { regexAddressNumberInsensitive } },
            { floor: { floor} },
            { flatNumber: { flatNumber} },
        ]
    }
    const existingAddress = await Address.find(filters).exec();

    return existingAddress;
}


// -------------------UPDATE & POST ADDRESS

const updateOrPostAddress = async(user: any, address: any, isSelected: Boolean)=>{

// address es OBJETO con todos los fields requeridos
const {country, region, city, postalCode, addressLine1, addressLine2, addressNumber, floor, flatNumber} = address

// console.log("address", address);
// console.log("user", user);

// console.log("user.address", user.address);
// console.log("user.address.length",user.address.length);


// if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

// ver si existe
  const existingAddress:any = await Address.find(address).exec();
  // checkAddress(country, region, city, postalCode, addressLine1, addressLine2, addressNumber, floor, flatNumber)
  console.log("existingAddress", existingAddress);
  
  if(existingAddress.length > 0) {
    // si existe: 
    // agregar ese user_id al address
      // existingAddress[0].user_id = existingAddress[0].user_id.concat(user._id)
      // const updatedAddress:any = await existingAddress.save()
    // agregar ese address id al user (si es selected, es en posicion [0])
    isSelected ? user.address.unshift(existingAddress._id) : user.address.concat(existingAddress._id)
    await user.save()

  } else {

    // si no existe:
    // crear Address (incluir user_id)
    const newAddress = new Address({
      country,
      region,
      city,
      postalCode,
      addressLine1,
      addressLine2,
      addressNumber,
      floor,
      flatNumber,
      isActive: true,
      user_id:[user._id]
     })

    const savedAddress: any = await newAddress.save()
    // const getSavedAddress = await Address.findById(savedAddress._id)
    // console.log("getSavedAddress", getSavedAddress);
    

    // agregar ese address al user_id (si es selected, es en posicion [0])
    isSelected ? user.address.unshift(savedAddress._id) : user.address.concat(savedAddress._id)
    const updatedUser:any = await user.save()

  }

  const getUser: any = await User.findById(user._id).select( "-isAdmin -hashedPass").populate('address').select( "-user_id")
  
  
     console.log("updatedUser", getUser.address[0]);
     
  return getUser

}

export default updateOrPostAddress;