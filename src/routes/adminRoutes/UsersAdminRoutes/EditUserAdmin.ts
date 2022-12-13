import { Router } from "express";
// import getuserById from "../../controllers/GetuserById";
import User from '../../../models/User'

const router = Router();

router.put("/:id", async (req, res) => {
    const { id } = req.body;

    try {
        let user: any = await User.findById(id);
        let result;

        if (!user) {
            return res.status(404).send("User not found!");
        }
        for (const property in req.body) {
            if (user[property] && property !== "_id" && property !== '$__' && property !== '$isNew') {
                user[property] = req.body[property];
            }
        }



        if (user) {
            let updatedUser: any = await User.findByIdAndUpdate(id, user);
            updatedUser = { ...updatedUser, id: updatedUser._id }
            res.send(updatedUser);
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Update not possible!");
    }
});

export default router;