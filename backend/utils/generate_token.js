import jwt from "jsonwebtoken"
import env from "dotenv"

env.config()

const generateToken = (userid) => {
    return jwt.sign(
        {id:userid},
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE}
    )
}

export default generateToken