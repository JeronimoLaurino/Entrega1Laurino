import express from 'express';
import UserModel from '../models/user.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

export default router;