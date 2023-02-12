import express from "express";
import { Addjob, getjobbyuser } from "../controlers/jobcontroler.js";

const router=express.Router();

router.route('/insert',Addjob)
router.route('/:id').get(getjobbyuser)

export default router;