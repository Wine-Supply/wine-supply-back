import MembershipModel from "../../models/Membeship";
import UserModel from "../../models/User"

const postMembership = async (user: any, data:any) => {
  let amount = 40;
  if(data.reason === "Regular"){ amount = 40};
  if(data.reason === "Premium"){ amount = 60};
  if(data.reason === "Sommelier"){ amount = 80};

  const newMembership:any = new MembershipModel({
    name: data.data?.reason,
    price: data.data?.auto_recurring?.transaction_amount,
    user_id: user,
    isActive: true
  })

  const createdMembership = await newMembership.save();

  // const getUser:any = await UserModel.findById(user);
  // getUser?.membership_id.concat(newMembership._id);

  return createdMembership;

};

export default postMembership;