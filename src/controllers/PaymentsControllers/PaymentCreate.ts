import Wine from '../../models/Wine'
import User from '../../models/User'


const PaymentCreate = async (data: any) => {
  const items: Array<object> = [];
  if (typeof data === 'string') {
    try {
      const wine  = await Wine.findById(data)
      if (wine && wine.stock>0) {
        items.push( {
          id: wine._id,
          title: wine.name,
          unit_price: wine.price,
          // picture_url: wine.images[0],
          quantity: 1,
          currency_id: "ARS"
        })
        return items
      }
      if (wine && wine.stock<=0) return console.log('No stock!')
      } catch (error: any) {
      console.log(error)
      throw new Error(error)
  }
}
if (data) {
  try {
    data.forEach((e:any) => {
      items.push({
        id:e._id,
        title: e.name,
        description: "cart",
        unit_price: e.price,
        // picture_url: e.images[0],
        quantity: e.cuantity,
        currency_id: "ARS"
      })
    })
    return items
  } catch (error:any) {
    console.log(error)
    throw new Error(error)
  }
}
}
export default PaymentCreate;