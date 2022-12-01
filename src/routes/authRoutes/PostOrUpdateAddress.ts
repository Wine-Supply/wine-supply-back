const router = require("express").Router()
import updateOrPostAddress from '../../controllers/AddressControllers/PostUpdateAddress'

//* /user/address

router.post("/", async(req: any, res: any) => {

  try {

    const user = req.user;
    // console.log(user);
    if(!user.isActive) throw new Error("inactive user, do you want to recover it?");
    if (!user) {
        return res.status(404).send("User not found!")
    }

    if(req.body.address){
      const {address} = req.body
      // console.log("address", address);
      const {selected} = req.query
      const isSelected = selected ?  true : false
      const updatedUserAddress: any =  await updateOrPostAddress(user, address, isSelected)
      console.log("updatedUserAddress", updatedUserAddress);
      
      return res.status(200).send(updatedUserAddress)
    }
    return res.status(400).send({error:"No parameters sent for update"})
    
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router