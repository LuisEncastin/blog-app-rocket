# Backend - Blog API

API REST desarrollada con Node.js, Express y PostgreSQL para la gestión de entradas de blog.

## 🛠️ Stack Tecnológico

- **Node.js** v18+
- **Express** - Framework web
- **PostgreSQL** - Base de datos
- **pg** - Cliente PostgreSQL para Node.js
- **cors** - Middleware para CORS
- **dotenv** - Gestión de variables de entorno
- **morgan** - Logger HTTP

## 📁 Estructura del Proyecto

```
backend/
├── src/
│   ├── config/
│   │   └── database.js      # Configuración de PostgreSQL
│   ├── controllers/
│   │   └── postsController.js # Lógica de negocio
│   ├── routes/
│   │   └── posts.js         # Rutas de la API
│   └── server.js            # Punto de entrada
├── init.sql                 # Script de inicialización DB
├── .env.example             # Ejemplo de variables de entorno
├── package.json
├── Dockerfile
└── README.md
```

## 🚀 Inicio Rápido

### Con Docker
```bash
# Desde la raíz del proyecto
docker-compose up backend
```

### Sin Docker
```bash
cd backend
npm install
cp .env.example .env
# Configurar .env con tus credenciales
npm run dev
```

## 📡 API Endpoints

### GET /api/posts
Obtiene todas las entradas del blog.

**Response:**
```json
[
  {
    "id": 1,
    "title": "Título de la entrada",
    "author": "Nombre del autor",
    "content": "Contenido completo...",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### GET /api/posts/:id
Obtiene una entrada específica por ID.

**Response:**
```json
{
  "id": 1,
  "title": "Título de la entrada",
  "author": "Nombre del autor",
  "content": "Contenido completo...",
  "created_at": "2024-01-15T10:30:00.000Z",
  "updated_at": "2024-01-15T10:30:00.000Z"
}
```

### GET /api/posts/search/query?q=termino
Busca entradas por título, contenido o autor.

**Query Parameters:**
- `q` (string, required) - Término de búsqueda

**Response:**
```json
[
  {
    "id": 1,
    "title": "Título que contiene el término",
    "author": "Autor",
    "content": "Contenido...",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### POST /api/posts
Crea una nueva entrada.

**Request Body:**
```json
{
  "title": "Título de la entrada",
  "author": "Nombre del autor",
  "content": "Contenido de la entrada"
}
```

**Response:**
```json
{
  "id": 2,
  "title": "Título de la entrada",
  "author": "Nombre del autor",
  "content": "Contenido de la entrada",
  "created_at": "2024-01-15T10:30:00.000Z",
  "updated_at": "2024-01-15T10:30:00.000Z"
}
```

### PUT /api/posts/:id
Actualiza una entrada existente.

**Request Body:**
```json
{
  "title": "Título actualizado",
  "author": "Autor actualizado",
  "content": "Contenido actualizado"
}
```

### DELETE /api/posts/:id
Elimina una entrada.

**Response:**
```json
{
  "message": "Post deleted successfully",
  "post": {
    "id": 1,
    "title": "Título eliminado",
    ...
  }
}
```

## 🗄️ Base de Datos

### Esquema

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

### Índices

```sql
CREATE INDEX idx_posts_title ON posts(title);
CREATE INDEX idx_posts_author ON posts(author);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
```

## ⚙️ Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| DATABASE_URL | URL de conexión a PostgreSQL | postgresql://user:pass@localhost:5432/blog_db |
| PORT | Puerto del servidor | 3000 |
| NODE_ENV | Entorno de ejecución | development |

## 🧪 Testing

```bash
npm test
```

## 📝 Scripts

- `npm start` - Inicia el servidor en modo producción
- `npm run dev` - Inicia el servidor con nodemon (desarrollo)
- `npm test` - Ejecuta los tests
- `npm run lint` - Ejecuta ESLint

## 🔒 Seguridad

- Validación de entrada en todos los endpoints
- Manejo de errores centralizado
- Prevención de SQL injection usando consultas parametrizadas
- CORS configurado para aceptar peticiones del frontend

## 🐛 Troubleshooting

### Error: Cannot connect to database
- Verifica que PostgreSQL esté corriendo
- Revisa las credenciales en `.env`
- Asegúrate de que la base de datos existe

### Error: Port already in use
- Cambia el puerto en `.env`
- O detén el proceso que está usando el puerto 3000

## 📄 Licencia

MIT