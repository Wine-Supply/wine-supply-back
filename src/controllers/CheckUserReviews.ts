import ReviewModel from "../models/Review";


const checkUserReviews = async (userid: string, wineid: string) => {
    try {
        const review = await ReviewModel.find({ user_id: userid, wine_id: wineid });
        return review;
    }
    catch (error: any) {
        throw new Error(error);
    }
}

export default checkUserReviews;