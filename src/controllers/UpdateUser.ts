import User from "../models/User"

// NO TRABAJADO TODAVIA, por ver

const updatedUser = async (user:any, body:any) => {

  const updatedUser = user
  //  console.log(body);
  
  if(body.membership_id) {
    const {isMember} = body.membership_id[0]
  
    // console.log(body.membership_id[0]);

  for (const property in body) {
    user[property]= body[property]
  }

  await updatedUser.save()


  return updatedUser;

}
}

export default updatedUser