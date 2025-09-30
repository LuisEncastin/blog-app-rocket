const pool = require('../config/database');

// GET all posts
const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM posts ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Error fetching posts' });
  }
};

// GET single post by ID
const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM posts WHERE id = $1',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ error: 'Error fetching post' });
  }
};

// Search posts
const searchPosts = async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const searchTerm = `%${q}%`;
    const result = await pool.query(
      `SELECT * FROM posts 
       WHERE title ILIKE $1 
       OR content ILIKE $1 
       OR author ILIKE $1
       ORDER BY created_at DESC`,
      [searchTerm]
    );
    
    res.json(result.rows);
  } catch (error) {
    console.error('Error searching posts:', error);
    res.status(500).json({ error: 'Error searching posts' });
  }
};

// POST create new post
const createPost = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    
    // Validation
    if (!title || !author || !content) {
      return res.status(400).json({ 
        error: 'All fields are required: title, author, content' 
      });
    }
    
    const result = await pool.query(
      `INSERT INTO posts (title, author, content) 
       VALUES ($1, $2, $3) 
       RETURNING *`,
      [title, author, content]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Error creating post' });
  }
};

// PUT update post
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, content } = req.body;
    
    // Validation
    if (!title || !author || !content) {
      return res.status(400).json({ 
        error: 'All fields are required: title, author, content' 
      });
    }
    
    const result = await pool.query(
      `UPDATE posts 
       SET title = $1, author = $2, content = $3, updated_at = CURRENT_TIMESTAMP
       WHERE id = $4
       RETURNING *`,
      [title, author, content, id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Error updating post' });
  }
};

// DELETE post
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    
    const result = await pool.query(
      'DELETE FROM posts WHERE id = $1 RETURNING *',
      [id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }
    
    res.json({ message: 'Post deleted successfully', post: result.rows[0] });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Error deleting post' });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  searchPosts,
  createPost,
  updatePost,
  deletePost
};