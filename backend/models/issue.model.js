import mongoose from "mongoose";
import User from "./user.model";


const commentSchema = new mongoose.Schema({
    user : {

        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
    text : {
        type : String,
        required : true,
    },
    
    
},
{
    timestamps : true
}
)

const issueSchema = new mongoose.Schema({

    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        enum : ["Garbage", "Electricity" , "Road", "Streetlight", "Noise", "Flood", "Other"],
        required : true,
    },

    Image : {
        type : String,
        required : true,
    },

    location : {
        type : String,
        required : true,
    },

    mapcoordinates : {
        lat : Number,
        lng : Number,
    },

    status : {
        type : String,
        enum : ["Pending", "In Progress", "Completed"],
        default : "Pending",
        required : true,
    },
    comments : {
        type : [commentSchema],
        default : []
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },

    updatedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },
},

{
    timestamps : true
}
)

const Issue = mongoose.model("Issue", issueSchema)
export default Issue