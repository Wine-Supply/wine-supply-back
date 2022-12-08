import WineModel from "../../models/Wine";

 const getMaxPrice = async() => {

  const data = await WineModel.aggregate( [
    { $group: {
      _id:"$name",
      maxPrice: {$max: "$price"},
    } }
  ]);


  // for (const value of data) {
  //   value.toLowerCase()
  // }
  // const lowerCaseData:any = data.forEach( (el:any) => el.toLowerCase())
  
  // const setData = [...new Set(lowerCaseData)]

  return data;
};

export default getMaxPrice