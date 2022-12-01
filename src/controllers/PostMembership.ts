/* import User from "../models/User"

// NO TRABAJADO TODAVIA, por ver

const postMembership = async (user:any, body:any) => {

  const updatedUser = user
  //  console.log(body);
  
  if(body.membership_id) {
    const {isMember} = body.membership_id[0]
  
    // console.log(body.membership_id[0]);

    if(user.membership_id.length === 0){

   user.membership_id.push({isMember: true})
   }
   user.membership_id[0].isMember = isMember

   await user.save()

   return updatedUser

  }

  for (const property in body) {
    user[property]= body[property]
  }

  await updatedUser.save()


  return updatedUser;

}; */