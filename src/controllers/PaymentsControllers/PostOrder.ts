import ShoppingOrder from "../../models/ShoppingOrder"

const postOrder = async () => {
    const newOrder = new ShoppingOrder(

    )
    const createdOrder = await newOrder.save()
}

export default postOrder;