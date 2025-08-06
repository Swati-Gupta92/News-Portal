import express from 'express';
import fileupload from 'express-fileupload';
import {dbconnect} from './dbconfig/db.js';
import router from './routes/userRoute.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(fileupload());
app.use(cors());
const PORT=9000;
dbconnect();
app.use('/api',router)
app.listen(PORT,()=>{
    console.log("Server is running");
})