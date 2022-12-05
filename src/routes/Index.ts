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
import GetCart from './paymentRoutes/GetCart'
import AddCartItem from './paymentRoutes/AddCartItem'
import DeleteItemCart from './paymentRoutes/DeleteItemCart'
/* ↓ middlewares ↓  */
import VerifyUserToken from './middlewares/VerifyUserToken'
import VerifyUserTokenPayment from './middlewares/VerifyUserTokenPayment'
import AdminStatus from './middlewares/AdminStatus'
/* ↓ payments ↓  */
import Payment from './paymentRoutes/mercadopago/Payment'
import PaymentSubscription from './paymentRoutes/mercadopago/PaymentSubscription'
import ShoppingOrderCreate from "./paymentRoutes/ShoppingOrderRoute";
import GetOrders from './paymentRoutes/GetOrders'
/* ↓ membership ↓  */
import MembershipOrderCreate from './membershipRoutes/MembershipOrderRoute';
import UserMembership from './membershipRoutes/UserMembership';
import UpdateMembership from './membershipRoutes/UpdateMembership';
import GetMembership from './membershipRoutes/GetMembership';

const router = Router()

router.get('/test', (req, res) => 
res.send('prueba')
)

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
router.use('/user/update', VerifyUserToken, UpdateUser);

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

//payments y cart
router.use('/payment', VerifyUserTokenPayment, Payment);
router.use('/paymentsubs', VerifyUserTokenPayment, PaymentSubscription);
router.use('/createorder', ShoppingOrderCreate);
router.use('/getcart', VerifyUserToken, GetCart);
router.use('/addcartitem', VerifyUserToken, AddCartItem);
router.use('/deletecartitem', VerifyUserToken, DeleteItemCart);
router.use('/getorders', VerifyUserToken, GetOrders);

// membership
router.use('/membership', VerifyUserToken,MembershipOrderCreate);
router.use('/membership', VerifyUserToken, UpdateMembership);
router.use('/getmembership', VerifyUserToken, GetMembership);
router.use('/user/membership', VerifyUserToken, UserMembership);

export default router;