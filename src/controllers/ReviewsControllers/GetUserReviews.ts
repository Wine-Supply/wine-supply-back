import ReviewModel from "../../models/Review";



const getUserReviews = async (id: string) => {

  try {
    const review = await ReviewModel.find({ user_id: id, isActive: true });
    return review;
  }
  catch (error: any) {
    throw new Error(error);
  }

};
export default getUserReviews;