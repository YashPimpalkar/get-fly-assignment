import { db } from "../connect.js"
export const notice =async (req,res)=>{
   
    const query = 'SELECT * FROM notification ORDER BY update_date DESC';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching notifications:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
   
}