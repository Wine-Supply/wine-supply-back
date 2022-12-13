import { Router } from "express"
import User from "../../../models/User"
const router = Router()

//*  SIN USO DE MOMENTO 9/12/22
// verify Token AdminStatus

// /admin/newusers/

router.get("/", async(req: any, res) => {

  // si llega por query newUser=true, devuelve los ultimos 5 usuarios creados activos, ordenados por id
  // si llega por query isActive=yes, devuelve solo los usuarios activos, ordenados por _id
  // si llega por query isActive=no, devuelve solo los usuarios inactivos, ordenados por _id
  // si llega por query isAdmin=true, devuelve solo los usuarios con rol de admin, ordenados por _id
  // si llega por query all=true, devuelve todos los usuarios (no trae a los usuarios admin)

  const {newUser, isActive, isAdmin, all} = req.query;
  let users:any = []
  let result

  try {

    if(newUser) {
      users = await User.find({isAdmin: "no", isActive: true}).sort({_id: -1}).limit(5)
      result = users.map((e: any) => {
        return {
          id: e._id,
          email: e.email,
          name: e.name,
          lastName: e.lastName,
          userName: e.userName
        }
      })
    }
    else if (isAdmin){
      users = await User.find({isAdmin: "yes"}).sort({_id: -1})
    }
    else if (isActive==="yes") {
      users = await User.find({isAdmin: "no", isActive: true}).sort({_id: -1})
    }
    else if (isActive ==="no") {
      users = await User.find({isAdmin: "no",isActive: false})
    }
    else if (all) {
      users = await User.find()
    }

    if(users.length === 0){return res.status(200).send("No matches found") }
    res.header({'content-Range':  `wines 0-5/5`, 'Access-Control-Expose-Headers': 'Content-Range'})
    return res.status(200).send(result)
      
    } catch (error:any) {
        return res.send(error.message)
    }
})


export default router