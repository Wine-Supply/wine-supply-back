import { Router } from "express";
import contactUsLetter from "../../controllers/Mails/ContacUs";

const router = Router()

router.post('/', async (req, res) =>{
    const {mail, subject, text, name} = req.body;
    
    try {
        const mailSend = await contactUsLetter(mail, subject, text, name);
        if(mailSend){
            res.status(200).json({message: "Mail send"})
        }
        else{
            res.status(400).json({message: "Mail not send :c"})
        }
    }
    catch (error: any){
        res.status(500).send("Something bad happend in server :c\n " + error.message)
    }

})


export default router;

