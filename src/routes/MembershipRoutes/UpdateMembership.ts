import { Router } from "express";
import MembershipModel from "../../models/Membeship";
import User from '../../models/User';
const router = Router()


//* /membership
//! verifica token del admin
//1.
// Viene por query, ?name="nombre del plan"
// si el usuario quiere cambiar de plan, actualiza el plan en su membership doc.
// los nombres del plan pueden ser: Regular - Premium - sommelier

//2.
// Viene por query, ?isActive=false
// si el usuario se quiere dar de baja del plan, actualiza el field isActive a false. Tambien se vacia el field membership_id en el User doc.

//! hacer un post order si cambia el plan?? el post order es con cada pago?

router.put("/", async(req: any, res, next) => {
    
    try {
      let updatedMembership:any;
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
      
      if(req.query.name){
        updatedMembership = await MembershipModel.findByIdAndUpdate({user_id:user._id}, { name: req.query?.name, price: req.query.price }, { runValidators: true }).select("-user_id");
      };
      if(req.query.isActive){
        updatedMembership = await MembershipModel.findByIdAndUpdate({user_id:user._id}, { isActive: req.query?.isActive}, { runValidators: true }).select("-user_id");
      }

      console.log("updatedMembership",updatedMembership);
      

      return res.status(200).send(updatedMembership)

    } catch(error:any) {
      return res.status(400).send({error: error.message})
    }
})



export default router