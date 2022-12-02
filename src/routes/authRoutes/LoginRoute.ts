import { Router } from "express"
import User from "../../models/User"
import PostUserFirebase from "../../controllers/PostUserFirebase"
import { config } from "dotenv";
config();
const router = Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

//* /login


router.post("/", async(req, res) => {
    let existingUser;
    if (!req.body.password) {
        const {given_name, family_name, email} = req.body.profile
        try {
            let existingUser = await User.findOne({email})
            if (!existingUser) {
                const newUser = await PostUserFirebase(given_name, family_name, email)
                const token = jwt.sign({_id: newUser._id}, process.env.JWTKEY, {expiresIn: "2d"})
                return res.status(200).json({info:"Successfull log-in!", user: existingUser, token})
            }
            
            if (existingUser) {
                const token = jwt.sign({_id: existingUser._id}, process.env.JWTKEY, {expiresIn: "2d"})
                return res.status(200).json({info:"Successfull log-in!", user: existingUser, token})
            }
        } catch (error) {
            console.log(error)
            throw new Error("Not authorized!")
        }

    }
    const {email, password} = req.body
    try {
        existingUser = await User.findOne({email: email})
    } catch (error) {
        return error
    }
    if (!existingUser) return res.status(400).send("User doesnt exist!")
    const comparePassword = await bcrypt.compare(password, existingUser.hashedPass)
    if (!comparePassword) {
        return res.status(400).send("Incorrect password!")
    }
    const token = await jwt.sign({_id: existingUser._id}, process.env.JWTKEY, {expiresIn: "2d"})

    return res.status(200).json( {info:"Successfull log-in!", user: existingUser, token} )
})

/*Si el usuario existe y se valida la contraseña devuelve un objeto:

{ info:"Successfull log-in!",
user: existingUser,
token}

Esto se puede cambiar, agreagar cosas o sacar segun la necesidad

IMPORTANTE! AVERIGUAR SOBRE REFRESH TOKEN

*/
export default router