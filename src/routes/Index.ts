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
import VerifyUserToken from './authRoutes/VerifyUserToken'
import GetUser from './authRoutes/GetUser'

const router = Router()


router.use('/wines', AllWines);
router.use('/wines/filters', WinesFilters);
router.use('/wines/search', SearchBar);
router.use('/wines/categories', Categories);
router.use('/wines/recomendados', RecommendedWines);

router.use('/wine/', WineId);

//admin
router.use('/admin/post', PostWine);

//auth
router.use('/login/', Login)
router.use('/signup/', SignUp)
router.use('/getuser', VerifyUserToken, GetUser) /*<------ ejemplo de ruta verificada por middleware*/


export default router;