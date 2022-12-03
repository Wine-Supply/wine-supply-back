import ShoppingOrder from "../../models/ShoppingOrder"
import User from "../../models/User"
import resetCart from "./ResetCart"

const postOrder = async (response: any, data: any) => {
    const {name, lastName, user_id, country, state_name, city_name, zip_code, street_name, street_number, floor, apartment} = response
    const newOrder = new ShoppingOrder({
        user_id,
        user: `${lastName}, ${name}`,
        order_address: `${country}, ${state_name}, ${city_name} (${zip_code}), ${street_name} ${street_number}, floor: ${floor}, apartment: ${apartment}` ,
        items: data.body.items,
        orderDate: Date.now(),
        payment: data.body.payments,
        shippingMethod: 'introducir en UI',
        orderTotal:data.body.total_amount,
        orderStatus: 1 //mercadopago devuelve un string

}
    // const user = 
    )
    const createdOrder = await newOrder.save()
    if (data.body.items[0].description === "cart") {
        resetCart(user_id)
    } 
    
}

export default postOrder;