import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const passwordHash = bcrypt.hashSync('coder123', 10);

export const generateMockUsers = async (count = 1) => {
  const users = [];

  for (let i = 0; i < count; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: passwordHash,
      role: Math.random() < 0.5 ? 'user' : 'admin',
      pets: [],
    });
  }

  return users;
};

export const generateMockPets = (count = 1) => {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      name: faker.animal.dog(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 }),
    });
  }

  return pets;
};