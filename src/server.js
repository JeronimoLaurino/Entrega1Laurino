import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import usersRouter from './routes/users.router.js';
import adoptionRouter from './routes/adoption.router.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Adopciones y Usuarios',
      version: '1.0.0',
      description: 'Documentación de la API usando Swagger'
    },
    servers: [
      {
        url: `http://localhost:${port}`
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionRouter);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Error al conectar a MongoDB:', error);
});