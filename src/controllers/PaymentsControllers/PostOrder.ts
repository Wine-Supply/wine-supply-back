import ShoppingOrder from "../../models/ShoppingOrder"
import User from "../../models/User"
import resetCart from "./ResetCart"
import mongoose from "mongoose"

const postOrder = async (response: any, data: any) => {
    const {name, lastName, user_id, country, state_name, city_name, zip_code, street_name, street_number, floor, apartment} = response
    const newOrder = new ShoppingOrder({
        user_id,
        user: `${lastName}, ${name}`,
        order_address: `${country}, ${state_name}, ${city_name} (${zip_code}), ${street_name} ${street_number}, floor: ${floor}, apartment: ${apartment}` ,
        items: data.body.items,
        orderDate: Date.now(),
        payment: "Mercado Pago",
        shippingMethod: 'Correo',
        orderTotal:data.body.total_amount,
        orderStatus: 1 //mercadopago devuelve un string

}
)

const createdOrder = await newOrder.save()
try {
    const order_user = await User.findOneAndUpdate(
        { _id: user_id },
        { $push: { order: createdOrder._id  } },
    )
    const updatedUser = order_user?.save()

} catch(err) {
    console.log(err)
}
    if (data.body.items[0].description === "cart") {
        resetCart(user_id)
    } 
    
}

export default postOrder;