import Address from "../../models/Adress";

const checkAddress = async (address) => {

    const 
    const filters = {
        $and: [
            { country: { country, $options: 'i' } },
            { brand: regexBrandInsensitive },
            { cropYear },
            { volume },
        ]
    }
    const address = await Address.find(filters);
    return address;
}

const updateOrPostAddress = async(user: any, address: any, isSelected: Boolean)=>{

// address es {} con todos los fields requeridos

// ver si existe
  const existingAddress = checkAddress(address)
// si existe: 
  // agregar ese address id al user (si es selected, es en posicion [0])
  // agregar ese user_id al address


// si no existe:
  // crear Address (incluir user_id)
  // agregar ese address al user_id (si es selected, es en posicion [0])




}

export default updateOrPostAddress;