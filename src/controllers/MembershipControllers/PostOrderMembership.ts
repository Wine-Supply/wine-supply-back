import { Model } from "mongoose"
import ShoppingOrder from "../../models/ShoppingOrder"
import User from "../../models/User"
import confirmPayment from "../Mails/ConfirmPayment"

const postOrderMembership = async (response: any, data: any) => {
    try {
        const { user_id } = response // req.query
        const order_user: any = await User.findById(user_id)
        const address = "userAdress"
        // let address;
        // for (const ind_address of order_user?.address) {
        //     if (ind_address.isDefault === true) {
        //         address = ind_address
        //     }
        // }
        // const { country, stateName, cityName, postalCode, streetName, streetNumber, floor, apartment } = address
        const newOrder = new ShoppingOrder({
            user_id,
            user: `${order_user.lastName}, ${order_user.name}`,
            // order_address: `${country}, ${stateName}, ${cityName} (${postalCode}), ${streetName} ${streetNumber}, floor: ${floor}, apartment: ${apartment}`,
            order_address: `adress`,
            items: data.reason,
            orderDate: Date.now(),
            payment: "Mercado Pago",
            shippingMethod: 'Correo',
            orderTotal: data.auto_recurring.transaction_amount,
            orderStatus: 1 //mercadopago devuelve un string
        })
        // const mail = await confirmPayment( "Wine purchase", address, order_user, data.body.total_amount);
        // const mail = await confirmPayment( "Membership subscription", address, order_user, data.body.transaction_amount);

       
        const createdOrder = await newOrder.save()

        // AGREGAR NUEVA ORDEN A user.order
        order_user.order.push(createdOrder._id)
        order_user.save()
    } catch (error: any) {
        throw new Error(error)
    }
}

export default postOrderMembership;