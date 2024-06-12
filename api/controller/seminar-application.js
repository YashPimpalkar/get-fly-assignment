
import { db } from "../connect.js"

export const allseminar = async (req,res)=>{
    const currentDate = new Date().toISOString().split('T')[0]; 
    const sql = `SELECT * FROM seminars`;
    try {
    db.query(sql,(err,data)=>{
        if (err) return res.status(500).json(err);
        return res.status(200).json(data)
    })}
    catch(err){
        res.status(500).json({ success: true, message: "Failed to cmd Try again" })
    }
}


export const SeminarApplication = async (req,res)=>{
   
        const { seminarId, collegeId, email, mobile } = req.body;
        if (!seminarId ||  !collegeId || !email || !mobile) {
            return res.status(400).json({ error: 'All fields are required' });
          }
        // Check if the user has already applied using email, college ID, or mobile number
        const checkQuery = `SELECT * FROM seminar_application WHERE seminar_id = ? AND (email = ? OR collegeId = ? OR mobile = ?)`;
        db.query(checkQuery, [seminarId, email, collegeId, mobile], (checkErr, checkResults) => {
          if (checkErr) {
            console.error('Error checking seminar application:', checkErr);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
          }
      
          if (checkResults.length > 0) {
            // User has already applied
            res.status(400).json({ error: 'Already applied for this seminar.' });
          } else {
            // Insert the new application into the database
            const insertQuery = `INSERT INTO seminar_application (seminar_id,  collegeId, email, mobile) VALUES (?,  ?, ?, ?)`;
            db.query(insertQuery, [seminarId,  collegeId, email, mobile], (insertErr, insertResults) => {
              if (insertErr) {
                console.error('Error inserting seminar application:', insertErr);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
              }
              res.status(200).json({ message: 'Seminar application successful.' });
            });
          }
        });
    
}
