import User from "../models/User"

const updateUser = async (user:any, body:any) => {

  const {isMember} = body.membership_id[0]
  if( isMember ) {

   user.membership_id[0].isMember = true 

   const updatedUser = await user.save()

   return updatedUser

  }

  for (const property in body) {
    user[property]= body[property]
  }

  const updatedUser = await user.save()

  return updatedUser

};


export default updateUser;