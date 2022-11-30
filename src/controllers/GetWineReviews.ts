import ReviewModel from "../models/Review";




const getWineReviews = async(id: string)=> {
  console.log(typeof id)

  try {
    const review = await ReviewModel.find({ wine_id : id, isActive: true });
    return review;
  }
  catch (error: any) {
    throw new Error( error );
  }
};
export default getWineReviews;