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
            isActive: e.isActive
        }
    })
    return wines;
  }
  catch (error: any) {
    throw new Error( error );
  }

};
export default getAllWinesAdmin;