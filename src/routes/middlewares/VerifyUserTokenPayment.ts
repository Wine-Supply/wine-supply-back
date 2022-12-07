// import { Router } from "express"
const jwt = require("jsonwebtoken")
import User from "../../models/User"
import { config } from "dotenv";
config();
// const router = Router()

//* /verifyuser/


async function verTokenPayment(req: any, res: any, next: any) {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const checkToken = jwt.verify(token, process.env.JWTKEY)
            req.user = await User.findById(checkToken._id, "-hashedPass")
            // .populate({ path:'shopping_cart', select:'_id name images price stock'})
            if (req.headers.items) {
                req.shoppingCart = JSON.parse(req.headers.items)
            }
            if (req.headers.item) {
                req.item = req.headers.item
            }
            if (req.headers.sub_type) {
                req.sub_type = req.headers.sub_type
            }
            next()
        } catch (error) {
            console.log(error)
            res.status(300).send("Not authorized!")
        }

    }
    
    if (!token) {
      res.status(303).send("no token!")
    }
}

export default verTokenPayment