import express from 'express';

const router = express.Router();

// Simulación de base de datos en memoria (podés conectar con Mongo después)
let adoptions = [];

// GET /api/adoptions - listar todas las adopciones
router.get('/', (req, res) => {
  res.json(adoptions);
});

// GET /api/adoptions/:id - obtener una adopción por ID
router.get('/:id', (req, res) => {
  const adoption = adoptions.find(a => a.id === req.params.id);
  if (!adoption) return res.status(404).json({ error: 'Adopción no encontrada' });
  res.json(adoption);
});

// POST /api/adoptions - crear una nueva adopción
router.post('/', (req, res) => {
  const { userId, petId } = req.body;
  if (!userId || !petId) return res.status(400).json({ error: 'Faltan datos' });

  const newAdoption = {
    id: String(Date.now()),
    userId,
    petId,
    date: new Date().toISOString(),
  };
  adoptions.push(newAdoption);
  res.status(201).json(newAdoption);
});

// PUT /api/adoptions/:id - actualizar adopción
router.put('/:id', (req, res) => {
  const index = adoptions.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Adopción no encontrada' });

  const { userId, petId } = req.body;
  adoptions[index] = { ...adoptions[index], userId, petId };
  res.json(adoptions[index]);
});

// DELETE /api/adoptions/:id - eliminar una adopción
router.delete('/:id', (req, res) => {
  const index = adoptions.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Adopción no encontrada' });

  const deleted = adoptions.splice(index, 1);
  res.json(deleted[0]);
});

export default router;
