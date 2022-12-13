import MembershipModel from "../../models/Membeship";
import User from "../../models/User"

const postMembership = async (response: any, user:any) => {

  const {name, price} = response

  const newMembership:any = new MembershipModel({
    name,
    price,
    user_id: user._id,
    isActive: true
  })

  await newMembership.save();

  const getUser:any = await User.findById(user._id);
  getUser?.membership_id.concat(newMembership._id);

  return newMembership;

};

export default postMembership;