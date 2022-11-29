const router = require("express").Router()
import User from "../../models/User";
import updateUser from '../../controllers/UpdateUser'

//* /user/update

router.get("/", async(req: any, res: any) => {

  const userId = req.user?._id;
  let user;
  try {

    user = await User.findById(userId, "-hashedPass")
    console.log("user", user);

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

// borrado logico user - ok
// borrado logico comentario/review - que se haga desde el review mismo 
// borrado logico de address
// baja de suscripcion
// cambio de name, lastname, username, email, password?, phone, address, membership, avatar
/* 
const doc = await Model.findById(id)
doc.name = 'jason bourne';
await doc.save();
*/


export default router