import {usersPerMonth, ordersPerMonth} from '../../../controllers/Stats/StatsPerMonthController'
const router = require("express").Router();

// total number of registered Users Per Month

//* /admin/stats/permonth

// por query envian el model en el que se va a buscar la data.
// no pongo el nombre exacto del model por query por seguridad
// ejemplo: /admin/stats/permonth?model=user
// user = UserModel
// order = ShoppingOrder
// wine = WineModel
// review = ReviewModel
// membership = MembershipModel

// devuelve:
// _id --> es el mes
// total --> cantidad de users por ejemplo

router.get("/", async (req:any, res:any) => {

  const {model} = req.query
  let data = [];

  try {

    if (model === "user") { data = await usersPerMonth()};
    if (model === "order") { data = await ordersPerMonth()};    

    res.status(200).send(data)
    
  } catch (error:any) {
    res.send(error.message)
  }

})


export default router;