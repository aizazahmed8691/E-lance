import express from "express";
import { Getgigs,getgigsbyuser,addgig } from "../controlers/gigcontroler.js";

const router=express.Router();



router.route('/').get(Getgigs)
router.route('/:id').get(getgigsbyuser)
router.route('/insert',addgig)
export default router;