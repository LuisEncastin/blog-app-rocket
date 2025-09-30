-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for best searches
CREATE INDEX IF NOT EXISTS idx_posts_title ON posts(title);
CREATE INDEX IF NOT EXISTS idx_posts_author ON posts(author);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Insert example data
INSERT INTO posts (title, author, content) VALUES
('Bienvenido al Blog', 'Admin', 'Esta es la primera entrada de nuestro blog. Aquí compartiremos contenido interesante sobre desarrollo web, tecnología y más. Esperamos que disfrutes del contenido y te sientas libre de explorar todas las funcionalidades disponibles.'),
('Introducción a React', 'María González', 'React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook y se ha convertido en una de las herramientas más populares para el desarrollo frontend. En este artículo exploraremos los conceptos básicos de React y cómo empezar a utilizarlo.'),
('Mejores prácticas en Node.js', 'Carlos Ramírez', 'Node.js ha revolucionado el desarrollo backend con JavaScript. En este post discutiremos las mejores prácticas para escribir código Node.js eficiente, escalable y mantenible. Cubriremos temas como manejo de errores, organización de código y optimización de rendimiento.'),
('Introducción a PostgreSQL', 'Ana Martínez', 'PostgreSQL es uno de los sistemas de gestión de bases de datos relacionales más potentes y confiables disponibles. En esta guía aprenderemos sobre sus características principales, cómo instalarlo y configurarlo, y las mejores prácticas para su uso en producción.'),
('Docker para desarrolladores', 'Luis Hernández', 'Docker ha cambiado la forma en que desarrollamos y desplegamos aplicaciones. Permite crear contenedores que encapsulan todas las dependencias de una aplicación, haciendo que sea fácil de ejecutar en cualquier entorno. Aprenderemos los conceptos básicos y cómo integrar Docker en tu flujo de trabajo.');