const request = require('supertest');
const app = require('../../src/app');

test('It should list all users', () => request(app).get('/users')
    .then(res => {
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    }));


test('It should correctly insert an user', () => request(app).post('/users')
    .send({ name: 'Walter White', email: `${Date.now()}@email.com`, password: 'pwd123' })
    .then(res => {
        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Walter White');
    }));
