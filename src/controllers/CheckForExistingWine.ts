import Wine from "../models/Wine";

const CheckWines = async (name: string, brand: string, cropYear: number, volume: number) => {

    const regexNameInsensitive = { $regex: '.*' + name + '.*', $options: 'i' }
    const regexBrandInsensitive = { $regex: '.*' + brand + '.*', $options: 'i' }
    const filters = {
        $and: [
            { name: regexNameInsensitive },
            { brand: regexBrandInsensitive },
            { cropYear },
            { volume },
        ]
    }
    const wine = await Wine.find(filters);
    return wine;
}

export default CheckWines;