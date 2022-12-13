import WineModel from "../../models/Wine";

//* CUENTA TODOS LOS VINOS
  export const countWines = async() => {

    const data = await WineModel.aggregate( [
      { $group: {_id: null, count: {$count:{}}} }
    ]);
    return data;
  };

//* por CEPA
 export const getStrains = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$strain"}, count: {$count:{}}} }
  ]);

  return data;
};

//* por ZONA
export const getZones = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$zone"}, count: {$count:{}}} }
  ]);

  return data;
};

//* por ORIGEN
export const getOrigin = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$origin"}, count: {$count:{}}} }
  ]);

  return data;
};

//* por tipo de VINO
export const getType = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$type"}, count: {$count:{}}} }
  ]);
 
  return data;
};

//* por MARCA
export const getBrand = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$brand"}, count: {$count:{}}} }
  ]);

  return data;
};

//* por NOMBRE
export const getName = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:{$toLower:"$name"}, count: {$count:{}} }}
  ]);
  return data;
};

//* por AÑO de COSECHA
export const getCropYear = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$cropYear", count: {$count:{}} }}
  ]);
  return data;
};