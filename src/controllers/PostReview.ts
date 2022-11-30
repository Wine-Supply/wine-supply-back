import Review from '../models/Review'

const postReview = async (user_id: string, wine_id: string, comment: string, rating: number) => {

    const newReview = new Review(
        {
            user_id,
            wine_id,
            comment,
            rating
        })

    const createdReview = await newReview.save()
    return createdReview;
}

export default postReview;