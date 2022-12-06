import express from "express";
import routes from './routes/Index'
import cors from "cors";

const fileUpload = require('express-fileupload');
const morgan = require('morgan');

export const app = express()
app.use(morgan('dev'));
app.use(express.json())
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : './temporalImg/'
}))
app.use(cors({
  origin: "*",
}))

app.use('/', routes);

app.get('/test', (req, res)=>{
  try {

    res.send('Hello World')
    
  } catch (error:any) {
    console.log(error.message);
    
  }
})



