import express from "express";
import { latestdrive,pastdrive,driveapplication } from "../controller/drive.js";

const router = express.Router()

router.post("/",driveapplication);
router.get("/past",pastdrive);
router.get("/latest",latestdrive);

export default router;