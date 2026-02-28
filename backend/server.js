import express from "express";
import env from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import userRoute from "./routes/user.route.js"
import issueRoute from "./routes/issue.route.js"

env.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());



const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>
    console.log(`server runs at ${PORT}`)   
)


app.use("/api/users", userRoute)
app.use("/api/issues", issueRoute)






app.get("/", (req,res)=>{
    res.send("home api")
})