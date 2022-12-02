
const updatedUser = async (user:any, body:any) => {

  const updatedUser = user
  //  console.log(body);

  const validate = body.name || body.lastName || body.userName || body.email || body.date_of_birth || body.phone || body.avatar || body.isActive || body.image ? true : false

  if (!validate) throw new Error("no valid field for update")
  
  for (const property in body) {
    user[property]= body[property]
  }

  await updatedUser.save()

  return updatedUser;

}

export default updatedUser