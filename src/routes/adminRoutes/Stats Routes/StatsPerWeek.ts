import {usersPerWeek, ordersPerWeek} from '../../../controllers/Stats/StatsPerWeekController'
const router = require("express").Router();

// total number of registered Users Per Month

//* /admin/stats/perweek

// por query envian el model en el que se va a buscar la data. (deben venir escritos igual que el model)
// ejemplo: /admin/stats/permonth?model=UserModel

// devuelve:
// _id --> es el mes
// total --> cantidad de users por ejemplo

router.get("/", async (req:any, res:any) => {

  const {model} = req.query
  let data = [];

  try {

    if (model === "UserModel") { data = await usersPerWeek()};
    if (model === "ShoppingOrder") { data = await ordersPerWeek()};    

    res.status(200).send(data)
    
  } catch (error:any) {
    res.send(error.message)
  }

})


export default router;