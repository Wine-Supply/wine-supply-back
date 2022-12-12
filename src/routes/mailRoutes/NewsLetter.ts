import { Router } from "express";
import sendNewsLetter from "../../controllers/Mails/NewsLetter";
import getAllUsers from "../../controllers/GetAllUsers";

const router = Router()

router.post('/', async (req, res) =>{
    const { subject, title,  news, image} = req.body;
    
    const users = await getAllUsers();

    try {
        if(users){
            const mailSend = await users.map((e: any) => {
                try {
                    return sendNewsLetter(e.email, subject, title,  news, image)
                }
                catch (error){
                    return error
                };
        })
        res.status(200).json({message: "Mails send"})
        } 
    }
    catch (error: any){
        res.status(500).send("Something bad happend in server :c\n " + error.message)
    }
})


export default router;

