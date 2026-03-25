import express from "express";
import env from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"
import userRoute from "./routes/user.route.js"
import issueRoute from "./routes/issue.route.js"

env.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000

const connectServer = async () => {
    try {
        let dbStatus = false;
        let trycounting = 0;
        while(dbStatus === false){
            dbStatus = await connectDB();
            console.log("db is connected");
            trycounting ++
            console.log(`trycounting: ${trycounting}`)
        }
       
        app.listen(PORT, () => {
            console.log(`server is running at port ${PORT}`)

        })
        
    } catch (error) {
        console.log(`server is not running due to ${error}`)
    }
}

connectServer()

app.use("/api/users", userRoute)
app.use("/api/issues", issueRoute)


app.get("/", (req,res)=>{
    res.send("home api")
})