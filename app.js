import express from 'express';
import dotenv from "dotenv"
const app = express();

//configure .env 
dotenv.config({
    path:'./.env' , 
})

//add express buildin middlewares
express.use(express.json({limit:"18kb"}))
express.use(express.urlencoded({limit:"18kb" , extended:true}))



export default app