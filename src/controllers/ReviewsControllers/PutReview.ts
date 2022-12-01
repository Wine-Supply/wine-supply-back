import Review from '../../models/Review'

const putReview = async (_id: string,  newComment: string, newRating: number) => {

    const updateReview =  Review.findByIdAndUpdate(_id, {comment: newComment,  rating: newRating})

    return updateReview;
}

export default putReview;