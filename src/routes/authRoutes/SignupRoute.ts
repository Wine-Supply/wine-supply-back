import { Router } from "express"
import postUser from "../../controllers/PostUser";
import welcomeMail from "../../controllers/Mails/WelcomeMail";
// import bcrypt from "bcrypt"
const bcrypt = require("bcrypt")
const router = Router()


//* /signup


router.post("/", async(req, res) => {
  
  
  try {
    let { name, lastName, userName, email, password } = req.body;
    const hashedPass = await bcrypt.hash(password, 10)
      const newUser = await postUser(name, lastName, userName, email, hashedPass)

      try{
        const mail = await welcomeMail(newUser.email)
      }
      catch (error: any) {
        res.status(400).json({message: "Unable to sign up", error});
        
      }
      
      


      res.status(200).send(`${newUser.name} user created successfully!`)

  } catch (error:any) {
      res.status(400).send("Can't create user!");
  }
})


/* AGREGAR VALIDACIONES A FUTURO */



export default router