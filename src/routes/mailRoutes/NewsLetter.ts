import { Router } from "express";
import sendNewsLetter from "../../controllers/Mails/NewsLetter";


const router = Router()

router.post('/', async (req, res) =>{
    const {mails, subject, title,  news} = req.body;

    console.log(mails);
    

    try {
        const mailSend = await mails.map((e: string) => {
            try {
                return sendNewsLetter(e, subject, title,  news)
            }
            catch (error){
                return error
            }
        }) 
        res.send(mailSend)
    }
    catch (error: any){
        res.status(500).send("Something bad happend :c\n " + error.message)
    }
})


export default router;