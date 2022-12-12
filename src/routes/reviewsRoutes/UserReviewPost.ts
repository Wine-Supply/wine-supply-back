import { Router } from "express";
import checkUserReviews from "../../controllers/ReviewsControllers/CheckUserReviews";
import postReview from "../../controllers/ReviewsControllers/PostReview";
import updateRatings from "../../controllers/ReviewsControllers/Updaterating";

const router = Router()


router.post("/", async (req, res) => {
  const { user_id, wine_id, username, comment, rating } = req.body

  const review = await checkUserReviews(user_id, wine_id);

  console.log(review.length)
  if (review.length > 0) {
    return res.status(400).json({message: "You already have a review for this wine"})
  }

  const validate = user_id && wine_id && username && comment && rating ? true : false;

  if (!validate) return res.status(400).json({message: `Missing data!`});

  try {
    const newReview = await postReview(user_id, wine_id, username, comment, rating) || null;
    
    const update = await updateRatings(wine_id) || null;

    if(!newReview || !update) res.status(400).json({message: `Somenthing went wrong, review not posted!`});

    else{
			res.status(200).json({message: `Review posted successfully!`});
		}

  } catch (error: any) {
    res.status(400).json(error.message);
  }
})

export default router;