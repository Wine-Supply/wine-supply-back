const router = require("express").Router()
import updateUser from '../../controllers/UpdateUser'

//* /user/update

router.put("/", async(req: any, res: any) => {

  try {
    const user = req.user;
    // console.log("user", user);
    if(!user.isActive) throw new Error("inactive user, do you want to recover it?");
    if (!user) { return res.status(404).send("User not found!") };

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