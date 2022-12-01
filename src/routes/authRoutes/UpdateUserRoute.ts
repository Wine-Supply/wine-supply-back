const router = require("express").Router()
import updateUser  from '../../controllers/UsersControllers/UpdateUser'
import updateOrPostAddress from '../../controllers/AddressControllers/PostUpdateAddress'

//* /user/update

router.put("/", async(req: any, res: any) => {

  try {

    const user = req.user;
    // console.log(user);
    
    if (!user) {
        return res.status(404).send("User not found!")
    }

    if(req.body.address){
      const {address} = req.body
      const {selected} = req.query
      const isSelected = selected ?  true : false
      const updatedUserAddress = updateOrPostAddress(user, address, isSelected)
      return res.status(200).send(updatedUserAddress)
    }
    if (Object.keys(req.body).length) {

      const updatedUser = await updateUser(user, req.body)

      return res.status(200).send(updatedUser)
    } 

    return res.status(400).send({error:"No parameters sent for update"})
    
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router