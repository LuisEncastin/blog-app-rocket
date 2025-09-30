# Blog Application

A full-stack blog application developed with React + Vite + Tailwind CSS (frontend) and Node.js + Express + PostgreSQL (backend).

> **Technical Assessment Project** for Rocket Code  
> This project was created as a response to Rocket Code's technical assessment for a React Developer position.

![Blog app image](assets/screenshot.png)

## 📋 Project Requirements Fulfilled

This application meets all the requirements specified in the technical assessment:

### ✅ Core Features
- **Post Creation**: Users can save posts with title, author, publication date, and content (all fields required)
- **Post Listing**: Displays all blog posts with a 70-character preview of the content
- **Search Functionality**: Filter posts by title, content, or author
- **Post Details**: View complete post content by selecting from the list
- **REST API Integration**: Data retrieval and storage through a REST API service

### ✅ Extra Feature (Bonus)
- **Offline Mode**:
  - View previously downloaded posts without internet connection
  - Block post creation when offline
  - Display "no internet connection" message
  - NOTE: THIS FEATURE IS ONLY AVAILABLE WHEN APP IS DEPLOYED ON PROD

### ✅ Technical Requirements
- React with Vite (not Next.js) ✅
- Tailwind CSS for styling ✅
- SQL Database (PostgreSQL) ✅
- Clean, quality code ✅
- Version control (Git) ✅
- README with installation instructions ✅
- Dependency management ✅
- Third-party libraries usage ✅

## 🚀 Features

- ✅ Blog post management (title, author, date, content)
- ✅ Post listing with 70-character preview
- ✅ Search by title, content, or author
- ✅ Detailed post view
- ✅ REST API for data management
- ✅ PostgreSQL database
- ✅ Offline mode with local cache
- ✅ Docker for easy deployment

## 📋 Prerequisites

- [Docker](https://www.docker.com/get-started) (v20.10 or higher)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0 or higher)
- [Node.js](https://nodejs.org/) (v20 or higher) - only for local development without Docker
- [Git](https://git-scm.com/)

## 🛠️ Installation and Setup

### Option 1: With Docker (Recommended)

1. **Clone the repository**
```bash
git clone git@github.com:LuisEncastin/blog-app-rocket.git
cd blog-app
```

2. **Start all services**
```bash
docker-compose up -d
```

This will start:
- Frontend at: http://localhost:5173
- Backend at: http://localhost:3000
- PostgreSQL at: localhost:5432

3. **Verify services are running**
```bash
docker-compose ps
```

4. **View logs (optional)**
```bash
# View all logs
docker-compose logs -f

# View logs for a specific service
docker-compose logs -f frontend
docker-compose logs -f backend
```

5. **Stop services**
```bash
docker-compose down
```

### Option 2: Without Docker (Local Development)

#### Backend

1. **Navigate to backend folder**
```bash
cd backend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your PostgreSQL credentials:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/blog_db
PORT=3000
```

4. **Create database**
```sql
CREATE DATABASE blog_db;
```

5. **Start server**
```bash
npm run dev
```

Backend will be available at http://localhost:3000

#### Frontend

1. **In another terminal, navigate to frontend folder**
```bash
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

4. **Start development server**
```bash
npm run dev
```

Frontend will be available at http://localhost:5173

## 🗄️ Project Structure

```
blog-app/
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── services/        # API and offline services
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utilities
│   │   └── App.jsx          # Main component
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── backend/
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Controllers
│   │   ├── config/          # Configuration
│   │   └── server.js        # Express application
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔌 API Endpoints

### Blog Posts

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get specific post
- `GET /api/posts/search/query?q=term` - Search posts
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post

### POST Request Example

```json
{
  "title": "My first post",
  "author": "John Doe",
  "content": "This is the content of my first blog post..."
}
```

## 🌐 Offline Mode

The application includes offline functionality that:
- Caches previously downloaded posts
- Allows viewing posts without connection
- Blocks post creation when offline
- Displays connection status message
- NOTE: THIS FEATURE IS ONLY AVAILABLE WHEN APP IS DEPLOYED ON PROD

## 🧪 Testing

### Backend
```bash
cd backend
npm test
```

### Frontend
```bash
cd frontend
npm test
```

## 🏗️ Production Build

### Frontend
```bash
cd frontend
npm run build
```

Files will be generated in `frontend/dist/`

### Backend
```bash
cd backend
npm run build
```

## 🐳 Useful Docker Commands

```bash
# Rebuild images
docker-compose build

# Restart specific service
docker-compose restart backend

# Execute commands in a container
docker-compose exec backend npm install new-dependency

# Clean volumes (⚠️ deletes database)
docker-compose down -v
```

## 🗃️ Database

### `posts` Table Schema

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

### Access PostgreSQL

```bash
docker-compose exec db psql -U postgres -d blog_db
```

## 🔧 Configuration

### Backend Environment Variables

- `DATABASE_URL` - PostgreSQL connection URL
- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

### Frontend Environment Variables

- `VITE_API_URL` - Backend API URL

## 📝 Available Scripts

### Frontend
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Development server with nodemon
- `npm start` - Production server
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🎯 Assessment Compliance

This project fully complies with all requirements from the Rocket Code technical assessment:

1. ✅ **React with Vite**: Built using Vite as the build tool
2. ✅ **Tailwind CSS**: Used for all styling
3. ✅ **Required Fields**: All post fields (title, author, date, content) are mandatory
4. ✅ **Post Listing**: Shows preview with first 70 characters
5. ✅ **Search**: Implemented for title, content, and author
6. ✅ **Post Details**: Complete content view available
7. ✅ **REST API**: Backend service for all operations
8. ✅ **SQL Database**: PostgreSQL implementation
9. ✅ **Offline Mode**: Bonus feature fully implemented
10. ✅ **Documentation**: Complete setup and usage instructions
11. ✅ **Version Control**: Git repository with proper structure
12. ✅ **Code Quality**: Clean, organized, and commented code


## 📄 License

This project is under the MIT License.

## 👥 Author

Luis Encastin - [@LuisEncastin](https://github.com/LuisEncastin)

**Created for**: Rocket Code Technical Assessment

## 🆘 Troubleshooting

### Frontend cannot connect to backend

Verify that:
1. Backend is running on port 3000
2. `VITE_API_URL` environment variable is correctly configured
3. There are no CORS issues

### Database connection error

Verify that:
1. PostgreSQL is running
2. Credentials in `.env` are correct
3. Database `blog_db` exists

### Port already in use

If ports 3000 or 5173 are in use:
1. Stop the process using them
2. Or modify ports in `docker-compose.yml`

**Note**: This project was developed as part of a technical assessment for Rocket Code, demonstrating proficiency in React, Node.js, PostgreSQL, Docker, and modern web development practices.
