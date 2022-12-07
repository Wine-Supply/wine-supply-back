const jwt = require("jsonwebtoken")
import User from "../../models/User"
import { config } from "dotenv";
config();

//* /AdminStatus/


async function verAdmin(req: any, res: any, next: any) {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const checkToken = jwt.verify(token, process.env.JWTKEY)
            let status = await User.findById(checkToken._id)
            req.data = req.headers.data
            if (status?.isAdmin === "yes") {
                next()
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

}

export default verAdmin