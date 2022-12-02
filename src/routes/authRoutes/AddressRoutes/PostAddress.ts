const router = require("express").Router()
import postAddress from '../../../controllers/AddressController.ts/PostAddress'

//* /address
//const {addressNum, country, stateName, cityName, postalcode, streetName, streetNumber, floor, Apartment, isDefault} = req.body
// son todos strings

router.post("/", async(req: any, res: any) => {

  try {
    const user = req.user;
    // console.log("user", user);
    if(!user.isActive) throw new Error("inactive user, do you want to recover it?");
    if (!user) { return res.status(404).send("User not found!") };

    if (req.body ) {

      const changedAddress = await postAddress(user, req.body, req.query)

      return res.status(200).send(changedAddress)
    } 
    return res.status(400).send({error:"No parameters sent for update"})
    
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router