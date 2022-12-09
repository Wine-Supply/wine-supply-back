import { Router } from "express";
import WineModel from "../../../models/Wine";

const router = Router()

//* /admin/wines


router.delete("/:id", async (req, res) => {
    let { id }  = req.params;

    try {
        let wine = await WineModel.findByIdAndUpdate(id, {isActive: false})

        res.status(201).send(`${wine?.name} succesfully suspended!`)

    }
    catch (error: any) {
        return res.status(404).send('Cant delete wine!')
    }

});



export default router;