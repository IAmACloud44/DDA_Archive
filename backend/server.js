const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'DDA_Forums',
  password: 'superSecureLocalContainerPassword',
  port: 5432,
});

// Fetch all users for GET
app.get('/users', async (req, res) => {
    try {
      const result = await pool.query('SELECT user_id, name FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: err.message });
    }
  });
  

// Root URL route returning SQL data as JSON
// I tried to immediately join together the user and comment tables, so that the user names can be displayed and that the oldest comment is seen
app.get('/', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT u.user_id, c.comment_id, u.name, u.email, c.comment, c.timestamp
      FROM users u
      JOIN comments c ON c.user_id = u.user_id
      ORDER BY c.timestamp
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: err.message });
  }
});

// GET
app.get('/comments', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT u.user_id, u.name AS user_name, c.comment_id, c.comment, c.timestamp
        FROM comments c
        JOIN users u ON c.user_id = u.user_id
        ORDER BY c.timestamp ASC;
      `);
      res.json(result.rows);
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: err.message });
    }
  });

// POST
app.post('/comments', async (req, res) => {
  const { user_id, comment } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO comments (user_id, comment) VALUES ($1, $2) RETURNING *`,
      [user_id, comment]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: err.message });
  }
});

// PUT
app.put('/comments/:comment_id', async (req, res) => {
    const { comment_id } = req.params;
    const { comment } = req.body;
  
    try {
      // Update the comment
      const updateResult = await pool.query(
        'UPDATE comments SET comment = $1 WHERE comment_id = $2 RETURNING *',
        [comment, comment_id]
      );
  
      if (updateResult.rowCount === 0) {
        return res.status(404).json({ error: 'Comment not found' });
      }
  
      // Fetch updated comment with user details
      const updatedComment = await pool.query(`
        SELECT u.user_id, u.name AS user_name, c.comment_id, c.comment, c.timestamp
        FROM comments c
        JOIN users u ON c.user_id = u.user_id
        WHERE c.comment_id = $1
      `, [comment_id]);
  
      res.json(updatedComment.rows[0]);
    } catch (err) {
      console.error('Error executing query', err.stack);
      res.status(500).json({ error: err.message });
    }
  });  

// DELETE
app.delete('/comments/:comment_id', async (req, res) => {
  const { comment_id } = req.params;
  try {
    const result = await pool.query(
      'DELETE FROM comments WHERE comment_id = $1 RETURNING *',
      [comment_id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error executing query', err.stack);
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
