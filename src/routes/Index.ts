import { Router } from "express";

import AllWines from './winesRoutes/AllWines';
import WineId from './winesRoutes/WineId';
import WinesFilters from './winesRoutes/WinesFilters';
import RecommendedWines from './winesRoutes/RecommendedWines';
import PostWine from './adminRoutes/PostWine'

 
 const router = Router()
 

router.use('/wines', AllWines);
router.use('/wines/filters', WinesFilters);
router.use('/wines/recomendados', RecommendedWines);
router.use('/admin/post', PostWine);
router.use('/wine/:id', WineId);


export default router;