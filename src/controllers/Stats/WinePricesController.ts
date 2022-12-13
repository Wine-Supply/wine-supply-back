import WineModel from "../../models/Wine";

export const pricesRatio = async() => {

  const data = await WineModel.aggregate( [
    { $group: {
      _id: null,
      maxPrice: {$max: "$price"},
      avgPrice: {$avg: "$price"},
      minPrice: {$min: "$price"},
    } }
  ]);

  return data;
};


//* vinos por PRECIOS
export const getPrices = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$price", count: {$count:{}} }}
  ]);
  return data;
};
