import express from "express";
import { pastseminar ,lastestseminar} from "../controller/seminar.js";
const router = express.Router()


router.get("/find/future",lastestseminar);
router.get("/find/past",pastseminar);
export default router;