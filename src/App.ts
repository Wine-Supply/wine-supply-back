import express from "express"
import mongoose from "mongoose"



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



mongoose.connect('mongodb+srv://nico0f:testpassword951@cluster0.vtnjsce.mongodb.net/?retryWrites=true&w=majority').then(
    () => 
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
    })
    
)