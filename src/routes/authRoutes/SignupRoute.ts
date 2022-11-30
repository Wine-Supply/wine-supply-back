import { Router } from "express"
import postUser from "../../controllers/PostUser";
// import bcrypt from "bcrypt"
const bcrypt = require("bcrypt")
const router = Router()


//* /signup/


router.post("/", async(req, res) => {

  
  let { name, lastName, userName, email, password } = req.body;

  const hashedPass = await bcrypt.hash(password, 10)

  try {
      const newUser = await postUser(name, lastName, userName, email, hashedPass)

      res.status(200).send(`${newUser.name} user created successfully!`)

  } catch (error) {
      res.status(400).send(error);
  }
})


/* AGREGAR VALIDACIONES A FUTURO */



export default router