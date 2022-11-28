import { Router } from "express"
const jwt = require("jsonwebtoken")
import User from "../../models/User"
import { config } from "dotenv";
config();
const router = Router()

//* /verifyuser/


router.get("/", async(req: any, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]

            const checkToken = jwt.verify(token, process.env.JWTKEY)
            req.user = await User.findById(checkToken._id, "-hashedPass")
            next()
        } catch (error) {
            console.log(error)
            throw new Error("Not authorized!")
        }

    }
    
    if (!token) {
        return res.status(400).send("no token!")
    }

})

export default router