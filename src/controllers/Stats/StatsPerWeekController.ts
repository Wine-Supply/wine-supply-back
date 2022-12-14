import UserModel from "../../models/User";
import ShoppingOrder from "../../models/ShoppingOrder";


export const usersPerWeek = async() => {

  const date = new Date();
  const lastMonth= new Date(date.setMonth(date.getMonth()-1))

  const data = await UserModel.aggregate( [
    { $match: { createdAt: {$gte: lastMonth } } },
    {
      $project: {
        week: { $week: "$createdAt" }
      }
    },
    {
      $group: {
        _id: "$week",
        total: { $sum: 1}
      }
    }
  ]);
  console.log(data[0]._id)
  return data
};


export const ordersPerWeek = async() => {

  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth()-1))

  const data = await ShoppingOrder.aggregate( [
    { $match: { createdAt: {$gte: lastMonth } } },
    {
      $project: {
        week: { $week: "$createdAt" }
      }
    },
    {
      $group: {
        _id: "$week",
        total: { $sum: 1}
      }
    }
  ]);

  return data
};

