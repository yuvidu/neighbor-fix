import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protecter = async(req , res , next) => {
    try {
        let token;

        if(
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ){
            token = req.headers.authorization.split(" ")[1]
        }
        if(!token){
            return res.status(401).json({message:"not authorized"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await User.findById(decoded.id).select("-password")
        next()
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}