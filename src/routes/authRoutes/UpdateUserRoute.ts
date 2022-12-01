const router = require("express").Router()
import updateUser from '../../controllers/UpdateUser'

//* /user/update

router.get("/", async(req: any, res: any) => {

  const user = req.user;
  // let user;
  try {

    // user = await User.findById(userId, "-hashedPass")
    // console.log("user", user);

    if (!user) {
        return res.status(404).send("User not found!")
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