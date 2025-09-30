# Backend - Blog API

REST API developed with **Node.js**, **Express**, and **PostgreSQL** for blog post management.

-----

## 🛠️ Tech Stack

  - **Node.js** v18+
  - **Express** - Web framework
  - **PostgreSQL** - Database
  - **pg** - PostgreSQL client for Node.js
  - **cors** - CORS middleware
  - **dotenv** - Environment variable management
  - **morgan** - HTTP logger

-----

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js      # PostgreSQL Configuration
│   ├── controllers/
│   │   └── postsController.js # Business Logic
│   ├── routes/
│   │   └── posts.js         # API Routes
│   └── server.js            # Entry Point
├── init.sql                 # DB initialization script
├── .env.example             # Environment variables example
├── package.json
├── Dockerfile
└── README.md
```

-----

## 🚀 Quick Start

### With Docker

```bash
# From the project root
docker-compose up backend
```

### Without Docker

```bash
cd backend
npm install
cp .env.example .env
# Configure .env with your credentials
npm run dev
```

-----

## 📡 API Endpoints

### GET /api/posts

Retrieves all blog posts.

**Response:**

```json
[
  {
    "id": 1,
    "title": "Post Title",
    "author": "Author Name",
    "content": "Full content...",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### GET /api/posts/:id

Retrieves a specific post by ID.

**Response:**

```json
{
  "id": 1,
  "title": "Post Title",
  "author": "Author Name",
  "content": "Full content...",
  "created_at": "2024-01-15T10:30:00.000Z",
  "updated_at": "2024-01-15T10:30:00.000Z"
}
```

### GET /api/posts/search/query?q=term

Searches for posts by title, content, or author.

**Query Parameters:**

  - `q` (string, required) - Search term

**Response:**

```json
[
  {
    "id": 1,
    "title": "Title containing the term",
    "author": "Author",
    "content": "Content...",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### POST /api/posts

Creates a new post.

**Request Body:**

```json
{
  "title": "Post Title",
  "author": "Author Name",
  "content": "Post content"
}
```

**Response:**

```json
{
  "id": 2,
  "title": "Post Title",
  "author": "Author Name",
  "content": "Post content",
  "created_at": "2024-01-15T10:30:00.000Z",
  "updated_at": "2024-01-15T10:30:00.000Z"
}
```

### PUT /api/posts/:id

Updates an existing post.

**Request Body:**

```json
{
  "title": "Updated Title",
  "author": "Updated Author",
  "content": "Updated Content"
}
```

### DELETE /api/posts/:id

Deletes a post.

**Response:**

```json
{
  "message": "Post deleted successfully",
  "post": {
    "id": 1,
    "title": "Deleted Title",
    ...
  }
}
```

-----

## 🗄️ Database

### Schema

```sql
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Indexes

```sql
CREATE INDEX idx_posts_title ON posts(title);
CREATE INDEX idx_posts_author ON posts(author);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
```

-----

## ⚙️ Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| DATABASE\_URL | PostgreSQL connection URL | postgresql://user:pass@localhost:5432/blog\_db |
| PORT | Server port | 3000 |
| NODE\_ENV | Execution environment | development |

-----

## 🧪 Testing

```bash
npm test
```

-----

## 📝 Scripts

  - `npm start` - Starts the server in **production** mode
  - `npm run dev` - Starts the server with **nodemon** (development)
  - `npm test` - Executes tests
  - `npm run lint` - Runs ESLint

-----

## 🔒 Security

  - **Input validation** on all endpoints
  - Centralized **error handling**
  - **SQL injection prevention** using parameterized queries
  - **CORS** configured to accept requests from the frontend

-----

## 📄 License

MIT