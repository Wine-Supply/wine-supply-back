const router = require("express").Router()
import User from "../../../models/User"

//* /address

router.delete("/", async(req: any, res: any) => {

  try {
    const user = req.user;

    if(!user.isActive) throw new Error("inactive user, do you want to recover it?");
    if (!user) { return res.status(404).send("User not found!") };

    //-   ?erase=true    ----para tener una opcion de borrado?
    if(req.query.erase){ user.address = []}

  // mandan por query el index del address en el array, posicion en el array, del address a eliminar
   const start = parseInt(req.query.index)
  
  user.address.splice(start, 1)
 
  const updatedUser= await user.save()

  return res.status(200).send(updatedUser.address)
  
    } catch(error: any) {
        return res.status(400).send({error: error.message})
    }
});


export default router
