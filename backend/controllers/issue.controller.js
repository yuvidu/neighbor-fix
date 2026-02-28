import Issue from "../models/issue.model.js"


// exports.createIssue = ...
// exports.getAllIssues = ...
// exports.getIssueById = ...
// exports.updateIssue = ...
// exports.deleteIssue = ...
// exports.voteIssue = ...
// exports.addComment = ...
// exports.updateStatus = ...
// exports.getNearbyIssues = ...

export const Createissue = async(req , res) => {
    try {
        const {title , description , category ,image , location , mapcoordinates , status , createdBy , updatedBy} = req.body;
        if(!title || !description || !category || !location || !image || !mapcoordinates || !status){
            console.log("all fields are required")
            return res.status(400).json({message: "all fields are required"})
        }

        const issue = await Issue.create ({
            title,
            description,
            category,
            image,
            location,
            mapcoordinates,
            status,
            createdBy:req.user._id,
            updatedBy:req.user._id
        })

        console.log("issue created successfully" , issue)
        return res.status(201).json({message: "issue created successfully" , issue})

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when create issue"})
    }
}

export const getAllIssues = async(req,res) => {
    try {
        const issues = await Issue.find()
        console.log("all issues" , issues)
        return res.status(200).json({message: "all issues" , issues})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when get all issues"})
    }
}

export const getIssueById = async (req, res) => {
    try {
        const { id } = req.params;
        const issue = await Issue.findById(id)
        console.log("issue by id", issue)
        return res.status(200).json({ message: "issue by id", issue })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "something wrong when get issue by id" })
    }
}

export const updateIssue = async (req,res) => {
    try {
        const {id} = req.params;
        const issue = await Issue.findByIdAndUpdate(id , req.body , {new : true})
        console.log("issue updated successfully" , issue)
        return res.status(200).json({message: "issue updated successfully" , issue})
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when update issue"})
    }
}

export const Deleteissue = async(req , res) => {
    try {

        const {id} = req.params;
        const issue = await Issue.findByIdAndDelete(id);
        console.log("issue deleted successfully", issue)
        return res.status(200).json({message: "issue deleted successfully" , issue})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when delete issue"})
    }
}

export const addComment = async(req,res) => {
    try {

        const {issueid} = req.params;
        const {comment} = req.body;

        const issueobj = await Issue.findById(issueid)

        if(!issueobj){
            return res.status(404).json({message: "issue not found"})
        }
        if(!comment || comment.trim() === ""){
            return res.status(400).json({message: "comment is required"})
        }

        issueobj.comments.push({
            user: req.user._id,
            comment
        })

        await issueobj.save()
        return res.status(200).json({
            message: "comment added",
            comment: issueobj.comments[issueobj.comments.length - 1]
        })


        


        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when add comment"})
    }
}



export const UpdateIssueStatus = async(req , res) => {
    try {
        const {id, status} = req.body;
        const issue = await Issue.findByIdAndUpdate(id , 
            {status},
            {new : true}
            )
        console.log("issue updated successfully" , issue)
        return res.status(200).json({message: "issue updated successfully" , issue})

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when update issue status"})
    }
}

export const getNearbyIssues =async(req , res) => {
    try {
        const {latitude , longitude , radius=5000} = req.body;
        if(!latitude || !longitude){
            return res.status(400).json({message: "latitude and longitude are required"})
        }
        const issues = await Issue.find();
        const nearbyIssues = issues.filter(
            issue => {
                if (!issue.mapcoordinates || !issue.mapcoordinates.lat || !issue.mapcoordinates.lng) return false;
                const R = 6371; // Earth's radius in km
                const dLat = (issue.mapcoordinates.lat - latitude) * Math.PI / 180;
                const dLon = (issue.mapcoordinates.lng - longitude) * Math.PI / 180;
                const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(latitude * Math.PI / 180) * Math.cos(issue.mapcoordinates.lat * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
                const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                const distance = R * c;
                return distance <= radius;
            }
        )

        
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "something wrong when get nearby issues"})
    }
}