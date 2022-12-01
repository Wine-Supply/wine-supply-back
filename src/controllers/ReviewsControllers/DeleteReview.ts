import ReviewModel from "../../models/Review";

const deleteReview = async (userid: string, wineid: string) => {
    try {
        const review = await ReviewModel.findOneAndUpdate({ user_id: userid, wine_id: wineid, isActive: false });
        return review;
    }
    catch (error: any) {
        throw new Error(error);
    }
}


export default deleteReview;