import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    phone : {
        type : Number,
        required : true,
        trim : true
    },
    area : {
        type : String,
        required : true,
        trim : true
    },
    agreement : {
        type : Boolean,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
},
{
    timestamps : true
}
)

const User = mongoose.model("User", userSchema)
export default User