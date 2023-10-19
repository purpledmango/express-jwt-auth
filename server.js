import express from "express";
import dotenv from 'dotenv';

import connectToDB from "./config/db.js";

// intalizin env
dotenv.config();

// Extract env
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const URI = process.env.URI;
// const DB_USER = process.env.DB_USER;
// const DB_KEY = process.env.DB_KEY;


const app = express();
app.use(express.json());

//Middlewares

//Routes

connectToDB(URI);

app.listen(PORT, ()=>{
    console.log(`SERVER : RUNNING\nPORT: ${PORT}\n`);
   
});
