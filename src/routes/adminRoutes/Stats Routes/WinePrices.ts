import {pricesRatio, getPrices}  from '../../../controllers/Stats/WineStats/WinePrices'
const router = require("express").Router();

// total number of registered Users Per Month

//* /admin/stats/wines/prices
// si manda por query ?rates=true  trae ratio de precios
// si no, trae todos los precios y cantidad de vinos por cada uno. Tal vez puedo hacer por rangos de precios


router.get("/", async (req:any, res:any) => {

  try {

   const pricesRates:any = await pricesRatio();
   const prices:any = await getPrices();

    if(req.query.rates) {return res.status(200).send( pricesRates );}
    
    res.status(200).send( prices );
    
  } catch (error:any) {
    res.send(error.message)
  }

})


export default router;