const router = require("express").Router()
import User from "../../models/User"

//* /address/delete

router.delete("/:addressNum", async(req: any, res: any) => {

  try {
    const user = req.user;
    // console.log("user", user);
    const {addressNum} = req.params

    if(!user.isActive) throw new Error("inactive user, do you want to recover it?");
    if (!user) { return res.status(404).send("User not found!") };

  // mandan por query el index del address en el array, posicion en el array, del address a eliminar
  const start = user.address.indexOf(user.address.addressNum)

  // user.address = user.address.splice(start, 1)
  if(addressNum === 4) {user.address = []
  const updatedUser= await user.save()

  const getUser: any = await User.findById(updatedUser._id).select( "address")
  
  console.log("updatedUser", getUser.address.length);

  return res.status(200).send(updatedUser)
  }
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router
