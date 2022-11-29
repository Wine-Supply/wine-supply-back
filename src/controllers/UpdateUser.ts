import User from "../models/User"

const updateUser = async (user:any, body:any) => {

  const updatedUser = user
  // console.log(body);

  const {isMember} = body.membership_id[0]
  
  // console.log(body.membership_id[0]);
  
  if(Object.keys(body.membership_id).length) {

    if(user.membership_id.length === 0){

   user.membership_id.push({isMember: true})
   }
   user.membership_id[0].isMember = isMember

   const updatedUser = await user.save()

   return updatedUser

  }

  for (const property in body) {
    user[property]= body[property]
  }


  return updatedUser;

};


export default updateUser;