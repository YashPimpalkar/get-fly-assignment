import { db } from "../connect.js"

export const latestdrive =(req,res)=>{
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const query = 'SELECT * FROM drives WHERE drive_date >= ?';
    db.query(query, [currentDate], (err, results) => {
      if (err) {
        console.error('Error fetching current drives:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
}

export const pastdrive =(req,res)=>{
    const currentDate = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const query = 'SELECT * FROM drives WHERE drive_date < ?';
    db.query(query, [currentDate], (err, results) => {
      if (err) {
        console.error('Error fetching past drives:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(results);
      }
    });
}


export const driveapplication =(req,res)=>{
    const { driveId, collegeId, email, mobile } = req.body;

    const checkQuery = 'SELECT * FROM drive_applications WHERE drive_id = ? AND (email = ? OR college_id = ? OR mobile = ?)';
    db.query(checkQuery, [driveId, email, collegeId, mobile], (checkErr, checkResults) => {
      if (checkErr) {
        console.error('Error checking drive application:', checkErr);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (checkResults.length > 0) {
        res.status(400).json({ error: 'Already applied for this drive.' });
      } else {
        const insertQuery = 'INSERT INTO drive_applications (drive_id, college_id, email, mobile) VALUES (?, ?, ?, ?)';
        db.query(insertQuery, [driveId, collegeId, email, mobile], (insertErr, insertResults) => {
          if (insertErr) {
            console.error('Error inserting drive application:', insertErr);
            res.status(500).json({ error: 'Internal Server Error' });
          } else {
            res.status(200).json({ message: 'Drive application successful.' });

            console.log(insertResults);
          }
        });
      }
    });
}