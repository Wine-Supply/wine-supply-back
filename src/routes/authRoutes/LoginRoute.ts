import { Router } from "express"
import User from "../../models/User"
import { config } from "dotenv";
config();
const router = Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//* /login/


router.post("/", async(req, res) => {
    const {email, password} = req.body
    let existingUser;
    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        return error
    }
    if (!existingUser) return res.status(400).send("User doesnt exist!")
    const comparePassword = await bcrypt.compare(password, existingUser.hashedPass)
    if (!comparePassword) {
        res.status(400).send("Incorrect password!")
    }
    const token = jwt.sign({_id: existingUser._id}, process.env.JWTKEY, {expiresIn: "2d"})

    res.status(200).json( {info:"Successfull log-in!", user: existingUser, token} )
})

/*Si el usuario existe y se valida la contraseña devuelve un objeto:

{ info:"Successfull log-in!",
user: existingUser,
token}

Esto se puede cambiar, agreagar cosas o sacar segun la necesidad

IMPORTANTE! AVERIGUAR SOBRE REFRESH TOKEN

*/
export default router