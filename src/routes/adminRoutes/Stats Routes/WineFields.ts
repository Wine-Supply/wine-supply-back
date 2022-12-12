import {getStrains, getZones, getOrigin, getName, getBrand, getType, getCropYear, countWines}  from '../../../controllers/Stats/WineStats/WineFields'
const router = require("express").Router();

// total number of registered Users Per Month

//* /admin/stats/wines/fields


router.get("/", async (req:any, res:any) => {

  try {

    let data = []

    if (req.query.name) { data = await getName() };
    if (req.query.brand) { data = await getBrand() };
    if (req.query.type) { data = await getType() };
    if (req.query.strain) { data = await getStrains() };
    if (req.query.origin) { data = await getOrigin() };
    if (req.query.zone) { data = await getZones() };
    if (req.query.year) { data = await getCropYear() };
    if (req.query.count) { data = await countWines() };

    if(data.length === 0) { return res.status(404).send("no data matched")}
    res.status(200).send( data );
    
  } catch (error:any) {
    res.send(error.message)
  }

})


export default router;