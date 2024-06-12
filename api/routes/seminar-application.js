import express from "express";
import { SeminarApplication } from "../controller/seminar-application.js";
const router = express.Router()



router.post("/",SeminarApplication);

export default router;