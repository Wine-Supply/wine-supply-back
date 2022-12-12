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
    { $group: {_id:"$strain", count: {$count:{}}} }
  ]);


  // for (const value of data) {
  //   value.toLowerCase()
  // }
  // const lowerCaseData:any = data.forEach( (el:any) => el.toLowerCase())
  
  // const setData = [...new Set(lowerCaseData)]

  return data;
};

//* por ZONA
export const getZones = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$zone", count: {$count:{}}} }
  ]);

  return data;
};

//* por ORIGEN
export const getOrigin = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$origin", count: {$count:{}}} }
  ]);

  return data;
};

//* por tipo de VINO
export const getType = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$type", count: {$count:{}}} }
  ]);
 
  return data;
};

//* por MARCA
export const getBrand = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$brand", count: {$count:{}}} }
  ]);

  return data;
};

//* por NOMBRE
export const getName = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$name", count: {$count:{}} }}
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