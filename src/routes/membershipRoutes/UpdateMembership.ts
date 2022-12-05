import { Router } from "express";
import MembershipModel from "../../models/Membeship";
import User from '../../models/User';
const router = Router()


//* /getmembership
//! verifica token del admin
//1.
// Viene por query, ?name="nombre del plan"
// si el usuario quiere cambiar de plan, actualiza el plan en su membership doc.
// los nombres del plan pueden ser: regular - premium - sommelier

//2.
// Viene por query, ?isActive=false
// si el usuario se quiere dar de baja del plan, actualiza el field isActive a false. Tambien se vacia el field membership_id en el User doc.

router.put("/", async(req: any, res, next) => {
    
    try {

      const user = req.user;
		//console.log("user", user);
		if (!user.isActive)
			return res.status(303).send("Inactive user, do you want to recover it?");
		if (!user) {
			return res.status(404).send("User not found!");
		}

      //! VER QUE DEVUELVE TOKEN DE ADMIN 
      //! if(token de Admin) { entonces permitir cambiar isActive a true?, tendria sentido recuperar la suscripcion?}

      if (Object.keys(req.query).length === 0) {return "missing data from query"}

      if(req.query.name) {
        const updatedUserMembership: any = await User.findByIdAndUpdate(user._id, { name: req.query.name },{ runValidators: true }).lean()

      }
      
      // const dbMembership:any = await MembershipModel.find(req.query).select("-user_id");

      // return res.status(200).send(dbMembership)

    } catch(error:any) {
      return res.status(400).send({error: error.message})
    }
})



export default router