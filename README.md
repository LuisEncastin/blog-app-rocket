# Blog Application

Aplicación web de blog desarrollada con React + Vite + Tailwind (frontend) y Node.js + Express + PostgreSQL (backend).

## 🚀 Características

- ✅ Alta de entradas de blog (título, autor, fecha, contenido)
- ✅ Listado de entradas con preview de 70 caracteres
- ✅ Búsqueda por título, contenido o autor
- ✅ Vista detallada de entradas
- ✅ API REST para gestión de datos
- ✅ Base de datos PostgreSQL
- ✅ Modo offline con caché local
- ✅ Docker para fácil despliegue

## 📋 Prerrequisitos

- [Docker](https://www.docker.com/get-started) (v20.10 o superior)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0 o superior)
- [Node.js](https://nodejs.org/) (v18 o superior) - solo para desarrollo local sin Docker
- [Git](https://git-scm.com/)

## 🛠️ Instalación y Ejecución

### Opción 1: Con Docker (Recomendado)

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd blog-app
```

2. **Iniciar todos los servicios**
```bash
docker-compose up -d
```

Esto iniciará:
- Frontend en: http://localhost:5173
- Backend en: http://localhost:3000
- PostgreSQL en: localhost:5432

3. **Verificar que los servicios estén corriendo**
```bash
docker-compose ps
```

4. **Ver logs (opcional)**
```bash
# Ver todos los logs
docker-compose logs -f

# Ver logs de un servicio específico
docker-compose logs -f frontend
docker-compose logs -f backend
```

5. **Detener los servicios**
```bash
docker-compose down
```

### Opción 2: Sin Docker (Desarrollo Local)

#### Backend

1. **Navegar a la carpeta del backend**
```bash
cd backend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar `.env` con tus credenciales de PostgreSQL:
```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/blog_db
PORT=3000
```

4. **Crear la base de datos**
```sql
CREATE DATABASE blog_db;
```

5. **Iniciar el servidor**
```bash
npm run dev
```

El backend estará disponible en http://localhost:3000

#### Frontend

1. **En otra terminal, navegar a la carpeta del frontend**
```bash
cd frontend
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
```

Editar `.env`:
```env
VITE_API_URL=http://localhost:3000/api
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

El frontend estará disponible en http://localhost:5173

## 🗄️ Estructura del Proyecto

```
blog-app/
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── services/        # Servicios API y offline
│   │   ├── hooks/           # Custom hooks
│   │   ├── utils/           # Utilidades
│   │   └── App.jsx          # Componente principal
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── Dockerfile
├── backend/
│   ├── src/
│   │   ├── routes/          # Rutas de la API
│   │   ├── controllers/     # Controladores
│   │   ├── models/          # Modelos de datos
│   │   ├── config/          # Configuración
│   │   └── app.js           # Aplicación Express
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔌 API Endpoints

### Entradas de Blog

- `GET /api/posts` - Obtener todas las entradas
- `GET /api/posts/:id` - Obtener una entrada específica
- `GET /api/posts/search?q=termino` - Buscar entradas
- `POST /api/posts` - Crear nueva entrada
- `PUT /api/posts/:id` - Actualizar entrada
- `DELETE /api/posts/:id` - Eliminar entrada

### Ejemplo de Petición POST

```json
{
  "title": "Mi primera entrada",
  "author": "Juan Pérez",
  "content": "Este es el contenido de mi primera entrada en el blog..."
}
```

## 🌐 Modo Offline

La aplicación incluye funcionalidad offline que:
- Cachea las entradas descargadas previamente
- Permite ver entradas sin conexión
- Bloquea la creación de nuevas entradas sin conexión
- Muestra un mensaje de estado de conexión

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

## 🏗️ Build para Producción

### Frontend
```bash
cd frontend
npm run build
```

Los archivos se generarán en `frontend/dist/`

### Backend
```bash
cd backend
npm run build
```

## 🐳 Comandos Docker Útiles

```bash
# Reconstruir imágenes
docker-compose build

# Reiniciar un servicio específico
docker-compose restart backend

# Ejecutar comandos en un contenedor
docker-compose exec backend npm install nueva-dependencia

# Limpiar volúmenes (⚠️ elimina la base de datos)
docker-compose down -v
```

## 🗃️ Base de Datos

### Esquema de la tabla `posts`

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

### Acceder a PostgreSQL

```bash
docker-compose exec db psql -U postgres -d blog_db
```

## 🔧 Configuración

### Variables de Entorno del Backend

- `DATABASE_URL` - URL de conexión a PostgreSQL
- `PORT` - Puerto del servidor (default: 3000)
- `NODE_ENV` - Entorno (development/production)

### Variables de Entorno del Frontend

- `VITE_API_URL` - URL de la API backend

## 📝 Scripts Disponibles

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecutar ESLint

### Backend
- `npm run dev` - Servidor de desarrollo con nodemon
- `npm start` - Servidor de producción
- `npm test` - Ejecutar tests
- `npm run lint` - Ejecutar ESLint

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Autor

Tu Nombre - [@tuusuario](https://github.com/tuusuario)

## 🆘 Solución de Problemas

### El frontend no puede conectarse al backend

Verifica que:
1. El backend esté corriendo en el puerto 3000
2. La variable `VITE_API_URL` esté correctamente configurada
3. No haya problemas de CORS

### Error de conexión a la base de datos

Verifica que:
1. PostgreSQL esté corriendo
2. Las credenciales en `.env` sean correctas
3. La base de datos `blog_db` exista

### Puerto ya en uso

Si los puertos 3000 o 5173 están en uso:
1. Detén el proceso que los está usando
2. O modifica los puertos en `docker-compose.yml`

## 📞 Soporte

Si encuentras algún problema, por favor abre un issue en el repositorio.