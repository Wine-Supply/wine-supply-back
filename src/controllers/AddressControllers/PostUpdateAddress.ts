import Address from "../../models/Adress";
import User from "../../models/User"

// RUTAS CON ERRORES, REVISAR

const checkAddress = async (country:string, region:string, city:string, postalCode:string, addressLine1:string, addressLine2:string, addressNumber:string, floor:Number, flatNumber:Number) => {

    const filters = {
        $and: [
            { country: { country, $options: 'i' } },
            { region: { region, $options: 'i' } },
            { city: { city, $options: 'i' } },
            { postalCode: { postalCode, $options: 'i' } },
            { addressLine1: { addressLine1, $options: 'i' } },
            { addressLine2: { addressLine2, $options: 'i' } },
            { addressNumber: { addressNumber, $options: 'i' } },
            { floor: { floor, $options: 'i' } },
            { flatNumber: { flatNumber, $options: 'i' } },
        ]
    }
    const newAddress = await Address.find(filters).exec();

    return newAddress;
}


// -------------------UPDATE & POST ADDRESS

const updateOrPostAddress = async(user: any, address: any, isSelected: Boolean)=>{

// address es OBJETO con todos los fields requeridos
const {country, region, city, postalCode, addressLine1, addressLine2, addressNumber, floor, flatNumber} = address

if ( user.address.length >= 3 ) throw new Error("can't keep more than 3 addresses, please remove one");

// ver si existe
  const existingAddress:any = checkAddress(country, region, city, postalCode, addressLine1, addressLine2, addressNumber, floor, flatNumber)
  console.log("existingAddress", existingAddress);
  
  if(existingAddress.length > 0) {
    // si existe: 
    // agregar ese address id al user (si es selected, es en posicion [0])
    isSelected ? user.address.unshift(existingAddress._id) : user.address.concat(existingAddress._id)
    await user.save()
    // agregar ese user_id al address
    existingAddress.user_id = existingAddress.user_id.concat(user._id)
    await existingAddress.save()

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
      user_id: address.user_id.concat(user._id)})

    await newAddress.save()
    // agregar ese address al user_id (si es selected, es en posicion [0])
    isSelected ? user.address.unshift(newAddress._id) : user.address.concat(newAddress._id)
    await user.save()

  }

  const updatedUser = await User.findById(user._id).populate('address', {user_id: -1})

  return updatedUser

}

export default updateOrPostAddress;