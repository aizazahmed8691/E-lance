import express from "express";
import { buyerRelatedJob } from "../controlers/jobcontroler.js";

const router=express.Router();

router.route('/:id').get(buyerRelatedJob)

export default router;