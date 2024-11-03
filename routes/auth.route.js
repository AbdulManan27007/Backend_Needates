
import express from 'express';
import {login, signup, logout , verifyEmail, forgotpassword, resetPassword, checkAuth, hoteldetails } from "../controllers/auth.controller.js";
import { upload } from "../middleware/multer.middleware.js"; 
import {verifyToken} from '../middleware/verifyToken.js'
const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth)

router.post("/signup" , signup);
router.post("/login" , login);
router.post("/logout" , logout);

router.post("/verify-email", verifyEmail)
router.post("/forgot-password", forgotpassword)
router.post("/reset-password/:token", resetPassword)

router.post("/hoteldetails", upload.single("picture"), hoteldetails);


export default router;