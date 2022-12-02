import { Router } from "express";

import AllWines from './winesRoutes/AllWines';
import WineId from './winesRoutes/WineId';
import WinesFilters from './winesRoutes/WinesFilters';
import RecommendedWines from './winesRoutes/RecommendedWines';
import PostWine from './adminRoutes/PostWine.js'
import SearchBar from './winesRoutes/SearchBar'
import Categories from './winesRoutes/Categories'
import SignUp from './authRoutes/SignupRoute'
import Login from './authRoutes/LoginRoute'
import GetUser from './authRoutes/GetUser'
import UpdateWine from './adminRoutes/UpdateWine'
import UpdateUser from './authRoutes/UpdateUserRoute'
import GetAddresses from './authRoutes/AddressRoutes/GetAddresses';
import PostAddress from './authRoutes/AddressRoutes/PostAddress'
import UpdateAddress from './authRoutes/AddressRoutes/UpdateAddress'
import DeleteAddress from './authRoutes/AddressRoutes/DeleteAddress'
import GetUserReviews from './reviewsRoutes/GetUserReviews'
import GetWineReviews from './reviewsRoutes/GetWineReviews'
import UserReviews from './reviewsRoutes/UserReviewPost'
import DeleteReview from './reviewsRoutes/DeleteReviews'
import UpdateReviews from './reviewsRoutes/UpdateReviews'
/* ↓ middlewares ↓  */
import VerifyUserToken from './middlewares/VerifyUserToken'
import AdminStatus from './middlewares/AdminStatus'

const router = Router()


router.use('/wines', AllWines);
router.use('/wines/filters', WinesFilters);
router.use('/wines/search', SearchBar);
router.use('/wines/categories', Categories);
router.use('/wines/recomendados', RecommendedWines);

router.use('/wine/', WineId);

//admin
router.use('/admin/post', PostWine);
router.use('/admin/updatewine', UpdateWine);

//auth
router.use('/login', Login);
router.use('/signup', SignUp);
router.use('/getuser', VerifyUserToken, GetUser); /*<------ ejemplo de ruta verificada por middleware*/
router.use('/user', VerifyUserToken, UpdateUser);


router.use('/address', VerifyUserToken, PostAddress);
router.use('/address', VerifyUserToken, GetAddresses);
router.use('/address', VerifyUserToken, UpdateAddress);
router.use('/address', VerifyUserToken, DeleteAddress);


//reviews
router.use('/getUserReviews', GetUserReviews)
router.use('/getWineReviews', GetWineReviews)
router.use('/postReviews', UserReviews)
router.use('/deleteReview', DeleteReview)
router.use('/updateReviews', UpdateReviews)


export default router;