import express from "express";
const morgan = require('morgan');
import routes from './routes/Index'
// import cors from "cors";


export const app = express()
app.use(morgan('dev'));
app.use(express.json())

app.use('/', routes);




