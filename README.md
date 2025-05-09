# Proyecto de Adopción de Mascotas

Este proyecto es una API RESTful para gestionar un sistema de adopción de mascotas, desarrollada con **Node.js**, **Express**, y **MongoDB**. Además, cuenta con documentación vía Swagger, tests funcionales y ha sido dockerizada.

---

## Tecnologías Usadas

- Node.js
- Express
- MongoDB + Mongoose
- Swagger (documentación)
- Jest + Supertest (tests funcionales)
- Docker

---

## Cómo usar este proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

### 4. Correr los tests funcionales

```bash
npm test
```

---

## Documentación Swagger

Una vez que el proyecto está corriendo localmente, podés acceder a la documentación en:

```
http://localhost:3000/api-docs
```

---

## Endpoints

- `/api/users` → Gestión de usuarios (GET)
- `/api/adoptions` → Gestión de adopciones (GET, POST, PUT, DELETE)

---

## Tests Funcionales

Se han implementado tests para todos los endpoints del router `adoption.router.js`, cubriendo casos de éxito y error.

Podés ejecutarlos con:

```bash
npm test
```

---

## Imagen Docker

Este proyecto está dockerizado y disponible públicamente en DockerHub.

### Imagen en DockerHub:

[https://hub.docker.com/r/laurino55/mi-proyecto](https://hub.docker.com/r/laurino55/mi-proyecto)

### Cómo ejecutar la imagen:

```bash
docker pull laurino55/mi-proyecto:latest
docker run -p 3000:3000 laurino55/mi-proyecto
```

---

## Construir manualmente la imagen

Si querés construir la imagen desde tu máquina:

```bash
docker build -t laurino55/mi-proyecto .
docker run -p 3000:3000 laurino55/mi-proyecto
```

---

## Licencia

Este proyecto es de uso educativo y libre distribución.