import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../services/mockGenerator.js';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';
const router = Router();

router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(10);
  res.json({ status: 'success', payload: pets });
});

router.get('/mockingusers', async (req, res) => {
  const users = await generateMockUsers(50);
  res.json({ status: 'success', payload: users });
});

router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  const mockUsers = await generateMockUsers(Number(users));
  const mockPets = generateMockPets(Number(pets));

  const insertedUsers = await UserModel.insertMany(mockUsers);
  const insertedPets = await PetModel.insertMany(mockPets);

  res.json({
    status: 'success',
    message: 'Datos generados e insertados en la base de datos',
    insertedUsers: insertedUsers.length,
    insertedPets: insertedPets.length
  });
});

export default router;
