import { Router } from "express"
import User from "../../../models/User"
const router = Router()

//* /admin/users
// verify Token

router.get("/", async(req: any, res) => {

  // trae a todos los usuarios (no trae a los usuarios admin)

  // si llega por query new=true, devuelve los ultimos 5 usuarios creados
  // si llega por query isActive=true, devuelve solo los usuarios activos
  // si llega por query isActive=false, devuelve solo los usuarios inactivos
  // si llega por query isAdmin=true, devuelve solo los usuarios con rol de admin

  const newUsers = req.query.new;
  const activeUsers = req.query.isActive
  const adminUsers = req.query.isAdmin

  try {

    const users:any = newUsers ? await User.find({isAdmin: "no", isActive: true}).sort({_id: -1}).limit(5) : await User.find();
        
      return res.status(200).send(users)
      
    } catch(error:any) {
        return res.send(error.message)
    }
})

//


export default router