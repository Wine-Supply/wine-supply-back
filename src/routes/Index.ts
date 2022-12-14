import { Router } from "express";

import AllWines from './winesRoutes/AllWines';
import WineId from './winesRoutes/WineId';
import WinesFilters from './winesRoutes/WinesFilters';
import RecommendedWines from './winesRoutes/RecommendedWines';
import SearchBar from './winesRoutes/SearchBar'
import Categories from './winesRoutes/Categories'
import SignUp from './authRoutes/SignupRoute'
import Login from './authRoutes/LoginRoute'
import GetUser from './authRoutes/GetUser'
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
/* ↓ admin ↓  */
import PostWine from './adminRoutes/PostWine.js';
import UpdateWine from './adminRoutes/UpdateWine';
import GetUsersReact from "./adminRoutes/UsersAdminRoutes/ReactAdminGetAllUsersJS";
import UpdateAdmin from './adminRoutes/UsersAdminRoutes/UpdateAdmin';
import UpdateIsActive from './adminRoutes/UsersAdminRoutes/UpadteIsActive';
import StatsPerMonth from './adminRoutes/Stats Routes/StatsPerMonth';
import StatsPerWeek from './adminRoutes/Stats Routes/StatsPerWeek';
import GetWinesAdmin from './adminRoutes/WinesReactAdmin/GetWinesAdminJS'
import DeleteWineAdmin from './adminRoutes/WinesReactAdmin/DeleteWineAdmin';
import GetReviewsReact from './adminRoutes/React Admin Reviews/GetReviewsReact';
import GetOrdersReact from './adminRoutes/React Admin Orders/GetOrdersReact';
import AdminUpdateOrderStatus from './adminRoutes/React Admin Orders/AdminUpdateOrderStatus';
import EditWineAdmin from './adminRoutes/WinesReactAdmin/EditWineAdmin'
import GetOneAdmin from './adminRoutes/WinesReactAdmin/GetOneAdmin'
import PostWineAdmin from './adminRoutes/WinesReactAdmin/PostWineAdmin'
import GetUserAdmin from './adminRoutes/UsersAdminRoutes/GetUserAdmin'
import EditUserAdmin from './adminRoutes/UsersAdminRoutes/EditUserAdmin';
import GetLastUsers from './adminRoutes/UsersAdminRoutes/GetAllUsers'

import WinePrices from './adminRoutes/Stats Routes/WinePrices';
import WineFields from './adminRoutes/Stats Routes/WineFields';

/* ↓ mails ↓  */
import NewsLetter from './mailRoutes/NewsLetter'
import ContacUsMail from './mailRoutes/ContactUsMail'

/* ↓ membership ↓  */
import MembershipOrderCreate from './MembershipRoutes/MembershipOrderRoute';
import UserMembership from './MembershipRoutes/UserMembership';
import UpdateMembership from './MembershipRoutes/UpdateMembership';
import GetMembership from './MembershipRoutes/GetMembership';


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
router.use('/admin/users', AdminStatus, GetUsersReact); // GET
router.use('/admin/users', AdminStatus, GetUserAdmin); // GET ONE
router.use('/admin/users', AdminStatus, EditUserAdmin); // PUT
router.use('/admin/users/isAdmin', AdminStatus, UpdateAdmin);
router.use('/admin/users/isActive', AdminStatus, UpdateIsActive);
router.use('/admin/newusers', AdminStatus, GetLastUsers);
router.use('/admin/reviews', AdminStatus, GetReviewsReact);
router.use('/admin/orders', AdminStatus, GetOrdersReact);
router.use('/admin/orders', AdminStatus, AdminUpdateOrderStatus);

router.use('/admin/stats/permonth', AdminStatus, StatsPerMonth);
router.use('/admin/stats/perweek', AdminStatus, StatsPerWeek);
router.use('/admin/stats/wines/prices', AdminStatus, WinePrices);
router.use('/admin/stats/wines/fields', AdminStatus, WineFields);

router.use('/admin/wines', AdminStatus, GetWinesAdmin); //GET
router.use('/admin/wines/', AdminStatus, GetOneAdmin); //GET ONE
router.use('/admin/wines', AdminStatus, DeleteWineAdmin); //DELETE
router.use('/admin/wines', AdminStatus, EditWineAdmin ); //PUT
router.use('/admin/wines', AdminStatus, PostWineAdmin ); //POST


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

//mail services
router.use('/newsletter', NewsLetter );
router.use('/contacusmail', ContacUsMail);


// membership
router.use('/membershipcreateorder', MembershipOrderCreate);
router.use('/membership', VerifyUserToken, UpdateMembership);
router.use('/membership', VerifyUserToken, GetMembership);
router.use('/user/membership', VerifyUserToken, UserMembership);



export default router;