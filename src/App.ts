import express, {Request, Response} from "express"
// import cors from "cors";

export const app = express()
app.use(express.json())



app.get("/", (_req, res) => {
    try {
        console.log("db online")
        res.send("database")
    } catch (error: any) {
        throw new Error( error );
    }
})



