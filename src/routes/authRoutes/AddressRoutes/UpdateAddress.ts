const router = require("express").Router()
import updateAddress from '../../../controllers/AddressController.ts/UpdateAddress'

//* /address
//const {country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault} = req.body
// son todos strings

router.put("/", async(req: any, res: any) => {

  try {
    const user = req.user;
    // console.log("user", user);
    if(!user.isActive) { return res.status(303).send("Inactive user, do you want to recover it?") }
    if (!user) { return res.status(404).send("User not found!") };

    if (req.body && req.query.index) {
    
      const changedAddress = await updateAddress(user, req.body, req.query)

      return res.status(200).send(changedAddress)
    } 
    return res.status(400).send({error:"No parameters sent for update"})
    
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router