import { Router } from "express";
import MembershipModel from "../../models/Membeship";
import User from '../../models/User';
const router = Router()


//* /membership?name=
// Regular - Premium - Sommielere
//! verifica token del admin
// busca en el model de membership segun los fields que vengan por query

router.get("/", async(req: any, res, next) => {
    
    try {

      //! VER QUE DEVUELVE TOKEN DE ADMIN

      if (Object.keys(req.query).length === 0) {return "missing data from query"}
      
      const dbMembership:any = await MembershipModel.find(req.query).select("-user_id");

      return res.status(200).send(dbMembership)

    } catch(error:any) {
      return res.status(400).send({error: error.message})
    }
})



export default router