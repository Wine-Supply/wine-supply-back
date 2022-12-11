import { Router } from "express";
import getUserById from "../../../controllers/GetUserById";

const router = Router()

router.get("/:id", async (req, res) => {
    let { id }  = req.params;
  try {
    let user = await getUserById(id);
    let newUser = {...user, id: user?._id}
    res.status(200).send(newUser);
  }
  catch (error: any) {
    res.status(400).send("Can't find user!");
  }
});



export default router;