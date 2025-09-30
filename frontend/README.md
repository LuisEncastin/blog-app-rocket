# Frontend - Blog Application

Aplicación web de blog desarrollada con React, Vite y Tailwind CSS.

## 🛠️ Stack Tecnológico

- **React** 18.2+ - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Iconos
- **JavaScript (ES6+)** - Lenguaje de programación

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Encabezado de la app
│   │   ├── SearchBar.jsx        # Barra de búsqueda
│   │   ├── ConnectionStatus.jsx # Estado de conexión
│   │   ├── PostList.jsx         # Lista de entradas
│   │   ├── PostCard.jsx         # Tarjeta de entrada
│   │   ├── PostDetail.jsx       # Detalle de entrada
│   │   └── PostForm.jsx         # Formulario nueva entrada
│   ├── services/
│   │   ├── api.js               # Cliente API
│   │   └── offlineStorage.js   # Gestión de caché
│   ├── hooks/
│   │   └── useOnlineStatus.js  # Hook estado de conexión
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── Dockerfile
└── README.md
```

## 🚀 Inicio Rápido

### Con Docker
```bash
# Desde la raíz del proyecto
docker-compose up frontend
```

### Sin Docker
```bash
cd frontend
npm install
cp .env.example .env
# Configurar .env
npm run dev
```

La aplicación estará disponible en http://localhost:5173

## ✨ Características

### 📝 Gestión de Entradas
- **Crear** nuevas entradas con título, autor y contenido
- **Listar** todas las entradas con preview de 70 caracteres
- **Ver detalle** completo de cada entrada
- **Búsqueda** por título, contenido o autor

### 🌐 Modo Offline
- Detección automática del estado de conexión
- Caché de entradas descargadas previamente
- Visualización de entradas sin conexión
- Bloqueo de creación de entradas offline
- Notificación de estado de conexión

### 🎨 Interfaz de Usuario
- Diseño responsive (móvil, tablet, desktop)
- Animaciones y transiciones suaves
- Feedback visual para todas las acciones
- Estados de carga y error

## 🔧 Componentes

### Header
Encabezado principal de la aplicación con logo y título.

### SearchBar
Barra de búsqueda en tiempo real con:
- Filtrado instantáneo
- Botón para limpiar búsqueda
- Indicador de resultados

### ConnectionStatus
Muestra un banner cuando no hay conexión a internet.

### PostList
Lista de entradas en formato de grid con:
- Vista de tarjetas (cards)
- Estado de carga con spinner
- Mensaje cuando no hay resultados

### PostCard
Tarjeta individual de entrada mostrando:
- Título
- Autor
- Fecha de publicación
- Preview del contenido (70 caracteres)
- Efecto hover

### PostDetail
Vista completa de una entrada con:
- Título completo
- Información del autor
- Fecha y hora de publicación
- Contenido completo
- Botón para volver al listado

### PostForm
Formulario para crear nuevas entradas con:
- Validación de campos obligatorios
- Mensajes de error
- Deshabilitado en modo offline

## 🎣 Custom Hooks

### useOnlineStatus
Hook que detecta y monitorea el estado de conexión a internet.

```javascript
const isOnline = useOnlineStatus();
```

## 🔌 Servicios

### API Service
Cliente para comunicarse con el backend:
- `getAllPosts()` - Obtener todas las entradas
- `getPostById(id)` - Obtener una entrada
- `searchPosts(query)` - Buscar entradas
- `createPost(data)` - Crear nueva entrada
- `updatePost(id, data)` - Actualizar entrada
- `deletePost(id)` - Eliminar entrada

### Offline Storage
Gestión de caché local usando variables en memoria:
- `savePosts(posts)` - Guardar entradas en caché
- `getPosts()` - Recuperar entradas del caché
- `clearCache()` - Limpiar caché
- `getCacheTimestamp()` - Obtener timestamp del caché

## 🎨 Estilos

### Tailwind CSS
Clases utility-first para un desarrollo rápido:
```jsx
<button className="btn-primary">
  Botón Primario
</button>
```

### Clases Personalizadas
- `.btn-primary` - Botón principal
- `.btn-secondary` - Botón secundario
- `.card` - Tarjeta de contenido
- `.input-field` - Campo de entrada

## ⚙️ Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| VITE_API_URL | URL de la API backend | http://localhost:3000/api |

## 📦 Build para Producción

```bash
npm run build
```

Los archivos se generarán en `dist/` y pueden ser servidos con cualquier servidor estático.

### Preview del Build

```bash
npm run preview
```

## 🧪 Testing

```bash
npm test
```

## 📝 Scripts

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecuta ESLint

## 🎯 Características de Accesibilidad

- Uso de HTML semántico
- Labels en todos los campos de formulario
- Contraste de colores adecuado
- Estados de focus visibles
- Mensajes de error descriptivos

## 📱 Responsive Design

- **Mobile First** - Diseñado primero para móviles
- **Breakpoints:**
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px

## 🔍 Búsqueda

La búsqueda filtra entradas en tiempo real por:
- Título
- Contenido
- Autor

La búsqueda es **case-insensitive** y funciona tanto online como offline.

## 💾 Caché Local

El sistema de caché:
- Guarda automáticamente todas las entradas descargadas
- Permite acceso offline a contenido previamente visto
- Se actualiza cada vez que hay conexión
- Usa variables en memoria (no localStorage)

## 🐛 Troubleshooting

### La aplicación no se conecta al backend
- Verifica que el backend esté corriendo
- Revisa la variable `VITE_API_URL` en `.env`
- Verifica que no haya problemas de CORS

### Los estilos de Tailwind no se aplican
- Asegúrate de que `index.css` esté importado en `main.jsx`
- Verifica que la configuración de Tailwind sea correcta
- Ejecuta `npm run dev` de nuevo

### El modo offline no funciona
- El navegador debe soportar los eventos `online` y `offline`
- Verifica la consola del navegador para errores

## 📄 Licencia

MIT
