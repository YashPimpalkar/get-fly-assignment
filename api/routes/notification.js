import express from "express";
import { notice } from "../controller/notification.js";
const router = express.Router()


router.get("/",notice);

export default router;