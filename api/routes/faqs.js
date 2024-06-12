import express from "express";
import { getfaq ,sendfaq} from "../controller/faqs.js";
const router = express.Router()


router.get("/",getfaq);
router.post("/",sendfaq);

export default router;