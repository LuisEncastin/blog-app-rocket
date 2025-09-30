# Frontend - Blog Application

Web blog application developed with **React**, **Vite**, and **Tailwind CSS**.

-----

## 🛠️ Tech Stack

  - **React** 18.2+ - UI Library
  - **Vite** - Build tool and dev server
  - **Tailwind CSS** - Utility-first CSS framework
  - **Lucide React** - Icons
  - **JavaScript (ES6+)** - Programming language

-----

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # App Header
│   │   ├── SearchBar.jsx        # Search Bar
│   │   ├── ConnectionStatus.jsx # Connection Status
│   │   ├── PostList.jsx         # Post List
│   │   ├── PostCard.jsx         # Post Card
│   │   ├── PostDetail.jsx       # Post Detail
│   │   └── PostForm.jsx         # New Post Form
│   ├── services/
│   │   ├── api.js               # API Client
│   │   └── offlineStorage.js   # Cache Management
│   ├── hooks/
│   │   └── useOnlineStatus.js  # Connection Status Hook
│   ├── App.jsx                  # Main Component
│   ├── main.jsx                 # Entry Point
│   └── index.css                # Global Styles
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── Dockerfile
└── README.md
```

-----

## 🚀 Quick Start

### With Docker

```bash
# From the project root
docker-compose up frontend
```

### Without Docker

```bash
cd frontend
npm install
cp .env.example .env
# Configure .env
npm run dev
```

The application will be available at http://localhost:5173

-----

## ✨ Features

### 📝 Post Management

  - **Create** new posts with title, author, and content
  - **List** all posts with a 70-character preview
  - **View full detail** of each post
  - **Search** by title, content, or author

### 🌐 Offline Mode

  - Automatic detection of connection status
  - Cache of previously downloaded posts
  - Viewing posts without connection
  - Blocking post creation while offline
  - Connection status notification

### 🎨 User Interface

  - Responsive design (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Visual feedback for all actions
  - Loading and error states

-----

## 🔧 Components

### Header

Main application header with logo and title.

### SearchBar

Real-time search bar with:

  - Instant filtering
  - Button to clear search
  - Results indicator

### ConnectionStatus

Displays a banner when there is no internet connection.

### PostList

List of posts in a grid format with:

  - Card view
  - Loading state with spinner
  - Message when there are no results

### PostCard

Individual post card showing:

  - Title
  - Author
  - Publication date
  - Content preview (70 characters)
  - Hover effect

### PostDetail

Full view of a post with:

  - Full title
  - Author information
  - Publication date and time
  - Full content
  - Button to return to the list

### PostForm

Form for creating new posts with:

  - Validation of required fields
  - Error messages
  - Disabled in offline mode

-----

## 🎣 Custom Hooks

### useOnlineStatus

Hook that detects and monitors the internet connection status.

```javascript
const isOnline = useOnlineStatus();
```

-----

## 🔌 Services

### API Service

Client for communicating with the backend:

  - `getAllPosts()` - Get all posts
  - `getPostById(id)` - Get one post
  - `searchPosts(query)` - Search posts
  - `createPost(data)` - Create new post
  - `updatePost(id, data)` - Update post
  - `deletePost(id)` - Delete post

### Offline Storage

Local cache management using in-memory variables:

  - `savePosts(posts)` - Save posts to cache
  - `getPosts()` - Retrieve posts from cache
  - `clearCache()` - Clear cache
  - `getCacheTimestamp()` - Get cache timestamp

-----

## 🎨 Styles

### Tailwind CSS

Utility-first classes for rapid development:

```jsx
<button className="btn-primary">
  Primary Button
</button>
```

### Custom Classes

  - `.btn-primary` - Primary button
  - `.btn-secondary` - Secondary button
  - `.card` - Content card
  - `.input-field` - Input field

-----

## ⚙️ Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| VITE\_API\_URL | Backend API URL | http://localhost:3000/api |

-----

## 📦 Production Build

```bash
npm run build
```

The files will be generated in `dist/` and can be served with any static server.

### Build Preview

```bash
npm run preview
```

-----

## 🧪 Testing

```bash
npm test
```

-----

## 📝 Scripts

  - `npm run dev` - Starts development server
  - `npm run build` - Production build
  - `npm run preview` - Build preview
  - `npm run lint` - Runs ESLint

-----

## 🎯 Accessibility Features

  - Use of semantic HTML
  - Labels on all form fields
  - Adequate color contrast
  - Visible focus states
  - Descriptive error messages

-----

## 📱 Responsive Design

  - **Mobile First** - Designed for mobile first
  - **Breakpoints:**
      - `sm:` 640px
      - `md:` 768px
      - `lg:` 1024px
      - `xl:` 1280px

-----

## 🔍 Search

The search filters posts in real-time by:

  - Title
  - Content
  - Author

The search is **case-insensitive** and works both online and offline.

-----

## 💾 Local Cache

The caching system:

  - Automatically saves all downloaded posts
  - Allows offline access to previously viewed content
  - Updates every time there is a connection
  - Uses in-memory variables (not localStorage)

-----

## 📄 License

MIT