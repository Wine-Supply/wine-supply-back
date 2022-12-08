import WineModel from "../../models/Wine";

 const getStrains = async() => {

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

export default getStrains;