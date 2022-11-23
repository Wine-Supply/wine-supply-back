import Wine from "../models/Wine";

const checkEmptyQuery = (querys: {})=> {

  if (Object.keys(querys).length === 0) { throw new Error("Please select a filter option") }

  return true;

}

export default checkEmptyQuery;


const filterWines = async (querys: {}) => {
 
   if (Object.keys(querys).length === 0) {
    const filteredWines = await Wine.find();      
    // console.log("filteredWines:", filteredWines);
    return filteredWines;
  }
  
};