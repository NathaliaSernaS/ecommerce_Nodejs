## Backend del proyecto Ecommerce 

Este es el backend del proyecto Ecommerce, una aplicación web de comercio electrónico que maneja productos, usuarios, carrito de compras y compras. Está construido utilizando varias tecnologías y herramientas como JWT, bcrypt, Sequelize, Express, Helmet, dotenv, Nodemon, pg, pg-hstore, cors, Cloudinary y Multer.

## Requisitos
Antes de ejecutar el proyecto, asegúrate de tener instaladas las siguientes dependencias:


Express: framework para organizar nuestro backend con node
Cors: para evitar que salgan errores de cors al hacer peticiones HTTP
Helmet: para configurar encabezados que harán más segura nuestra aplicación
Dotenv: para manipular facilmente las variables de entorno de la aplicación
pg pg-hstore: para facilitar el manejo de las bases de datos postgres desde node. Son dependencias requeridas por sequelize
Sequelize: ORM para conectarnos y manipular la base de datos
Nodemon: para poder ejecutar la aplicación, y que los cambios que hagamos se vean      reflejados en tiempo real, sin tener que refrescar el servidor

## Instalación y uso
 
 1. Clona el repositorio.
 2. Instale las dependencias con el comando npm install.

    npm i express 
    npm i cors
    npm i helmet 
    npm i dotenv
    npm i pg pg-hstore 
    npm i sequelize
    npm i nodemon -D

Para encriptar las contraseñas, utilizaremos esta librería llamada “Bcrypt”.
Con Bcrypt podemos hacer dos cosas: encriptar contraseñas, y comparar dos contraseñas: una encriptada y una sin encriptar, para saber si son iguales.Para instalar bcrypt usamos el siguiente comando: 
    
    npm i bcrypt

   
    
Luego para empezar a generar nuestros tokens, debemos generar unas claves secretas que le ayudará a jsonwebtokens a identificar nuestra aplicación al momento de cifrar.

Para esto, podemos abrir una consola, y allí usar la shell de node, escribiendo “node”

Luego, ejecutamos los siguiente comandos:
  
    npm i jsonwebtoken 

    require('crypto').randomBytes(64).toString('hex')


Luego, vamos a nuestro proyecto, al archivo .env, y pegamos la clave sin comillas en una variable llamada TOKEN_SECRET. Nuestro archivo .env debe verse de esta forma

DATABASE_URL=postgres://postgres:root@127.0.0.1:5432/<nombre_db>
TOKEN_SECRET=<clave_generada>


Luego para las imagenes utilizamos cloudinary, para instalarlo usamos el siguiente comando:

    npm i multer cloudinary

 

  3. Cree un archivo .env en la raíz del proyecto y establezca las variables de entorno necesarias (por ejemplo, el puerto en el que se ejecutará la API).
  4. Ejecute la API con el comando npm run dev.
