import { Router } from "express"
import User from "../../../models/User"
const router = Router()

//* /admin/users/isActive

// verify Token AdminStatus
// se envia id por params.
// devuelve usuario actualizado

// actualiza propiedad isActive de un usuario. 
// (Ejemplo: si antes era "false", lo cambia a "true"; por el contrario, si isAdmin era "true", lo deja en "false")


router.put("/:id", async(req: any, res) => {

  // no me funcionaba el .save() con un ternario:
  
  const checkValue = function(isActive:any){
    if(isActive === true) { return false} else { return true}
   }

  try {

    const {id} = req.params;
    if(!id) { return res.status(400).send("Missing id")}

   let user:any = await User.findById(id).select("-hashedPass");
    // console.log("user", user);
    if(user.length === 0) { return res.status(404).send("No matches found for this id") };

    const activeStatus = checkValue(user.isActive)
    // console.log("activeStatus", activeStatus);
    
    user.isActive = activeStatus;
    await user.save()
    const newUser = { ...user._doc, id: user._id}

    let total = newUser.length
    res.header({'content-Range':  `newUser 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
    
    return res.status(200).send(newUser);
      
    } catch (error:any) {
        return res.status(500).send(error.message);
    }
})


export default router;