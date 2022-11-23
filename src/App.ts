import express from "express"
import mongoose from "mongoose"
const { MONGO_URL } = process.env


const app = express()
app.use(express.json())


const PORT = 3001




app.get("/", (req, res) => {
    try {
        console.log("db online")
        res.send("database")
    } catch (error: any) {
        throw new Error( error );
    }
})


mongoose.connect(`${MONGO_URL}`).then(
    () => 
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
    
)
