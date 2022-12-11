import { Router } from "express";
import ReviewModel from "../../../models/Review";


const router = Router()

//* /admin/reviews


router.get("/", async (req, res) => {

  try {
    const reviews:any = await ReviewModel.find().sort({_id: -1}).lean();

    if (reviews.length === 0) {res.status(404).send("No orders found")};

    console.log("reviews", reviews);

    const parsedReviews = reviews.map((e:any) => {
      return {
          id: e._id,
          date: e.date,
          comment: e.comment,
          rating: e.rating,
          username: e.username,
          user_id: e.user_id,
          wine_id: e.user_id,
          isActive: e.user_id,
      }
  });
  

   console.log("parsedReviews", parsedReviews);

    let total = parsedReviews.length
    res.header({'content-Range':  `parsedReviews 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
    return res.status(200).send(parsedReviews);
  } 
  catch (error: any) {
    return res.status(404).send("Can't get reviews!")
  }

});


export default router;