import { Router } from "express"
import User from "../../../models/User"
const router = Router()

//* /admin/users/isAdmin

// verify Token AdminStatus
// se envia id por params.
// devuelve usuario actualizado

// actualiza propiedad isAdmin de un usuario. 
// (Ejemplo: si antes era "no", lo cambia a "yes"; por el contrario, si isAdmin era "yes", lo deja en "no")

router.put("/:id", async(req: any, res) => {

  // no me funcionaba el .save() con un ternario:

  const checkValue = function(isAdmin:any){
    if(isAdmin === "yes") { return "no"} else { return "yes"}
   }

  try {

    const {id} = req.params;

   let user:any = await User.findById(id).select("-hashedPass");
    // console.log("user", user);
    if(user.length === 0) { return res.status(200).send("No matches found for this id") };

    const adminStatus = checkValue(user.isAdmin)
    // console.log("adminStatus", adminStatus);
    
    user.isAdmin = adminStatus
    const updatedUser = await user.save()

    const newUser = { ...user._doc, id: user._id}
    let total = newUser.length
    res.header({'content-Range':  `newUser 0-20/${total}`, 'Access-Control-Expose-Headers': 'Content-Range'})
     
    return res.status(200).send(newUser);
      
    } catch (error:any) {
        return res.send(error.message)
    }
})


export default router;