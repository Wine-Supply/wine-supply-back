import express, {Request, Response} from "express";
const morgan = require('morgan');
// import cors from "cors";


export const app = express()
app.use(morgan('dev'));
app.use(express.json())



app.get("/", (req, res) => {
    try {
        console.log("db online")
        res.send("database")
    } catch (error: any) {
        throw new Error( error );
    }
})



