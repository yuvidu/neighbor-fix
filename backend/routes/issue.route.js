import express from 'express'
import { protecter } from '../middleware/auth.middleware.js'
import { Createissue ,getIssueById,getAllIssues,Deleteissue,updateIssue} from '../controllers/issue.controller.js'

const router = express.Router()

router.post('/', protecter, Createissue)
router.get('/', getAllIssues)
router.get('/:id', getIssueById)
router.put('/:id', protecter, updateIssue)
router.delete('/:id', protecter, Deleteissue)



export default router