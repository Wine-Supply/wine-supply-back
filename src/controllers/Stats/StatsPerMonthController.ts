import UserModel from "../../models/User";
import ShoppingOrder from "../../models/ShoppingOrder";

const date = new Date();
const lastYear = new Date(date.setFullYear(date.getFullYear()-1))


export const usersPerMonth = async() => {

  const data = await UserModel.aggregate( [
    { $match: { createdAt: {$gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" }
      }
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1}
      }
    }
  ]);

  return data
};


export const ordersPerMonth = async() => {

  const data = await ShoppingOrder.aggregate( [
    { $match: { createdAt: {$gte: lastYear } } },
    {
      $project: {
        month: { $month: "$createdAt" }
      }
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: 1}
      }
    }
  ]);

  return data
};

