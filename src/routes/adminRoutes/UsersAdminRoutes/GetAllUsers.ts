import { Router } from "express"
import User from "../../../models/User"
const router = Router()

//* /admin/users
// verify Token AdminStatus

router.get("/", async(req: any, res) => {

  // si llega por query newUser=true, devuelve los ultimos 5 usuarios creados activos, ordenados por id
  // si llega por query isActive=yes, devuelve solo los usuarios activos, ordenados por _id
  // si llega por query isActive=no, devuelve solo los usuarios inactivos, ordenados por _id
  // si llega por query isAdmin=true, devuelve solo los usuarios con rol de admin, ordenados por _id
  // si llega por query all=true, devuelve todos los usuarios (no trae a los usuarios admin)

  const {newUser, isActive, isAdmin, all} = req.query;

  try {

    if(newUser) {
      const newUsers = await User.find({isAdmin: "no", isActive: true}).sort({_id: -1}).limit(5)
      return res.status(200).send(newUsers)
    }
    if (isAdmin){
      const adminUsers = await User.find({isAdmin: "yes"}).sort({_id: -1})
      return res.status(200).send(adminUsers)
    }
    if (isActive==="yes") {
      const active = await User.find({isAdmin: "no", isActive: true}).sort({_id: -1})
      return res.status(200).send(active)
    }
    if (all) {
      const allUsers = await User.find()
      return res.status(200).send(allUsers)
    }
    if (isActive ==="no") {
      const inactive = await User.find({isAdmin: false, isActive: false}).sort({_id: -1})
      return res.status(200).send(inactive)
    }
      
    } catch(error:any) {
        return res.send(error.message)
    }
})


export default router