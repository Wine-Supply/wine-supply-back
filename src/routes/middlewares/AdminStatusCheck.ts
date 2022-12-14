const jwt = require("jsonwebtoken")
import { Router } from "express";
import User from "../../models/User"
import { config } from "dotenv";
config();

const router = Router()
//* /AdminStatuscheck/


router.post("/", async (req:any, res) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const checkToken = jwt.verify(token, process.env.JWTKEY)
            let status = await User.findById(checkToken._id)
            req.data = req.headers.data
            if (status?.isAdmin === "yes") {
                res.status(200).send('Admin User')
            } else {
                res.status(401).send("No admin status!")
            }
        } catch (error) {
            console.log(error)
            res.status(403).send("Not authorized!")
        }

    }
    
    if (!token) {
      res.status(401).send("No token!")
    }

})

export default router