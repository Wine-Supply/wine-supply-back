import { Router } from "express";

import AllWines from './winesRoutes/AllWines';
import WineId from './winesRoutes/WineId';
import WinesFilters from './winesRoutes/WinesFilters';
import RecommendedWines from './winesRoutes/RecommendedWines';
import PostWine from './adminRoutes/PostWine.js'
import SearchBar from './winesRoutes/SearchBar'
import Categories from './winesRoutes/Categories'
import ShoppingCart from './winesRoutes/ShoppingCart'
const router = Router()


router.use('/wines', AllWines);
router.use('/wines/filters', WinesFilters);
router.use('/wines/search', SearchBar);
router.use('/wines/categories', Categories);
router.use('/wines/recomendados', RecommendedWines);
router.use("wines/cart" , ShoppingCart)
router.use('/wine/', WineId);

router.use('/admin/post', PostWine);

export default router;