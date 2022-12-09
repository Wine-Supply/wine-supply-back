import Review from "../../models/Review";

const postReview = async (user_id: string, wine_id: string, username: string, comment: string, rating: number) => {

    const newReview = new Review(
        {
            user_id,
            wine_id,
            username,
            comment,
            rating
        })

    const createdReview = await newReview.save()
    return createdReview;
}

export default postReview;