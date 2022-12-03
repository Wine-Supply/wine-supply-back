import MembershipModel from "../../models/Membeship";
import User from "../../models/User"

const postMembership = async (response: any, data: any) => {

  const {name, user_id} = response

  const newMembership:any = new MembershipModel({
    name,
    price: data.body.items.price,
    user_id,
    isActive: true
  })

  await newMembership.save();

  const user:any = await User.findById(user_id);
  user?.membership_id.concat(newMembership._id);

  return newMembership;

};

export default postMembership;