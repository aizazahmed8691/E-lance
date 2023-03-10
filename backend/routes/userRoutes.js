import express from "express";
import { authUser,getUserProfile,registerUser } from "../controlers/usercontroler.js";

const router=express.Router();

router.post('/register',registerUser);
router.post('/login',authUser);
router.route('/profile').get(getUserProfile)

export default router;