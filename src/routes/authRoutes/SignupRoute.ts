import { Router } from "express"
import postUser from "../../controllers/PostUser";
// import bcrypt from "bcrypt"
const bcrypt = require("bcrypt")
const router = Router()


//* /signup


router.post("/", async(req, res) => {
  
  
  try {
    let { name, lastName, userName, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10)
      const newUser = await postUser(name, lastName, userName, email, hashedPass)

      res.status(200).send(`${newUser.name} user created successfully!`)

  } catch (error:any) {
      res.status(400).send("Can't create user!");
  }
})


/* AGREGAR VALIDACIONES A FUTURO */



export default router