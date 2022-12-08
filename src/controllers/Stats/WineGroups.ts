import WineModel from "../../models/Wine";

 export const getStrains = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$strain"} }
  ]);


  // for (const value of data) {
  //   value.toLowerCase()
  // }
  // const lowerCaseData:any = data.forEach( (el:any) => el.toLowerCase())
  
  // const setData = [...new Set(lowerCaseData)]

  return data;
};

export const getZones = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$zone"} }
  ]);

  return data;
};
export const getOrigin = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$origin"} }
  ]);

  return data;
};
export const getType = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$type"} }
  ]);
 
  return data;
};
export const getBrand = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$brand"} }
  ]);

  return data;
};
export const getName = async() => {

  const data = await WineModel.aggregate( [
    { $group: {_id:"$name"} }
  ]);
  return data;
};
