import getMaxPrice from '../../../controllers/Stats/WinePrices'
const router = require("express").Router();

// total number of registered Users Per Month

//* /admin/stats


router.get("/", async (req:any, res:any) => {



  try {

   const data = await getMaxPrice();
   

    res.status(200).send(data)
    
  } catch (error:any) {
    res.send(error.message)
  }

})


export default router;