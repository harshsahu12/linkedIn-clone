import express from 'express'
import { getAllUser, getUserProfile, updateProfile } from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.get("/", getAllUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateProfile)
router.route("/profile/:userId").get()

export default router