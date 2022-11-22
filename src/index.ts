import { config } from "dotenv";
config();
import mongoose from "mongoose";
import { app } from './app'

const PORT = 3001

mongoose.connect(process.env.MONGO_URL!).then(()=>{
  console.log(`Listening on port ${PORT}`);
  app.listen(PORT);
}).catch((error) => {'connection failed due to error: ' + error.message})

const db = mongoose.connection
db.on("error", console.error.bind(console, "mongoDB connection error"))