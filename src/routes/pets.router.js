import express from 'express';
import PetModel from '../models/pet.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const pets = await PetModel.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
});

export default router;