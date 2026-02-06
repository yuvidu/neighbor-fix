import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import generateToken from "../utils/generate_token.js"

export const createUser = async (req , res) => {
    try {
        const { name , email , phone , area , agreement , password } = req.body;
        if (!name || !email || !phone || !area || !agreement || !password) {
            return res.status(400).json({message: "All fields are required"})
        }
        const existuser = await User.findOne({email})
        if(existuser){
            return res.status(400).json({message: "user email already exists"})
        }

        const hashedPassword = await bcrypt.hash(password , 10)
        const user = await User.create({
            name,
            email,
            phone,
            area,
            agreement,
            password: hashedPassword
        })
        return res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            area: user.area,
            agreement: user.agreement
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when register users"})
        
    }
}

export const loginUser = async (req , res) => {
    try {

        const {email , password} = req.body;
        if(!email || !password) {
            return res.status(400).json({message: "all fields are required"})
        }

        const existsuser = await User.findOne({email})
        if(!existsuser){
            return res.status(400).json({message : "user not found"})
        }

        const Passwordcompare = await bcrypt.compare(password , existsuser.password)
        if(Passwordcompare){
            const token = generateToken(existsuser._id)
            return res.status(200).json({message: "login successfully" , token})
        }else{
            return res.status(400).json({message: "password not matched"})
        }
        
      
        
    } catch (error) {

        console.log(error)
        return res.status(500).json({message: "something wrong when login users"})
        
    }
}

