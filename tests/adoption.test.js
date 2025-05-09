import request from 'supertest';
import express from 'express';
import adoptionRouter from '../src/routes/adoption.router.js';

const app = express();
app.use(express.json());
app.use('/api/adoptions', adoptionRouter);

describe('Adoption Router', () => {
  let createdId = '';

  test('POST /api/adoptions - crear adopción', async () => {
    const res = await request(app).post('/api/adoptions').send({
      userId: 'user123',
      petId: 'pet456',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    createdId = res.body.id;
  });

  test('GET /api/adoptions - obtener todas las adopciones', async () => {
    const res = await request(app).get('/api/adoptions');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('GET /api/adoptions/:id - obtener una adopción específica', async () => {
    const res = await request(app).get(`/api/adoptions/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  test('PUT /api/adoptions/:id - actualizar adopción', async () => {
    const res = await request(app).put(`/api/adoptions/${createdId}`).send({
      userId: 'newUser',
      petId: 'newPet',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.userId).toBe('newUser');
  });

  test('DELETE /api/adoptions/:id - eliminar adopción', async () => {
    const res = await request(app).delete(`/api/adoptions/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(createdId);
  });

  test('GET /api/adoptions/:id - 404 después de eliminar', async () => {
    const res = await request(app).get(`/api/adoptions/${createdId}`);
    expect(res.statusCode).toBe(404);
  });
});