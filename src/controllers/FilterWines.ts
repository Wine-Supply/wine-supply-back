//

const checkEmptyQuery = (querys: {})=> {

  if (Object.keys(querys).length === 0) { throw new Error("Please select a filter option") }

  return true;

}

export default checkEmptyQuery;
