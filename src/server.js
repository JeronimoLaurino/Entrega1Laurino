import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import dotenv from 'dotenv';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionRouter from './routes/adoption.router.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mockDB';

app.use(express.json());

app.use('/api/mocks', mocksRouter);

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionRouter);
app.use('/api/pets', petsRouter);

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟢 Conectado a MongoDB');

  app.listen(PORT, () => {
    console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  });
})
.catch(error => {
  console.error('❌ Error al conectar a MongoDB:', error);
});