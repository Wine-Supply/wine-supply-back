import getWineReviews from "./GetWineReviews";
import Wine from "../../models/Wine";



const updateRatings = async(id: string)=> {
  
  try {
    const review = await getWineReviews(id);

    const ratingsReviews = review.map(e => e.rating )

    const init = 0
    let NewRating = Math.round(ratingsReviews.reduce((e, total) => total + e,  init) / ratingsReviews.length)
    
    const updateWine = await Wine.findByIdAndUpdate(id, {rating: NewRating});
    return updateWine
  }
  catch (error: any) {
    throw new Error( error );
  }

};
export default updateRatings;