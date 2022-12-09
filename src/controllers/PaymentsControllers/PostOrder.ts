import { Model } from "mongoose"
import ShoppingOrder from "../../models/ShoppingOrder"
import User from "../../models/User"
import resetCart from "./ResetCart"

const postOrder = async (response: any, data: any) => {
    try {
        const { user_id } = response
        const order_user: any = await User.findById(user_id)
        let address;
        for (const ind_address of order_user?.address) {
            if (ind_address.isDefault === true) {
                address = ind_address
            }
        }
        const { country, stateName, cityName, postalCode, streetName, streetNumber, floor, apartment } = address
        const newOrder = new ShoppingOrder({
            user_id,
            user: `${order_user.lastName}, ${order_user.name}`,
            order_address: `${country}, ${stateName}, ${cityName} (${postalCode}), ${streetName} ${streetNumber}, floor: ${floor}, apartment: ${apartment}`,
            items: data.body.items,
            orderDate: Date.now(),
            payment: "Mercado Pago",
            shippingMethod: 'Correo',
            orderTotal: data.body.total_amount,
            orderStatus: 1 //mercadopago devuelve un string

        })
        const createdOrder = await newOrder.save()
        order_user.order.push(createdOrder._id)
        order_user.save()
    } catch (error: any) {
        throw new Error(error)
    }
}

export default postOrder;