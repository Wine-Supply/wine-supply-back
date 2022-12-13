import { Router } from "express"
import ShoppingOrder from "../../../models/ShoppingOrder"
const router = Router()

//* /admin/orders/:id/:status

// se envia por params el id de la orden, y el status en que debe quedar.

// status: o = canceled, 1 = ordered
// ejemplo: /admin/orders/638d1c740cc2b2db18188819/0

router.put("/:id/:status", async(req: any, res) => {

  try {

    const {id, status} = req.params;
    if(!id || !status ) { 
      return res.status(400).send("Missing data")
    };

  const parsedStatus = +status;
  console.log(typeof parsedStatus);
  

  const order:any = await ShoppingOrder.findByIdAndUpdate( id, {orderStatus: parsedStatus} );
    //console.log("order", order);
  if( !order || order.length === 0) { 
    return res.status(404).send("No matches found for this id") 
  };

    return res.status(200).send("orderStatus updated");
      
    } catch (error:any) {
        return res.status(500).send(error.message);
    }
})


export default router;