import UserModel from "../../models/User";
import ShoppingOrder from "../../models/ShoppingOrder";
import WineModel from "../../models/Wine";
import ReviewModel from "../../models/Review";

const date = new Date();
const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
const lastMonth = new Date(date.setMonth(date.getMonth()-1));
const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));


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

export const incomePerMonth = async() => {

  const data = await ShoppingOrder.aggregate( [
    { $match: { createdAt: {$gte: previousMonth } } },
    {
      $project: {
        month: { $month: "$createdAt" },
        sales: "$orderTotal",
      }
    },
    {
      $group: {
        _id: "$month",
        total: { $sum: "$sales"}
      }
    }
  ]);

  return data
};

export const reviewsPerMonth = async() => {

  const data = await ReviewModel.aggregate( [
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

export const winesPerMonth = async() => {

  const data = await WineModel.aggregate( [
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

