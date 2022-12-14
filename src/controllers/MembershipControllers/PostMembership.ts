import MembershipModel from "../../models/Membeship";
import User from "../../models/User"

const postMembership = async (user: any, data:any) => {

  const newMembership:any = new MembershipModel({
    name:data.body.reason,
    price: data.body.transaction_amount,
    user_id: user._id,
    isActive: true
  })

  await newMembership.save();

  const getUser:any = await User.findById(user._id);
  getUser?.membership_id.concat(newMembership._id);

  return newMembership;

};

export default postMembership;