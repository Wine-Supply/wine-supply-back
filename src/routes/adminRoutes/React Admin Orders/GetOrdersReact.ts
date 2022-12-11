import { Router } from "express";
import ShoppingOrder from "../../../models/ShoppingOrder";


const router = Router()

//* /admin/orders


router.get("/", async (req, res) => {

  try {
    const order:any = await ShoppingOrder.find().sort({_id: -1}).lean();

    if (order.length === 0) {res.status(404).send("No orders found")};

    // console.log("order", order);

    const parsedOrder = order.map((e:any) => {
      return {
        id: e._id,
        user: e.user,
        order_address: e.order_address,
        items: e.items,
        orderDate: e.orderDate,
        payment: e.payment,
        shippingMethod: e.shippingMethod,
        orderTotal: e.orderTotal,
        orderStatus: e.orderStatus
      }
  });
  
  //  console.log("parsedOrder", parsedOrder);

    let total = parsedOrder.length
    res.header({'content-Range':  `parsedOrder 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'});
    return res.status(200).send(parsedOrder);
  } 
  catch (error: any) {
    return res.status(404).send("Can't get orders!");
  }

});

export default router;