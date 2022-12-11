import WineModel from "../../models/Wine";

const getAllWinesAdmin = async () => {

  try {
    const wine = await WineModel.find({ });
    const wines = wine.map((e:any) => {
        return {
            id: e._id,
            name: e.name,
            brand: e.brand,
            stock: e.stock,
            price: e.price,
            isActive: e.isActive,
            description: e.description,
            type: e.type,
            body: e.body,
            cropYear: e.cropYear,
            origin: e.origin,
            zone: e.zone,
            volume: e.volume,
            alcoholVolume: e.alcoholVolume,
            rating: e.rating,
            images: e.images[0],
            strain: e.strain,
        }
    })
    return wines;
  }
  catch (error: any) {
    throw new Error( error );
  }

};
export default getAllWinesAdmin;
    