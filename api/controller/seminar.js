
import { db } from "../connect.js"

export const lastestseminar = async (req,res)=>{
    const currentDate = new Date().toISOString().split('T')[0]; 
    const sql = `SELECT * FROM seminars WHERE timings > '${currentDate}' ORDER BY timings ASC LIMIT 5`;
    try {
    db.query(sql,(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })}
    catch(err){
        res.status(500).json({ success: true, message: "Failed to cmd Try again" })
    }
}

export const pastseminar = async (req,res)=>{
    const currentDate = new Date().toISOString().split('T')[0]; 
    const sql = `SELECT * FROM seminars WHERE timings < '${currentDate}' ORDER BY timings DESC LIMIT 5`;
    db.query(sql,(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}