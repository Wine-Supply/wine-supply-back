import ReviewModel from "../models/Review";




const getUserReviews = async (id: string) => {
  console.log(typeof id)

  try {
    const review = await ReviewModel.find({ user_id: id });
    return review;
  }
  catch (error: any) {
    throw new Error(error);
  }
};
export default getUserReviews;

//{type: mongoose.Schema.Types.ObjectId, ref: "User"}