import express from "express";
import env from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"

env.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>
    console.log(`server runs at ${PORT}`)   
)

app.get("/", (req,res)=>{
    res.send("home api")
})