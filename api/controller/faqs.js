import { db } from "../connect.js";
export const getfaq = async(req,res)=>{
    const query = 'SELECT * FROM faq ORDER BY created_at DESC';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching FAQs:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(results);
    });
}

export const sendfaq =async (req,res)=>{
    const { question } = req.body;
    const query = 'INSERT INTO faq (question) VALUES (?)';
    db.query(query, [question], (err, result) => {
      if (err) {
        console.error('Error adding FAQ:', err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ id: result.insertId, question, answer: null });
    });
}