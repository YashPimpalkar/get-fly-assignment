import express from "express";
import { db } from "./connect.js";
import cors from "cors"
import bodyParser from 'body-parser';
import seminarRoute from "./routes/seminar.js"
import noticeRoute from "./routes/notification.js"
import faqRoute from "./routes/faqs.js";
import semAppRoute from "./routes/seminar-application.js"
import driveRoute from "./routes/drive.js"
import dotenv from "dotenv"
dotenv.config()
const app =express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
db.connect((err) => {
  if (err) return console.error(err.message);

  console.log('Connected to the MySQL server.');
});

const PORT = process.env.PORT || 5000;
// app.use(cors());
app.use("/api/seminars",seminarRoute);
app.use("/api/notice",noticeRoute);
app.use("/api/faqs",faqRoute);
app.use("/api/seminar-application",semAppRoute);
app.use("/api/drives",driveRoute);
app.get("/", (req, res) => res.send("Express on Vercel"));
app.listen(PORT,()=>{
    console.log("API working");
})

